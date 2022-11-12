import twilio from 'twilio'

const accountSid = ''
const authToken = ''

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un SMS desde Node.js!',
    from: '+',
    to: '+'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
