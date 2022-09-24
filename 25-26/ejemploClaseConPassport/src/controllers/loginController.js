import { autenticar } from '../auth/auth.js'

export function loginController(req, res) {
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
}
