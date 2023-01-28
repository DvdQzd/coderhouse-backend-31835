import Router from 'koa-router'
import {
  loginController,
  logoutController,
  registerController,
} from '../controllers/authController.js'

// Prefix all routes with /auth
const router = new Router({
  prefix: '/auth',
})

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/logout', logoutController)

const routes = router.routes()

export default routes
