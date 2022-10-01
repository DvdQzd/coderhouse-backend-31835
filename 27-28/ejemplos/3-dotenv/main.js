const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path:
    // process.env.MODO == 'byn'
    process.argv[2] == 'byn'
      ? path.resolve(__dirname, 'byn.env')
      : path.resolve(__dirname, 'colores.env'),
})

const fondo = process.env.FONDO
const frente = process.env.FRENTE

console.log({
  fondo,
  frente,
})

console.log(path.resolve(__filename))