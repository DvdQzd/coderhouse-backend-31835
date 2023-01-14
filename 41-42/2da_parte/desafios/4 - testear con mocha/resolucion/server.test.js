import { strictEqual, deepStrictEqual } from 'assert'
import axios from 'axios'

const enviarNumero = numero => axios.post('http://localhost:8080/ingreso', { numero })
const recibirNumeros = () => axios('http://localhost:8080/egreso')

describe("Comprobando que el servidor funcione bien", function () {

    /* before(function() {
        //console.log('********* Comienzo TOTAL de Test *********')
    })

    after(function() {
        //console.log('********* Fin TOTAL de Test *********')
    })

    beforeEach(function() {
        //console.log('********* Comienzo Test *********')
    })

    afterEach(function() {
        //console.log('********* Fin Test *********')
    }) */

    it('debería guardar y luego recibir 10 números consecutivos', async function () {
        for (let i = 0; i < 10; i++) await enviarNumero(i)

        const { data } = await recibirNumeros()
        const { numeros } = data

        //console.log(numeros, numeros.length)
        strictEqual(numeros.length, 10)
        deepStrictEqual(numeros, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
    })
})
