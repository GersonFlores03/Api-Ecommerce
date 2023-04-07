const ProductsCart = require("../models/productCart.models")

class CartProductService{
    static async create(data){
       try {
        const result = await ProductsCart.create(data)
        return result
       } catch (error) {
        throw(error)
       }
    }
}

module.exports = CartProductService