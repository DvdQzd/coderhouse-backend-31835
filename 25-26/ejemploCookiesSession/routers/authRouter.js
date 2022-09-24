import { Router } from 'express'
import authController from '../controllers/authenticationController.js'

const authRouter = new Router()

authRouter.post('/login', authController.login)
authRouter.get('/logout', authController.logout)

export default authRouter