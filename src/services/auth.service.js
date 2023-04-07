const jwt = require("jsonwebtoken")


class validateService {
    static genToken(payload){
        try {
            const token = jwt.sign(payload , "gersonflores" ,{
                algorithm: "HS512",
                expiresIn: "1d",
            })

            return(token)
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = validateService;