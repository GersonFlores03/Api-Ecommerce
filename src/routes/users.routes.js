const {Router} = require("express");
const { createUser , findUsers, updateUser, obtainProducts } = require("../controllers/users.controller");
const {createUserValidator}    = require("../validators/global.validators");

const userRouter = Router();

userRouter.post("/api/v1/users" , createUserValidator , createUser)
userRouter.get("/api/v1/users" , findUsers)
userRouter.get("/api/v1/users/:id/products" , obtainProducts)
userRouter.put("/api/v1/users/:id" , updateUser )


module.exports = userRouter;