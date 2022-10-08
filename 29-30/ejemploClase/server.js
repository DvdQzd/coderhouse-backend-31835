import express from 'express'

export function createServer({ port = 8080 }) {
    return new Promise((resolve, reject) => {
        const app = express()
        let server
        app.get('/', (req, res, next) => {
            res.send(`proceso '${process.pid}' escuchando en ${server.address().port}`)
        })

        server = app.listen(port, () => {
            console.log(`proceso '${process.pid}' escuchando en ${server.address().port}`)
            resolve(server)
        })
        server.on('error', reject)
    })
}