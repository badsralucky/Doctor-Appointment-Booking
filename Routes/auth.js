import express from "express"
import { SignUp ,login } from "../Controllers/authController.js"

const router = express.Router()

router.post('/SignUp' , SignUp)
router.post('/login' , login)

export default router
