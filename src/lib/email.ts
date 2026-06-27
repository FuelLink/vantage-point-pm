import sgMail from '@sendgrid/mail';

export type Submission = {
  formType: 'proposal' | 'contact';
  name: string;
  email: string;
  community?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const BRAND = {
  name: 'Vantage Point Property Management',
  tagline: 'Proactive & Transparent HOA and Condominium Management',
  black: '#171717',
  orange: '#f97316',
  orangeDark: '#c2410c',
  ink: '#1f2937',
  muted: '#6b7280',
  faint: '#9ca3af',
  line: '#ececec',
  pageBg: '#f5f0e8',
  cardBg: '#ffffff',
  phone: '(888) 332-8986',
  phoneHref: 'tel:+18883328986',
  email: 'info@vantageppm.com',
  location: 'Arlington, Washington · Puget Sound',
};

/** Absolute base URL — required because email clients cannot resolve relative image paths. */
function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vantageppm.com').replace(/\/$/, '');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
}

/** Bulletproof, rounded CTA button with a VML fallback for Outlook (desktop). */
function button(label: string, href: string, widthPx = 240): string {
  const safe = escapeHtml(label);
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
  <tr><td align="center">
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:48px;v-text-anchor:middle;width:${widthPx}px;" arcsize="50%" stroke="f" fillcolor="${BRAND.black}">
      <w:anchorlock/>
      <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">${safe}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <a href="${href}" target="_blank" style="display:inline-block;background-color:${BRAND.black};color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;line-height:48px;text-align:center;text-decoration:none;padding:0 32px;border-radius:9999px;mso-padding-alt:0;">${safe}</a>
    <!--<![endif]-->
  </td></tr>
</table>`;
}

/**
 * Wraps body content in the full cross-client email shell:
 * XHTML doctype, mobile media queries, Outlook fixes, preheader, header + footer.
 */
function layout(opts: { title: string; preheader: string; content: string }): string {
  const { title, preheader, content } = opts;
  const logo = `${siteUrl()}/vantage_point_logo_dark.png`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light only" />
  <title>${escapeHtml(title)}</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <style>
    html, body { margin:0 !important; padding:0 !important; height:100% !important; width:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; border-collapse:collapse !important; }
    img { -ms-interpolation-mode:bicubic; border:0; height:auto; line-height:100%; outline:none; text-decoration:none; }
    a { text-decoration:none; }
    body, table, td, p, a { font-family:Arial, Helvetica, sans-serif; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; max-width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .py { padding-top:28px !important; padding-bottom:28px !important; }
      .logo { width:170px !important; height:auto !important; }
      .h1 { font-size:22px !important; line-height:28px !important; }
    }
    @media (prefers-color-scheme: dark) {
      body, .page-bg { background-color:${BRAND.pageBg} !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;width:100%;background-color:${BRAND.pageBg};">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;color:${BRAND.pageBg};">
    ${escapeHtml(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" class="page-bg" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.pageBg};">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;margin:0 auto;">

          <!-- Header -->
          <tr>
            <td align="center" bgcolor="${BRAND.black}" style="background-color:${BRAND.black};border-radius:14px 14px 0 0;padding:32px 40px;">
              <img src="${logo}" alt="${escapeHtml(BRAND.name)}" width="190" class="logo" style="display:block;width:190px;max-width:190px;height:auto;margin:0 auto;" />
            </td>
          </tr>
          <!-- Orange accent rule -->
          <tr>
            <td bgcolor="${BRAND.orange}" style="background-color:${BRAND.orange};font-size:0;line-height:0;height:4px;">&nbsp;</td>
          </tr>

          <!-- Body card -->
          <tr>
            <td class="px py" bgcolor="${BRAND.cardBg}" style="background-color:${BRAND.cardBg};padding:40px 40px 36px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" bgcolor="${BRAND.cardBg}" style="background-color:${BRAND.cardBg};border-radius:0 0 14px 14px;border-top:1px solid ${BRAND.line};padding:28px 40px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:${BRAND.black};padding-bottom:6px;">
                    ${escapeHtml(BRAND.name)}
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:${BRAND.muted};padding-bottom:14px;">
                    ${escapeHtml(BRAND.location)}<br />
                    <a href="${BRAND.phoneHref}" style="color:${BRAND.muted};text-decoration:none;">${escapeHtml(BRAND.phone)}</a>
                    &nbsp;·&nbsp;
                    <a href="mailto:${BRAND.email}" style="color:${BRAND.muted};text-decoration:none;">${escapeHtml(BRAND.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:16px;color:${BRAND.faint};">
                    &copy; ${new Date().getFullYear()} ${escapeHtml(BRAND.name)}. All rights reserved.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** A labeled detail row used in the admin notification. */
function detailRow(label: string, value: string | undefined, isMessage = false): string {
  if (!value) return '';
  const rendered = isMessage ? nl2br(value) : escapeHtml(value);
  return `
  <tr>
    <td style="padding:14px 0;border-bottom:1px solid ${BRAND.line};">
      <p style="margin:0 0 3px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.faint};">${escapeHtml(label)}</p>
      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;color:${BRAND.ink};">${rendered}</p>
    </td>
  </tr>`;
}

function heading(text: string, sub: string): string {
  return `
  <h1 class="h1" style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:32px;font-weight:bold;color:${BRAND.black};">${escapeHtml(text)}</h1>
  <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:${BRAND.muted};">${escapeHtml(sub)}</p>`;
}

/** Internal notification sent to the team. */
function adminEmail(s: Submission): { subject: string; html: string; text: string } {
  const title = s.formType === 'proposal' ? 'New Proposal Request' : 'New Contact Message';
  const host = siteUrl().replace(/^https?:\/\//, '');

  const content = `
    ${heading(title, `Submitted via ${host}`)}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
      ${detailRow('Name', s.name)}
      ${detailRow('Email', s.email)}
      ${detailRow('Phone', s.phone)}
      ${detailRow('Community / Property', s.community)}
      ${detailRow('Service Type', s.service)}
      ${detailRow('Message', s.message, true)}
    </table>
    ${button('Reply to Sender', `mailto:${s.email}`, 220)}
  `;

  const text = [
    title,
    `Submitted via ${host}`,
    '',
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    s.phone ? `Phone: ${s.phone}` : '',
    s.community ? `Community / Property: ${s.community}` : '',
    s.service ? `Service Type: ${s.service}` : '',
    s.message ? `\nMessage:\n${s.message}` : '',
  ]
    .filter((line) => line !== '')
    .join('\n');

  return {
    subject: `${title} — ${s.name}`,
    html: layout({ title, preheader: `${title} from ${s.name}`, content }),
    text,
  };
}

/** Branded confirmation sent to the person who submitted the form. */
function confirmationEmail(s: Submission): { subject: string; html: string; text: string } {
  const firstName = s.name.split(' ')[0] || s.name;
  const intro =
    s.formType === 'proposal'
      ? `Thank you for requesting a proposal. We've received your details and a member of our team will reach out shortly to put together a customized management plan for your community.`
      : `Thank you for reaching out. We've received your message and a member of our team will be in touch within one business day.`;

  const content = `
    ${heading(`Thank you, ${firstName}.`, 'We have received your message.')}
    <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:${BRAND.ink};">${escapeHtml(intro)}</p>
    <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:${BRAND.ink};">In the meantime, feel free to reply directly to this email or call us at <a href="${BRAND.phoneHref}" style="color:${BRAND.orangeDark};font-weight:bold;text-decoration:none;">${escapeHtml(BRAND.phone)}</a> — we're always happy to help.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 32px;">
      <tr>
        <td style="border-left:3px solid ${BRAND.orange};background-color:${BRAND.pageBg};padding:18px 22px;border-radius:0 8px 8px 0;">
          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.faint};">What happens next</p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:23px;color:${BRAND.ink};">A member of our team will review your request and follow up personally. No automated runaround — just a real conversation about your community's needs.</p>
        </td>
      </tr>
    </table>

    ${button('Visit Our Website', siteUrl(), 220)}

    <p style="margin:32px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;color:${BRAND.ink};">Warm regards,<br /><span style="font-weight:bold;">The ${escapeHtml(BRAND.name)} Team</span></p>
  `;

  const text = [
    `Thank you, ${firstName}.`,
    '',
    intro,
    '',
    `In the meantime, feel free to reply directly to this email or call us at ${BRAND.phone}.`,
    '',
    'What happens next: A member of our team will review your request and follow up personally.',
    '',
    `Warm regards,`,
    `The ${BRAND.name} Team`,
    `${BRAND.phone} · ${BRAND.email}`,
  ].join('\n');

  return {
    subject: `We received your message — ${BRAND.name}`,
    html: layout({
      title: `Thank you from ${BRAND.name}`,
      preheader: "We've received your message and will be in touch shortly.",
      content,
    }),
    text,
  };
}

/**
 * Sends both the admin notification and the submitter confirmation.
 * Throws if SendGrid is not configured or the admin email fails to send.
 */
export async function sendSubmissionEmails(s: Submission): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const adminTo = process.env.ADMIN_EMAIL;

  if (!apiKey || !fromEmail || !adminTo) {
    throw new Error(
      'Email is not configured. Set SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, and ADMIN_EMAIL.'
    );
  }

  sgMail.setApiKey(apiKey);

  const from = {
    email: fromEmail,
    name: process.env.SENDGRID_FROM_NAME || BRAND.name,
  };

  const admin = adminEmail(s);
  const confirmation = confirmationEmail(s);

  // Notify the team. If this fails, surface the error so the user sees a failure.
  await sgMail.send({
    to: adminTo,
    from,
    replyTo: s.email,
    subject: admin.subject,
    html: admin.html,
    text: admin.text,
  });

  // Confirm to the submitter. Don't fail the whole request if only this one errors.
  try {
    await sgMail.send({
      to: s.email,
      from,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    });
  } catch (err) {
    console.error('Failed to send confirmation email to submitter:', err);
  }
}
