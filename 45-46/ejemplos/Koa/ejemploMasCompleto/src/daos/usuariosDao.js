const usuarios = []

const usuariosDao = {
  getUsuarioByUsername: username => {
    return usuarios.find(usu => usu.username === username)
  },
  addUsuario: usuario => {
    usuarios.push(usuario)
  },
}

export default usuariosDao
