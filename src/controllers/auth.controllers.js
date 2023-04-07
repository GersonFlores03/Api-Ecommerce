const jwt = require("jsonwebtoken")
const UserService = require("../services/users.service")
const bcrypt = require("bcrypt")
const validateService = require("../services/auth.service")

const userLogin = async (req , res , next) => {
    try {
        const {email , password} = req.body
        const user = await UserService.getUser(email)

        if(!user){
         return next({
              status: 400,
              message: "Invalid email",
              errorName: "User not found"
            });
        };
      
       const isValid = await bcrypt.compare(password , user.password)

       if(!isValid){
         return next({
            status: 400,
            message: "The password invalid",
            errorName: "invalid password"
         });
       };

       /*if(!user.emailVerify){
         return next({
           status: 400,
           message: "Email is not verified",
           errorName: "Email verification"
         })
       }*/
      const {id , username , avatar} = user

      const token = validateService.genToken({id , username , avatar})
      res.json({
        id,
        username,
        email,
        avatar,
        token
      })
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
  userLogin
  //veryEmail
}