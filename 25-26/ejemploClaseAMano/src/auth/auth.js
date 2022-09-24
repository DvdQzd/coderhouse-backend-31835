import { obtenerUsuarioPorNombre } from '../persistencia/usuarios.js'

export function autenticar(nombre, password) {
    let usuario
    try {
        usuario = obtenerUsuarioPorNombre(nombre)
    } catch (error) {
        throw new Error('error en la autenticacion')
    }
    if (usuario.password !== password) {
        throw new Error('error en la autenticacion')
    }
}

export function requiereAutenticacion(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        res.status(401).json({ msg: 'este recurso requiere autenticacion' })
    }
}