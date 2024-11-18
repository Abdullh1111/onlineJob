import { Router } from "express";
import userController from "./user.controller";
import userExists, { loginUserExists } from "../../middleware/user/register";
import authUser from "../../middleware/authentiication";
import adminAuth from "../../middleware/adminAuth";

const userRouter = Router()

userRouter.post('/login',loginUserExists,userController.login)
userRouter.post('/signup',userExists,userController.createUser)
userRouter.get('/userdata',authUser,userController.getUserData)
userRouter.get('/logout',userController.logout)
userRouter.get('/alluser',adminAuth,userController.allUser)
export default userRouter