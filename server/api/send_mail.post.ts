import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Rental Concierge" <${process.env.SMTP_USER}>`,
    to: 'info@rental-concierge.com',
    subject: 'Новая заявка',
    html: `
      <b>Имя:</b> ${body.name}<br>
      <b>Телефон:</b> ${body.phone}<br>
      <b>Услуга:</b> ${body.service}<br>
      <b>Комментарий:</b> ${body.comment}<br>
      <b>Route:</b> ${body.route}
    `,
  })

  return { ok: true }
})
