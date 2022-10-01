require('dotenv').config()

const modo = process.env.MODE ?? 'prod'
const puerto = Number(process.env.PORT ?? 0)
const debug = process.env.DEB == 'true' ? true : false

console.log({
    modo,
    puerto,
    debug
})