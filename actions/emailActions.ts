import path from 'path'
import { companyNotificationTemplate, clientConfirmationTemplate } from './emailTemplates'

export type ContactFormData = {
  name: string
  company: string
  industry: string
  email: string
  phone: string
  reason: string
  message: string
}

function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST ,
    port: Number(process.env.SMTP_PORT ),
    secure: process.env.SMTP_SECURE !== 'false', // true for port 465 (SSL/TLS)
    auth: {
      user: process.env.SMTP_USER ,
      pass: process.env.SMTP_PASS ,
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
  const logoPath = path.join(process.cwd(), 'public', 'payassure-logo.png')

  const attachments = [
    {
      filename: 'payassure-logo.png',
      path: logoPath,
      cid: 'payassure-logo',
    },
  ]

  const companyMail = {
    from: `PayAssure <${process.env.SMTP_USER}>`,
    to: process.env.COMPANY_EMAIL,
    subject: `New inquiry from ${formData.name} • PayAssure website`,
    html: companyNotificationTemplate(formData),
    attachments,
  }

  const clientMail = {
    from: `PayAssure <${process.env.SMTP_USER}>`,
    to: formData.email,
    subject: 'Thanks for contacting PayAssure — we received your inquiry',
    html: clientConfirmationTemplate(formData),
    attachments,
  }

  const companyResult = await transporter.sendMail(companyMail)
  const clientResult = await transporter.sendMail(clientMail)

  return {
    companyResult: {
      accepted: companyResult.accepted,
      rejected: companyResult.rejected,
      messageId: companyResult.messageId,
    },
    clientResult: {
      accepted: clientResult.accepted,
      rejected: clientResult.rejected,
      messageId: clientResult.messageId,
    },
  }
}
