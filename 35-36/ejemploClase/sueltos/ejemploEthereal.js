import nodemailer from 'nodemailer'

const nodemailerConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ross.terry10@ethereal.email',
        pass: 'AzRWwyuFNrb76h5FYb'
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const mailOptions = {
    from: 'el profe',
    to: 'coco@coco.com',
    subject: 'mail para coco',
    html: `<h1>Coco</h1>
Felicidades, coco!`
}

try {
    await transporter.sendMail(mailOptions)
    console.log('OK')
} catch (error) {
    console.log(error)
}