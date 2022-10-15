import express from 'express'
import compression from 'compression'

const app = express()

const mensaje = 'Holaaaa '
const mensajeLargooo = mensaje.repeat(1000)

app.get('/saludo', (req, res) => {
  res.send(mensajeLargooo)
})

//{level: 8, threshold: 1}
app.get('/saludozip', compression(), (req, res) => {
  res.send(mensajeLargooo)
})

const PORT = parseInt(process.argv[2]) || 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
