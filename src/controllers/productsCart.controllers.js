const CartProductService = require("../services/productCart.service")


const CreateProductCart = async (req , res , next ) => {
    try {
        const data = req.body;
        const newCart = await CartProductService.create(data)
        res.status(201).json(newCart)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    CreateProductCart
}