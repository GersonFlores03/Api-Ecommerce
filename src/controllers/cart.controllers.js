const Carts = require("../models/carts.models");
const ProductsCart = require("../models/productCart.models");
const CartService = require("../services/carts.service")


const CreateCarts = async (req , res , next) => {
    try {
        const dataCart = req.body;
        const newCart = await CartService.createCart(dataCart)
        res.status(201).json(newCart)
    } catch (error) {
        next(error)
    }
}

const ObtainCarts = async (req , res , next) => {
    try {
        const result = await CartService.create()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const addProductCart = async (req , res , next) => {
    try {
        const {cartId , productId , quantity , price , status} = req.body;
        await ProductsCart.create({cartId , productId , quantity , price , status});
        const totalprice = price * quantity;
        await Carts.increment({totalprice} ,{where: {id: cartId} });
        res.json({
            message: "Producto agregado exitosamente"
        })
    } catch (error) {
        next(error)
    }
} 




module.exports = {
     CreateCarts,
     addProductCart,
     ObtainCarts
     
}