const alumnos = [
  { dni: 33456789, nombre: 'Juan Perez', materia: 'Física', nota: 6 },
  { dni: 35457683, nombre: 'Celia Gómez', materia: 'Matemáticas', nota: 7 },
  { dni: 38683112, nombre: 'Cintia Fernández', materia: 'Física', nota: 4 },
  { dni: 34567209, nombre: 'Diego Mei', materia: 'Matemáticas', nota: 8 },
]

const alumnosDao = {
  getAlumnos: () => {
    return alumnos
  },
  getAlumnoByDni: dni => {
    return alumnos.find(alu => alu.dni == dni)
  },
  addAlumno: alumno => {
    alumnos.push(alumno)
  },
  updateAlumno: (dni, alumnoActualizado) => {
    const index = alumnos.findIndex(alu => alu.dni == dni)
    alumnos[index] = alumnoActualizado
  },
  deleteAlumno: dni => {
    const deleted = []
    let index = alumnos.findIndex(alumno => alumno.dni == dni)
    while (index !== -1) {
      const [found] = alumnos.splice(index, 1)
      deleted.push(found)
      index = alumnos.findIndex(alumno => alumno.dni == dni)
    }
    return deleted[0]
  },
}

export default alumnosDao
