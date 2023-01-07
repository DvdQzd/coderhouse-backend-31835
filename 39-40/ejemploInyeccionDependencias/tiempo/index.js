import { Tiempo } from './Tiempo.js'

let tiempo

const fechaEsperada = 12345
const mockDate = {
    now: () => fechaEsperada
}

switch (process.env.NODE_ENV) {
    case 'production':
        tiempo = new Tiempo(Date)
        break
    default:
        tiempo = new Tiempo(mockDate)
}

export function getTiempo() {
    return tiempo
}