const express = require('express')
const { fork } = require('child_process')
const path = require('path')

const app = express()

function calculoLento() {
    let sum = 0
    for (let i = 0; i < 5e9; i++) {
        sum += i
    }
    return sum
}

let visitas = 0

app.get('/', (req, res) => {
    res.json({ visitas: ++visitas })
})

app.get('/bloqueante', (req, res) => {
    const resultado = calculoLento()
    res.json({ resultado })
})

app.get('/no-bloqueante', (req, res) => {
    const computo = fork(path.resolve(__dirname, 'computo.js'))
    computo.send('start')
    computo.on('message', resultado => {
        res.json({ resultado })
    })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})
server.on('error', err => { console.log(`Error en servidor: ${err}`) })