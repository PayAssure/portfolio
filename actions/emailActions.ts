import { companyNotificationTemplate, clientConfirmationTemplate } from './emailTemplates'

export type ContactFormData = {
  name: string
  company: string
  industry: string
  email: string
  phone: string
  message: string
}

function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST || '',
    port: Number(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  }
}

export async function sendContactEmails(formData: ContactFormData) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP configuration is required to send email')
  }

  const smtpConfig = getSmtpConfig()
  const nodemailer = await import('nodemailer')
  const transporter = nodemailer.createTransport(smtpConfig)

  const companyMail = {
    from: `PayAssure <${process.env.SMTP_USER}>`,
    to: process.env.COMPANY_EMAIL || 'hello@payassure.co.ke',
    subject: `New inquiry from ${formData.name} • PayAssure website`,
    html: companyNotificationTemplate(formData),
  }

  const clientMail = {
    from: `PayAssure <${process.env.SMTP_USER}>`,
    to: formData.email,
    subject: 'Thanks for contacting PayAssure — we received your inquiry',
    html: clientConfirmationTemplate(formData),
  }

  await transporter.sendMail(companyMail)
  await transporter.sendMail(clientMail)
}
