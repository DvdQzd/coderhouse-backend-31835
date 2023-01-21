import express from 'express'
import { graphqlMiddleware } from './graphqlMiddleware.js'

const app = express()

app.use(express.static('public'))

app.use('/graphql', graphqlMiddleware)

const PORT = 8080
app.listen(PORT, () => {
  const msg = `Servidor corriendo en puerto: ${PORT}`
  console.log(msg)
})
