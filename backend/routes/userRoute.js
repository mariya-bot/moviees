import express from "express"
// userRoute.js
import { loginUser, registerUser } from "../controllers/userController.js";
// import { loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;

