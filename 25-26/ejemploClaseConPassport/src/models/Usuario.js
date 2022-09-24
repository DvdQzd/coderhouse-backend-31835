import { crearId } from './Ids.js'

export function crearUsuario(datos) {
    if (!datos.username) throw new Error(`el campo 'username' es obligatorio`)
    if (!datos.password) throw new Error(`el campo 'password' es obligatorio`)
    if (!datos.direccion) throw new Error(`el campo 'direccion' es obligatorio`)

    return {
        id: crearId(),
        username: datos.username,
        password: datos.password,
        direccion: datos.direccion,
    }
}
