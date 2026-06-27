import { NextResponse } from 'next/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendSubmissionEmails, type Submission } from '@/lib/email';
import { normalizePhone, validateSubmission, type FormType } from '@/lib/forms';

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const recaptchaToken = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : undefined;
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return NextResponse.json(
      { error: 'reCAPTCHA verification failed. Please try again.' },
      { status: 400 }
    );
  }

  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  const formType: FormType = body.formType === 'contact' ? 'contact' : 'proposal';

  const fields = {
    name: str(body.name),
    email: str(body.email),
    phone: str(body.phone),
    community: str(body.community),
    service: str(body.service),
    message: str(body.message),
  };

  // Re-run the same validation the client does, so the API can't be bypassed.
  const errors = validateSubmission(fields, formType);
  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0].message }, { status: 400 });
  }

  const submission: Submission = {
    formType,
    name: fields.name,
    email: fields.email,
    phone: normalizePhone(fields.phone) ?? fields.phone,
    community: fields.community || undefined,
    service: fields.service,
    message: fields.message || undefined,
  };

  try {
    await sendSubmissionEmails(submission);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Submission failed:', err);
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}
