import Koa from 'koa'
import koaBody from 'koa-body'
import koaSession from 'koa-session'
import koaPassport from 'koa-passport'
import serve from 'koa-static'
import cors from '@koa/cors'
import configKoaPassport from './config/koaPassport.js'

import alumnosRouter from './routers/alumnosRouter.js'
import authRouter from './routers/authRouter.js'
import allOthersRouter from './routers/allOthersRouter.js'

import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'
import socketRouter from './routers/socketRouter.js'

const app = new Koa()

app.use(cors())
app.use(koaBody())
app.use(serve('public'))

// app.callback() devuelve una funcion compatible con http.createServer()
const server = new HttpServer(app.callback())
const io = new IOServer(server)

// Sessions
app.keys = ['secret']
app.use(koaSession({}, app))

app.use(koaPassport.initialize())
app.use(koaPassport.session())

configKoaPassport()

// app.use(async (ctx, next) => {
//   await next()
//   if (ctx.isAuthenticated()) {
//     console.log('estoy logueado!')
//   } else {
//     console.log('aun no estoy logueado...')
//   }
// })

app.use(authRouter)
app.use(alumnosRouter)
app.use(allOthersRouter)

io.on('connection', socketRouter)

export default server
