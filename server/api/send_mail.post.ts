import nodemailer from 'nodemailer'
import prisma from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Имя и телефон обязательны для заполнения',
    })
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      phone: body.phone,
      service: body.service || null,
      comment: body.comment || null,
      route: body.route || null,
    },
  })

  try {
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
        <b>ID заявки:</b> ${user.id}<br>
        <b>Имя:</b> ${body.name}<br>
        <b>Телефон:</b> ${body.phone}<br>
        <b>Услуга:</b> ${body.service || 'Не указано'}<br>
        <b>Комментарий:</b> ${body.comment || 'Нет комментария'}<br>
        <b>Route:</b> ${body.route || 'Не указано'}<br>
        <b>Дата создания:</b> ${user.createdAt.toLocaleString('ru-RU')}
      `,
    })
  }
  catch (error) {
    console.error('Ошибка отправки email:', error)
  }

  return {
    ok: true,
    userId: user.id,
  }
})
