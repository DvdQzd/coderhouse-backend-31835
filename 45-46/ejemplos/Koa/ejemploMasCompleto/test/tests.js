import app from '../src/server.js'
import runAuthTests from './apiAuthTests.js'
import runApiRestTests from './apiRestTests.js'
import runSocketTests from './socketsTests.js'

const PORT = 8080
const baseURL = `http://localhost:${PORT}/`

const server = await new Promise((resolve, reject) => {
  const server = app.listen(PORT, () => {
    console.log(`Servidor Koa escuchando en el puerto ${server.address().port}`)
    resolve(server)
  })
})

await runApiRestTests(baseURL)

await runSocketTests(baseURL)

await runAuthTests(baseURL)

await new Promise((resolve, reject) => {
  server.close(err => {
    if (err) return reject(err)
    resolve()
  })
})
