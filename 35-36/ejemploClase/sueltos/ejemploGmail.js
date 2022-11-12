import nodemailer from 'nodemailer'

const nodemailerConfig = {
    service: 'gmail',
    port: 587,
    auth: {
        user: 'xxxxxxxxxx@gmail.com',
        pass: 'xxxxxxxxxxxxx'
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const mailOptions = {
    from: 'el profe',
    to: 'ross.terry10@ethereal.email',
    subject: 'saludos con adjuntos desde gmail',
    html: `<h1>IUPIIIIII</h1>`,
    attachments: [
        { path: './nodemailer.png' },
        { path: './nodemailer.png' },
        { path: './nodemailer.png' },
    ]
}

try {
    await transporter.sendMail(mailOptions)
    console.log('OK')
} catch (error) {
    console.log(error)
}