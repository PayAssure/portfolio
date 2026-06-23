export function companyNotificationTemplate(formData: {
  name: string
  company: string
  industry: string
  email: string
  phone: string
  message: string
}) {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New PayAssure Inquiry</title>
      </head>
      <body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0f172a;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f8fafc;padding:30px 0;">
          <tr>
            <td align="center">
              <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(15,23,42,0.08);">
                <tr>
                  <td style="padding:32px 40px;background:linear-gradient(135deg,#2563eb 0%,#0ea5e9 100%);color:#ffffff;">
                    <h1 style="margin:0;font-size:28px;line-height:1.1;font-weight:700;">New PayAssure Inquiry</h1>
                    <p style="margin:12px 0 0;font-size:15px;line-height:1.6;opacity:0.9;">A new partnership message arrived from the contact form.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 40px;">
                    <p style="margin:0 0 24px;font-size:16px;line-height:1.75;color:#0f172a;">Please review the inquiry below and reach out to the prospect directly.</p>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate;">
                      ${Object.entries(formData)
                        .map(
                          ([key, value]) => `
                            <tr>
                              <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;width:160px;font-size:14px;font-weight:600;color:#334155;">${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                              <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#475569;">${value}</td>
                            </tr>
                          `,
                        )
                        .join('')}
                    </table>
                    <div style="margin-top:28px;padding:20px;border-radius:18px;background:#f1f5f9;">
                      <p style="margin:0;font-size:14px;line-height:1.7;color:#475569;">This message was sent from the PayAssure website contact form. Follow up quickly to maintain interest and support your partnership pipeline.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 40px 32px;font-size:12px;color:#64748b;text-align:center;">PayAssure • Supply chain finance for the next generation of African commerce</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

export function clientConfirmationTemplate(formData: {
  name: string
  company: string
  industry: string
  email: string
  phone: string
  message: string
}) {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your PayAssure Inquiry</title>
      </head>
      <body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0f172a;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f8fafc;padding:30px 0;">
          <tr>
            <td align="center">
              <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(15,23,42,0.08);">
                <tr>
                  <td style="padding:32px 40px;background:#e0f2fe;color:#0f172a;">
                    <h1 style="margin:0;font-size:28px;line-height:1.1;font-weight:700;">Thanks for reaching out, ${formData.name}!</h1>
                    <p style="margin:12px 0 0;font-size:15px;line-height:1.6;color:#0f172a;opacity:0.85;">Your message is now with the PayAssure team. We will review your inquiry and connect with you shortly.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 40px;">
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.75;color:#0f172a;">Here’s a quick summary of what you shared:</p>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate;">
                      ${Object.entries(formData)
                        .map(
                          ([key, value]) => `
                            <tr>
                              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:160px;font-size:14px;font-weight:600;color:#334155;">${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#475569;">${value}</td>
                            </tr>
                          `,
                        )
                        .join('')}
                    </table>
                    <div style="margin-top:28px;padding:20px;border-radius:18px;background:#e0f2fe;">
                      <p style="margin:0;font-size:14px;line-height:1.7;color:#0f172a;">A PayAssure partner will follow up shortly to discuss the next step for your supply chain project.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 40px 32px;font-size:12px;color:#64748b;text-align:center;">PayAssure • Reimagining trust and finance across supply chains</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}
