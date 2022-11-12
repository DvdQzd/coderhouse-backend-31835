import { createTransport } from 'nodemailer';

const TEST_MAIL = 'darby42@ethereal.email'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: 'gdCFev6sfx41WXJspP'
    }
});

const mailOptions = {
    from: `Prueba mail personal - ${TEST_MAIL}`,
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1>Mail de prueba desde Node.js</h1>'
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}
