import { crearId } from './Ids.js'

export function crearUsuario(datos) {
    if (!datos.nombre) throw new Error(`el campo 'nombre' es obligatorio`)
    if (!datos.password) throw new Error(`el campo 'password' es obligatorio`)
    if (!datos.direccion) throw new Error(`el campo 'direccion' es obligatorio`)

    return {
        id: crearId(),
        nombre: datos.nombre,
        password: datos.password,
        direccion: datos.direccion,
    }
}
