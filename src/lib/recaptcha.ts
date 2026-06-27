/**
 * Server-side verification for Google reCAPTCHA v2 ("I'm not a robot" checkbox).
 * Returns true only when Google confirms the token is valid.
 */
export async function verifyRecaptcha(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY is not set.');
    return false;
  }

  if (!token) {
    return false;
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });

    const data = (await res.json()) as { success: boolean; 'error-codes'?: string[] };

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
    }

    return data.success === true;
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return false;
  }
}
