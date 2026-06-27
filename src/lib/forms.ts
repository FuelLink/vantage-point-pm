export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Progressive formatting for a phone <input> as the user types.
 * Keeps only digits and renders them as (123) 456-7890.
 */
export function formatPhoneInput(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  digits = digits.slice(0, 10);

  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * Canonicalizes a phone number to (123) 456-7890.
 * Returns null when it isn't a valid US 10-digit number.
 */
export function normalizePhone(value: string): string | null {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  if (digits.length !== 10) return null;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export type FormType = 'proposal' | 'contact';

export type FormFields = {
  name?: string;
  email?: string;
  phone?: string;
  community?: string;
  service?: string;
  message?: string;
};

export type FieldError = { field: string; message: string };

/**
 * Shared validation rules for both forms. Community is always optional;
 * message is required only on the contact form.
 */
export function validateSubmission(data: FormFields, formType: FormType): FieldError[] {
  const errors: FieldError[] = [];
  const name = data.name?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim();
  const service = data.service?.trim();
  const message = data.message?.trim();

  if (!name) {
    errors.push({ field: 'name', message: 'Please enter your name.' });
  }

  if (!email) {
    errors.push({ field: 'email', message: 'Please enter your email address.' });
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  if (!phone) {
    errors.push({ field: 'phone', message: 'Please enter your phone number.' });
  } else if (!normalizePhone(phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid 10-digit phone number.' });
  }

  if (!service) {
    errors.push({ field: 'service', message: 'Please select a service type.' });
  }

  if (formType === 'contact' && !message) {
    errors.push({ field: 'message', message: 'Please enter a message.' });
  }

  return errors;
}
