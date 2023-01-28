class Model {
    async save() {
        this.db.save(this.data)
    }
}

class Persona extends Model {
    constructor(data) {
        super()
        this.data = data
    }
}

// personaFactory
const db = new DB({ url: 'mongodb://localhost/coderhouse' })

export default class Factory {
    static crearPersona(datosPersona) {
        const persona = new Persona(datosPersona)
        persona.db = db
        return persona
    }

    static crear(clase, datos) {
        if (typeof clase === 'Persona') {
            return new clase(db, datos)
        }
    }
}

// personaService

import Factory from './'

async function registrarPersona() {
    const persona = Factory.crear(Persona, ({ nombre: 'marian' })
    await persona.save()
}
