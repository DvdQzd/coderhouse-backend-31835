import cluster from 'cluster'
import os from 'os'

import { createServer } from './server.js'

const PORT = process.argv[2] ?? 8080

if (cluster.isPrimary) {
    const cantCpus = os.cpus().length
    for (let i = 0; i < cantCpus; i++) {
        cluster.fork()
    }
    cluster.on('exit', worker => {
        console.log(`que en paz descanse el proceso: '${worker.process.pid}'`)
        cluster.fork()
    })
} else {
    await createServer({ port: PORT })
}
