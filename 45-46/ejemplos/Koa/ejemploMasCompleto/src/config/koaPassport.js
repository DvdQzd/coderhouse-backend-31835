import koaPassport from 'koa-passport'
import { Strategy as LocalStrategy } from 'passport-local'
import usuariosApi from '../apis/usuariosApi.js'

export default function configKoaPassport() {
  koaPassport.serializeUser((user, done) => {
    done(null, user.username)
  })

  koaPassport.deserializeUser((username, done) => {
    const user = usuariosApi.getByUsername(username)
    done(null, user)
  })

  koaPassport.use(
    new LocalStrategy((username, password, done) => {
      try {
        const user = usuariosApi.getByUsername(username)
        if (password === user.password) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      } catch (error) {
        return done(null, false)
      }
    })
  )
}
