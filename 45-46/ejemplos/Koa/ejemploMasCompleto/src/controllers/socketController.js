import alumnosApi from '../apis/alumnosApi.js'

export default {
  nuevoAlumno: async (socket, data) => {
    await alumnosApi.add(data)
    const alumnos = await alumnosApi.getAll()
    socket.emit('alumnoCreado', alumnos)
  },
  alumnos: async socket => {
    const alumnos = await alumnosApi.getAll()
    socket.emit('alumnos', alumnos)
  },
  borrarAlumno: async (socket, dni) => {
    await alumnosApi.deleteByDni(dni)
    const alumnos = await alumnosApi.getAll()
    socket.emit('alumnos', alumnos)
  },
}
