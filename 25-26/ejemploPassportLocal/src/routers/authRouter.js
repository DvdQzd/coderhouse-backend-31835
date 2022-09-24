import { Router } from 'express'

import {
    failLoginController, successLoginController,
    failRegisterController, successRegisterController,
    registroController, loginController, logoutController
} from '../controllers/authController.js'

export const authRouter = new Router()

// registro
authRouter.post('/register', registroController)
authRouter.post('/successRegister', successRegisterController)
authRouter.post('/failRegister', failRegisterController)

// login
authRouter.post('/login', loginController)
authRouter.post('/successLogin', successLoginController)
authRouter.post('/failLogin', failLoginController)

// logout
authRouter.get('/logout', logoutController)
