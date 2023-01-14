import express from 'express'

class Persona {
    #nombre
    constructor({ nombre }) {
        this.#setNombre(nombre)
    }

    #setNombre(nombre) {
        if (!nombre) throw new Error('falta el nombre')
        this.#nombre = nombre
    }
}

const app = express()

app.use(express.json())

app.post('/api/personas', (req, res) => {
    let persona
    try {
        persona = new Persona(req.body)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

    persona.id = `${Date.now()}`
    res.status(201).json(persona)
})

let server

export async function conectar({ port = 0 }) {
    return new Promise((resolve, reject) => {
        server = app.listen(8080, err => {
            if (err) {
                reject(err)
            } else {
                resolve(port)
            }
        })
    })
}

export async function desconectar() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

