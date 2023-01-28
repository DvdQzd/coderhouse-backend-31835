import passport from 'koa-passport'
import usuariosApi from '../apis/usuariosApi.js'

export const registerController = async ctx => {
  const nuevoUsuario = ctx.request.body
  usuariosApi.register(nuevoUsuario)
  ctx.body = nuevoUsuario
  ctx.status = 201
}

export const loginController = async ctx => {
  return passport.authenticate('local', (err, user, info, status) => {
    if (user) {
      ctx.login(user)
      ctx.body = { status: 'logged in' }
    } else {
      ctx.status = 401
      ctx.body = { status: 'error' }
    }
  })(ctx)
}

export const logoutController = async ctx => {
  if (ctx.isAuthenticated()) {
    ctx.logout()
    ctx.body = { status: 'logged out' }
  } else {
    ctx.status = 401
    ctx.body = { status: 'error' }
  }
}
