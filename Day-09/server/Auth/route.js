import express from "express"
import { registerUser , authUser , getUserProfile } from "../controller/authController"
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()

router.get("/" , (req ,res) => {
    res.send("success")
})

router.post('/login' , authUser)
router.post('register' , registerUser)
router.get('profile' , protect , getUserProfile)


export default router