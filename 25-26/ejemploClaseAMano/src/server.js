import express from 'express'
import session from 'express-session'
import { usuariosRouter } from './routers/usuariosRouter.js'
import { autenticar, requiereAutenticacion } from './auth/auth.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: 'shhhhhhhhhhhhhhhhhhhhh',
        resave: false,
        saveUninitialized: false,
    })
)

app.use('/usuarios', usuariosRouter)

app.post('/login', (req, res) => {
    const credenciales = req.body
    const { nombre, password } = credenciales
    try {
        autenticar(nombre, password)
    } catch (error) {
        return res.status(401).json({ msg: error.message })
    }
    req.session.user = {
        nombre
    }
    return res.sendStatus(200)
})

app.get('/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy()
    }
    res.sendStatus(200)
})

const datos = {
    info: 'super secreta'
}

app.get('/datos', requiereAutenticacion, (req, res) => {
    res.json(datos)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})