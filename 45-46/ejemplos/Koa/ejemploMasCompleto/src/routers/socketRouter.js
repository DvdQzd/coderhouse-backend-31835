import socketController from '../controllers/socketController.js'

async function adminsOnly(fn, socket, ...args) {
  if (socket.handshake.auth.token === 'secreto') {
    return await fn(socket, ...args)
  } else {
    return socket.emit({ error: 'accion no autorizada' })
  }
}

export default function socketHandler(socket) {
  socket.on(
    'nuevoAlumno',
    async data => await adminsOnly(socketController.nuevoAlumno, socket, data)
  )
  socket.on('alumnos', async data => await socketController.alumnos(socket))
  socket.on(
    'borrarAlumno',
    async data => await socketController.borrarAlumno(socket, data)
  )
}
