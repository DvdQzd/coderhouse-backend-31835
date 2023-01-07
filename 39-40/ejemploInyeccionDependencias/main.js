import { getTiempo } from './tiempo/index.js'

const tiempo = getTiempo()

console.log(tiempo.getFormattedNow())