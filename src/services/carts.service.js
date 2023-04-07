const Carts = require("../models/carts.models")
//const ProductsCart = require("../models/productCart.models")
//const Products = require("../models/products.models")


class CartService {
    static async createCart(dataCart){
        try {
            const newCart = await Carts.create(dataCart)
            return(newCart)
        } catch (error) {
            throw(error)
        }
    }

    static async create(){
        try {
            const result = await Carts.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

}


module.exports = CartService