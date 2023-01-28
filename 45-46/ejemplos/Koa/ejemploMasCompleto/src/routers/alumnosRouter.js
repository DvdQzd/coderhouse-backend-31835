import Router from 'koa-router'
import alumnosController from '../controllers/alumnosController.js'

// Prefix all routes with /alumnos
const router = new Router({
  prefix: '/api/alumnos',
})

router.get('/', alumnosController.getAllController)
router.get('/promedio', alumnosController.getPromedioController)
router.get('/:dni', alumnosController.getByDniController)
router.post('/', alumnosController.postController)
router.put('/:dni', alumnosController.putController)
router.delete('/:dni', alumnosController.deleteController)

const routes = router.routes()

export default routes
