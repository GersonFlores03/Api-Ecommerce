const jwt = require("jsonwebtoken")

const autheticate = (req , res , next) => {
    const token = req.headers["access-token"]

    if(!token){
        return next({
            status: 400,
            error: "Unauthorized",
            message: "Not token provied"
        });
    };

    try {
        const decod = jwt.verify(token , "gerflores" , {algorithms: "HS512"})
        req.user = decod
        next(error)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = autheticate;