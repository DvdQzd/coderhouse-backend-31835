const express = require('express')
const saludoAzul = require('demo-npm-para-curso-de-coder')

const app = express()

app.get('/', (req,res) => {
    res.send('Hola Yarn')
})

const PORT = 8080
const server = app.listen(PORT, () => {
    saludoAzul()
})
server.on('error', error => console.error(`Error en servidor`, error))