import alumnosDao from '../daos/alumnosDao.js'

const alumnosHelper = {
  calcularPromedio: alumnos => {
    const cant = alumnos.length
    if (cant === 0) {
      return 0
    }
    const notas = alumnos.map(alumno => alumno.nota)
    const sumaNotas = notas.reduce((a, b) => a + b, 0)
    return sumaNotas / cant
  },
}

const alumnosApi = {
  getAll: () => {
    return alumnosDao.getAlumnos()
  },

  getPromedioByMateria: materia => {
    const alumnos = alumnosDao.getAlumnos()
    const alusEnMateria = alumnos.filter(alumno => alumno.materia == materia)
    const promedio = alumnosHelper.calcularPromedio(alusEnMateria)
    return promedio
  },

  getByDni: dni => {
    const buscado = alumnosDao.getAlumnoByDni(dni)
    if (!buscado) {
      throw new Error('NOT FOUND')
    }
    return buscado
  },

  add: datos => {
    if (!datos.dni || !datos.nombre || !datos.materia || !datos.nota) {
      throw new Error('MISSING ARGS')
    }
    const newAlumno = {
      dni: datos.dni,
      nombre: datos.nombre,
      materia: datos.materia,
      nota: datos.nota,
    }
    alumnosDao.addAlumno(newAlumno)
    return newAlumno
  },

  updateByDni: (dni, datos) => {
    if (!datos.dni || !datos.nombre || !datos.materia || !datos.nota) {
      throw new Error('MISSING ARGS')
    }
    alumnosDao.updateAlumno(dni, datos)
    return datos
  },

  deleteByDni: dni => {
    return alumnosDao.deleteAlumno(dni)
  },
}

export default alumnosApi
