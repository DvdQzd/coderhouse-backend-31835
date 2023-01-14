import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: 'http://localhost:9000',
  optionsSuccessStatus: 200,
  // methods: 'POST'
}

const dominiosPermitidos = ['http://localhost:4000']
const metodosPermitidos = ['POST']

function corsDelegate(req, callback) {
  const origin = req.header('Origin')
  const method = req.method

  if (dominiosPermitidos.includes(origin)
    && metodosPermitidos.includes(method)) {
    callback(null, { origin: true })
  } else {
    callback(null, { origin: false })
  }
}

app.use(
  cors(corsOptions)
  // cors(corsDelegate)
)

app.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

app.get('/mensaje', (req, res) => {
  res.send('el mensaje para mostrar')
})

app.listen(3000)
