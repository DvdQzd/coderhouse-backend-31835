import axios from 'axios'

const newAlumno = {
  dni: 123,
  nombre: 'marian',
  materia: 'tp2',
  nota: 10,
}

export default async function runApiRestTests(baseURL) {
  axios.defaults.baseURL = baseURL

  let apiRestTests = 0

  let { data: res1 } = await axios.get('/ruta-no-existente')

  if (res1?.msg !== 'ruta no encontrada') {
    throw new Error('no registra rutas no existentes correctamente')
  } else {
    apiRestTests++
  }

  let { data: res2 } = await axios.get('/api/alumnos')

  if (res2?.length !== 4) {
    throw new Error('/api/alumnos no tiene longitud 4 ')
  } else {
    apiRestTests++
  }

  let { data: res3 } = await axios.get('/api/alumnos/33456789')

  if (res3?.dni !== 33456789) {
    throw new Error('GET /api/alumnos/:dni no devolvió lo esperado')
  } else {
    apiRestTests++
  }

  let { data: res4 } = await axios.post('/api/alumnos', newAlumno)

  if (res4?.dni !== 123) {
    throw new Error('POST /api/alumnos no devolvió lo esperado')
  } else {
    apiRestTests++
  }

  let { data: res5 } = await axios.get('/api/alumnos/123')

  if (res5?.dni !== 123) {
    throw new Error('GET /api/alumnos/:id no devolvió lo esperado')
  } else {
    apiRestTests++
  }

  let { data: res6 } = await axios.get('/api/alumnos/promedio?materia=tp2')

  if (res6?.promedio !== 10) {
    throw new Error('GET /api/alumnos/promedio no devolvió lo esperado')
  } else {
    apiRestTests++
  }

  let { data: res7 } = await axios.put('/api/alumnos/123', {
    ...newAlumno,
    materia: 'tp3',
  })

  if (res7?.materia !== 'tp3') {
    throw new Error('PUT /api/alumnos/:id no devolvió lo esperado')
  } else {
    apiRestTests++
  }

  let { data: res8 } = await axios.delete('/api/alumnos/123')

  if (res8?.dni !== 123) {
    throw new Error('DELETE /api/alumnos/:id no devolvió lo esperado')
  } else {
    apiRestTests++
  }

  console.log(`${apiRestTests} API REST tests ok`)
}
