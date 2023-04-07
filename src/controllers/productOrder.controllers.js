
const OrdenService = require("../services/productOrden.service")



const CreateOrden = async (req , res , next) =>{
    try {
        const data = req.body
        const result = await OrdenService.create(data);
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    CreateOrden
}