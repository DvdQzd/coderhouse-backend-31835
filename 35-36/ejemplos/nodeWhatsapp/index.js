import twilio from 'twilio'

const accountSid = ''
const authToken = ''

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un WSP desde Node.js!',
    mediaUrl: [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg' ],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491161234567'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
