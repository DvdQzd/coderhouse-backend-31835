import usuariosDao from '../daos/usuariosDao.js'

const usuariosApi = {
  getByUsername: username => {
    const buscado = usuariosDao.getUsuarioByUsername(username)
    if (!buscado) {
      throw new Error('NOT FOUND')
    }
    return buscado
  },

  register: datos => {
    if (!datos.username || !datos.password) {
      throw new Error('MISSING ARGS')
    }
    const buscado = usuariosDao.getUsuarioByUsername(datos.username)
    if (buscado) {
      throw new Error('NOT UNIQUE')
    }
    const newUsuario = {
      username: datos.username,
      password: datos.password,
    }
    usuariosDao.addUsuario(newUsuario)
    return newUsuario
  },
}

export default usuariosApi
