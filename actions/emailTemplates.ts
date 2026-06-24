export function companyNotificationTemplate(formData: {
  name: string
  company: string
  industry: string
  email: string
  phone: string
  message: string
}) {
  const inquiryId = `PA-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New PayAssure Inquiry</title>
      </head>
      <body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0f172a;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f8fafc;padding:40px 20px;">
          <tr>
            <td align="center">
              <table cellpadding="0" cellspacing="0" border="0" width="680" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;overflow:hidden;">
                <tr>
                  <td style="background:#0B1F3A;padding:40px;text-align:center;">
                    <img src="cid:payassure-logo" alt="PayAssure" style="width:220px;max-width:100%;height:auto;display:block;margin:0 auto;" />
                    <h2 style="margin:32px 0 12px;color:#ffffff;font-size:28px;line-height:1.3;font-weight:700;">New Inquiry Received</h2>
                    <p style="margin:0;color:#cbd5e1;font-size:16px;line-height:1.8;max-width:460px;margin-left:auto;margin-right:auto;">A new contact inquiry has been submitted through the PayAssure website. Review the details and determine the appropriate follow-up.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <div style="display:inline-block;background:#dcfce7;color:#166534;padding:8px 16px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.5px;">✓ NEW WEBSITE INQUIRY</div>
                    <h1 style="margin:24px 0 24px;font-size:34px;line-height:1.2;color:#0f172a;">From <span style="color:#1E4ED8;">${formData.name}</span></h1>
                    <p style="font-size:16px;line-height:1.9;color:#475569;margin:0 0 20px;"><strong>Company:</strong> ${formData.company}</p>
                    <p style="font-size:16px;line-height:1.9;color:#475569;margin:0 0 20px;"><strong>Industry:</strong> ${formData.industry}</p>
                    <p style="font-size:16px;line-height:1.9;color:#475569;margin:0;"><strong>Message:</strong><br />${formData.message.replace(/\n/g, '<br />')}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 40px;">
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:20px;">
                      <h3 style="margin:0 0 16px;font-size:16px;color:#0f172a;">Inquiry Metadata</h3>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Reference ID</td>
                          <td style="padding:6px 0;color:#0f172a;font-size:13px;font-weight:600;">${inquiryId}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Contact Email</td>
                          <td style="padding:6px 0;color:#0f172a;font-size:13px;font-weight:600;">${formData.email}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Contact Phone</td>
                          <td style="padding:6px 0;color:#0f172a;font-size:13px;font-weight:600;">${formData.phone}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Received</td>
                          <td style="padding:6px 0;color:#0f172a;font-size:13px;font-weight:600;">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Status</td>
                          <td style="padding:6px 0;color:#10b981;font-size:13px;font-weight:700;">NEW</td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 40px;">
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:24px;">
                      <h3 style="margin:0 0 16px;font-size:18px;color:#0f172a;">Recommended Next Steps</h3>
                      <ol style="margin:0;padding-left:18px;color:#475569;line-height:2;font-size:14px;">
                        <li>Validate the inquiry details and business context.</li>
                        <li>Assign to appropriate sales or partnership team member.</li>
                        <li>Contact the prospect within 24 hours with next steps.</li>
                      </ol>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 40px;">
                    <a href="mailto:${formData.email}" style="display:inline-block;background:#0B1F3A;color:#ffffff;text-decoration:none;padding:14px 24px;border-radius:12px;font-weight:600;">Reply to ${formData.name}</a>
                  </td>
                </tr>
                <tr>
                  <td style="border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
                    <p style="margin:0;font-size:13px;color:#64748b;">PayAssure Internal Notification System</p>
                  </td>
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
  const inquiryId = `PA-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You For Contacting PayAssure</title>
      </head>
      <body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0f172a;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f8fafc;padding:40px 20px;">
          <tr>
            <td align="center">
              <table cellpadding="0" cellspacing="0" border="0" width="640" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:20px;overflow:hidden;">
                <tr>
                  <td style="background:#0B1F3A;padding:40px;text-align:center;">
                    <img src="cid:payassure-logo" alt="PayAssure" style="width:220px;max-width:100%;height:auto;display:block;margin:0 auto;" />
                    <h2 style="margin:32px 0 12px;color:#ffffff;font-size:28px;line-height:1.3;font-weight:700;">Thank You For Reaching Out</h2>
                    <p style="margin:0;color:#cbd5e1;font-size:16px;line-height:1.8;max-width:460px;margin-left:auto;margin-right:auto;">We've successfully received your inquiry and appreciate your interest in PayAssure.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <div style="display:inline-block;background:#dbeafe;color:#1e40af;padding:8px 16px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.5px;">✓ INQUIRY RECEIVED</div>
                    <h1 style="margin:24px 0 24px;font-size:34px;line-height:1.2;color:#0f172a;">Hello <span style="color:#1E4ED8;">${formData.name}</span>,</h1>
                    <p style="font-size:16px;line-height:1.9;color:#475569;margin:0 0 20px;">Thank you for contacting PayAssure. We have received your message and will review it shortly.</p>
                    <p style="font-size:16px;line-height:1.9;color:#475569;margin:0;">PayAssure is building financial infrastructure that enables trusted settlements, intelligent reconciliation, and stronger financial visibility across modern supply chains.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 40px;">
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:20px;">
                      <h3 style="margin:0 0 16px;font-size:16px;color:#0f172a;">Inquiry Information</h3>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Reference</td>
                          <td style="padding:6px 0;color:#0f172a;font-size:13px;font-weight:600;">${inquiryId}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Status</td>
                          <td style="padding:6px 0;color:#10B981;font-size:13px;font-weight:700;">RECEIVED</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;color:#64748b;font-size:13px;">Date</td>
                          <td style="padding:6px 0;color:#0f172a;font-size:13px;font-weight:600;">${new Date().toLocaleDateString()}</td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 40px;">
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:24px;">
                      <h3 style="margin:0 0 16px;font-size:18px;color:#0f172a;">What Happens Next?</h3>
                      <ol style="margin:0;padding-left:18px;color:#475569;line-height:2;font-size:14px;">
                        <li>We review your inquiry and business context.</li>
                        <li>We assess how PayAssure may align with your needs.</li>
                        <li>If appropriate, a representative will contact you for further discussion.</li>
                      </ol>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="border-top:1px solid #e2e8f0;padding:32px 40px;text-align:center;">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a;">PayAssure</p>
                    <p style="margin:8px 0 0;font-size:13px;color:#64748b;">Supply Chain Financial Infrastructure</p>
                    <p style="margin:12px 0 0;font-size:13px;color:#64748b;">Mombasa, Kenya</p>
                    <p style="margin:6px 0 0;font-size:13px;color:#64748b;">info@payassure.co.ke</p>
                    <p style="margin:6px 0 0;font-size:13px;color:#64748b;">www.payassure.co.ke</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}
