const usuarios = []

export function guardarUsuario(usuario) {
    usuarios.push(usuario)
}

export function obtenerUsuarios() {
    return usuarios
}

export function obtenerUsuarioPorNombre(nombre) {
    const usuario = usuarios.find(u => u.nombre === nombre)
    if (!usuario) throw new Error('no existe un usuario con ese nombre')
    return usuario
}