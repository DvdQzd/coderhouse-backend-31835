import { createServer } from './server.js'

const PORT = process.argv[2] ?? 8081

await createServer({ port: PORT })
