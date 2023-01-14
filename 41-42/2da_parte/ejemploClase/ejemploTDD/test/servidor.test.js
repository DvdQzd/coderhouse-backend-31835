import axios from 'axios'
import assert from 'assert'
import { conectar, desconectar } from '../src/server.js'

describe('servidor coderhouse', () => {

    before(async () => {
        await conectar({ port: 8080 })
    })

    after(async () => {
        await desconectar()
    })

    beforeEach(() => { })

    afterEach(() => { })

    describe('personas', () => {
        describe('al enviar datos correctos', () => {
            it('deberia agregar una persona y devolvermela junto con su id asignado', async () => {
                const { data } = await axios.post('http://localhost:8080/api/personas', {
                    nombre: 'marian'
                })
                assert.ok(data.id)
            })

            it('deberia devolver un codigo 201', async () => {
                const { status } = await axios.post('http://localhost:8080/api/personas', {
                    nombre: 'marian'
                })
                assert.strictEqual(status, 201)
            })
        })

        describe('al enviar datos incorrectos', () => {
            it('debneria devolver un error 400', async () => {
                return assert.rejects(
                    axios.post('http://localhost:8080/api/personas', {}),
                    error => {
                        assert.strictEqual(error.response?.status, 400)
                        return true
                    }
                )
            })
        })
    })
})