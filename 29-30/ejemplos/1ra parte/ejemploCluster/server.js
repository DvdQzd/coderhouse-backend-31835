const cluster = require('cluster')

const http = require('http')

const numCPUs = require('os').cpus().length

if (cluster.isPrimary) {
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('Hola mundo!')
    }).listen(8000)

    console.log(`Worker ${process.pid} started`)
}
