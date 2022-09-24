import express from 'express'
import session from 'express-session'

import passport from 'passport'
import { Strategy } from 'passport-local'

import { usuariosRouter } from './routers/usuariosRouter.js'
import { requiereAutenticacion } from './auth/auth.js'
import { logoutController } from './controllers/logoutController.js'

import { obtenerUsuarioPorNombre, guardarUsuario, obtenerUsuarioPorId } from './persistencia/usuarios.js'

import { crearUsuario } from './models/Usuario.js'

//====================================================
// config de passport

passport.use('registro', new Strategy({ passReqToCallback: true }, (req, username, password, done) => {
    try {
        obtenerUsuarioPorNombre()
        return done(null, false)
    } catch (error) {
        // todo ok
    }

    let usuario
    try {
        const datosUsuario = req.body
        usuario = crearUsuario(datosUsuario)
    } catch (error) {
        return done(error)
    }

    try {
        guardarUsuario(usuario)
    } catch (error) {
        return done(error)
    }
    done(null, usuario)
}))

passport.use('login', new Strategy((username, password, done) => {
    let usuario
    try {
        usuario = obtenerUsuarioPorNombre(username)
    } catch (error) {
        return done(null, false)
    }
    if (usuario.password !== password) {
        return done(null, false)
    }
    done(null, usuario)
}))

passport.serializeUser((user, done) => {
    done(null, user.id) // output: 1
})

passport.deserializeUser((id, done) => {
    const user = obtenerUsuarioPorId(id)
    done(null, user) // output: { id: 1, username: 'pepe', password: '1234' }
})

//====================================================
// config del server

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

app.use(passport.initialize())
app.use(passport.session())

//==============================================
// usuarios

app.use('/usuarios', usuariosRouter)

//==============================================
// routers autorizacion

// registro
app.post('/registro', passport.authenticate('registro', {
    failureRedirect: '/failRegister',
    successRedirect: '/successRegister',
}))
app.post('/failRegister', (req, res) => {
    res.status(400).json({ err: 'fallo el registro' })
})
app.post('/successRegister', (req, res) => {
    res.json({ msg: 'ok' })
})

// login
app.post('/login', passport.authenticate('login', {
    failureRedirect: '/failLogin',
    successRedirect: '/successLogin',
}))
app.post('/failLogin', (req, res) => {
    res.status(400).json({ err: 'fallo el login' })
})
app.post('/successLogin', (req, res) => {
    res.json({ msg: 'ok' })
})

// logout
app.get('/logout', logoutController)

//==============================================
// datos

const datos = {
    info: 'super secreta'
}

app.get('/datos', requiereAutenticacion, (req, res) => {
    res.json(datos)
})

//==============================================
// listen

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en puerto ${server.address().port}`)
})