import twilio from 'twilio'

export default class SmsSender {
    constructor({ numero, usuario, contrasenia }) {
        this.numero = numero
        this.cliente = twilio(usuario, contrasenia)
    }

    async enviar({ numero, texto }) {

        const options = {
            body: texto,
            from: this.numero,
            to: numero
        }

        try {
            await this.cliente.messages.create(options)
        } catch (error) {
            const customError = new Error(error.message)
            customError.tipo = 'ERROR_MENSAJERIA'
            throw customError
        }
    }
}

