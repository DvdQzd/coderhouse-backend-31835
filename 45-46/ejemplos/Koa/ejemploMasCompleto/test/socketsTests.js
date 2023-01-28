import { io } from 'socket.io-client'

const newAlumno = {
  dni: 123,
  nombre: 'marian',
  materia: 'tp2',
  nota: 10,
}

export default async function runSocketTests(baseURL) {
  let socketTests = 0
  let socket

  await new Promise((mainRes, mainRej) => {
    new Promise((resolve, reject) => {
      socket = io(baseURL, {
        auth: {
          token: 'secreto',
        },
      })

      socket.on('connect', () => {
        resolve(socket)
      })

      socket.on('error', mainRej)

      socket.on('alumnoCreado', data => {
        if (data.some(alu => alu.dni === newAlumno.dni)) {
          mainRes(socket)
        } else {
          mainRej('no se agregó el alumno')
        }
      })
    }).then(socket => {
      socket.emit('nuevoAlumno', newAlumno)
    })
  })
    .then(() => {
      socketTests++
    })
    .catch(err => {
      console.log('error en POST a socket', err)
    })
    .finally(() => {
      socket.disconnect()
    })

  await new Promise((mainRes, mainRej) => {
    new Promise((resolve, reject) => {
      socket = io(baseURL)

      socket.on('connect', () => {
        resolve(socket)
      })

      socket.on('error', mainRej)

      socket.on('alumnos', data => {
        if (data.length > 0) {
          mainRes(socket)
        } else {
          mainRej('no recibí alumnos')
        }
      })
    }).then(socket => {
      socket.emit('alumnos')
    })
  })
    .then(() => {
      socketTests++
    })
    .catch(err => {
      console.log('error en GET a socket', err)
    })
    .finally(() => {
      socket.disconnect()
    })

  await new Promise((mainRes, mainRej) => {
    new Promise((resolve, reject) => {
      socket = io(baseURL, {
        auth: {
          token: 'secreto',
        },
      })

      socket.on('connect', () => {
        resolve(socket)
      })

      socket.on('error', mainRej)

      socket.on('alumnos', data => {
        if (data.some(alu => alu.dni === newAlumno.dni)) {
          mainRej('no se borró el alumno')
        } else {
          mainRes(socket)
        }
      })
    }).then(socket => {
      socket.emit('borrarAlumno', newAlumno.dni)
    })
  })
    .then(() => {
      socketTests++
    })
    .catch(err => {
      console.log('error en DELETE a socket', err)
    })
    .finally(() => {
      socket.disconnect()
    })

  console.log(`${socketTests} SOCKET tests ok`)
}
