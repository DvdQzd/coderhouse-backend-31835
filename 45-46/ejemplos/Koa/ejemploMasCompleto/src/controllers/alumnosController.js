import alumnosApi from '../apis/alumnosApi.js'

const alumnosController = {
  getAllController: ctx => {
    ctx.body = alumnosApi.getAll()
  },
  getPromedioController: ctx => {
    const materia = ctx.request.query.materia
    ctx.body = {
      promedio: alumnosApi.getPromedioByMateria(materia),
    }
  },

  getByDniController: ctx => {
    const buscado = alumnosApi.getByDni(ctx.params.dni)
    if (buscado) {
      ctx.body = buscado
    } else {
      ctx.response.status = 404
      ctx.body = {
        status: 'NOT FOUND',
        message: 'alumno not Found with that dni',
      }
    }
  },
  postController: ctx => {
    const agregado = alumnosApi.add(ctx.request.body)
    if (agregado) {
      ctx.response.status = 201
      ctx.body = agregado
    } else {
      ctx.response.status = 400
      ctx.body = {
        status: 'BAD REQUEST',
        message: 'invalid data',
      }
    }
  },
  putController: ctx => {
    const actualizado = alumnosApi.updateByDni(ctx.params.dni, ctx.request.body)
    if (actualizado) {
      ctx.response.status = 200
      ctx.body = actualizado
    } else {
      ctx.response.status = 400
      ctx.body = {
        status: 'error',
        message: 'Please enter the data',
      }
    }
  },
  deleteController: ctx => {
    const dni = ctx.params.dni
    const deleted = alumnosApi.deleteByDni(dni)
    ctx.response.status = 200
    ctx.body = deleted
  },
}

export default alumnosController
