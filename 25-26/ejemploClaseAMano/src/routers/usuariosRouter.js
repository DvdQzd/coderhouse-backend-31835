import { crearUsuario } from '../models/Usuario.js'
import { Router } from 'express'
import { guardarUsuario, obtenerUsuarios } from '../persistencia/usuarios.js'

export const usuariosRouter = new Router()

usuariosRouter.post('/', (req, res) => {
    let usuario
    try {
        const datosUsuario = req.body
        usuario = crearUsuario(datosUsuario)
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
    try {
        guardarUsuario(usuario)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
    res.status(201).json(usuario)
})

usuariosRouter.get('/', (req, res) => {
    const usuarios = obtenerUsuarios()
    res.json(usuarios)
})