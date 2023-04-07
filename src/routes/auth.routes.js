const {Router} = require("express");
const {userLogin} = require("../controllers/auth.controllers");
//const autheticate = require("../midellwares/auth.middelware");


const authRouter = Router();

authRouter.post("/api/v1/login" , userLogin )
//authRouter.post("/api/v1/verify" , veryEmail )

module.exports = authRouter;