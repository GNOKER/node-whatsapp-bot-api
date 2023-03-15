import {Router} from 'express'
import { authController } from './auth.module.js'

const authRouter = Router()
authRouter.post('/signup', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const [data,error] =  await authController.signup({username, password})
   
  if(error){
    console.error(error)
    res.status(422).send({erorr: error.message, status: 422})
    return
  }

  res.status(201).send()
})

export { authRouter }

