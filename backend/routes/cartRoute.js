import express from "express";
import authMiddleWare from "../middleware/auth.js";
// import cartController from "../controllers/cartController.js"
// import cartController from '../controllers/cartController.js';


import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleWare,addToCart)
cartRouter.post("/remove",authMiddleWare,removeFromCart);
cartRouter.post("/get",authMiddleWare,getCart)

export default cartRouter;