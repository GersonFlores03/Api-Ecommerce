//const Carts = require("../models/carts.models")
const Products = require("../models/products.models")
//const Users = require("../models/user.models")



class productService{
    static async createProducts(body){
         try {
            const newProducts = await Products.create(body)
            return(newProducts)
         } catch (error) {
            throw(error)
         }
    }

   static async update(data , id ){
      try {
         const updateProduct = await Products.update(data , {
             where: {id}
          })
          return(updateProduct)
      } catch (error) {
         throw(error)
      }
   }

   
}


module.exports = productService