'use client';

import { useRef, useState } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import { useToast } from '@/components/Toast';
import {
  formatPhoneInput,
  normalizePhone,
  validateSubmission,
  type FormType,
} from '@/lib/forms';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Shared submission logic for the proposal and contact forms:
 * live phone formatting, client-side validation (surfaced via toasts),
 * reCAPTCHA, and the POST to /api/submit.
 */
export function useFormSubmit(formType: FormType) {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [phone, setPhone] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const toast = useToast();

  function onPhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhoneInput(e.target.value));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const errors = validateSubmission(data, formType);
    if (errors.length > 0) {
      toast.error(errors[0].message);
      const field = form.elements.namedItem(errors[0].field);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      toast.error('Please confirm you are not a robot.');
      return;
    }

    setStatus('submitting');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          phone: normalizePhone(data.phone),
          formType,
          recaptchaToken: token,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      toast.success(
        formType === 'proposal'
          ? "Request sent! We'll be in touch shortly."
          : "Message sent! We'll reply within one business day."
      );
      form.reset();
      setPhone('');
      recaptchaRef.current?.reset();
    } catch (err) {
      setStatus('error');
      const message =
        err instanceof DOMException && err.name === 'AbortError'
          ? 'Request timed out — please check your connection and try again.'
          : err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.';
      toast.error(message);
      recaptchaRef.current?.reset();
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return { status, phone, onPhoneChange, recaptchaRef, handleSubmit };
}
