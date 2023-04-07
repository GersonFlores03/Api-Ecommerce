const productService = require("../services/products.service")



const createProducts = async (req , res , next) => {
     try {
        const body = req.body;
        const newProduct = await productService.createProducts(body)
        res.status(201).json(newProduct)
     } catch (error) {
        next(error)
     }
}

const UpdateProduct = async (req , res ,next) => {
   try {
      const data = req.body
      console.log(data)
      const {id} = req.params
      const productsUpdate = await productService.update(data , id)
     
      res.status(204).send()
      
   } catch (error) {
      next(error)
   }
}







module.exports = {
    createProducts,
    UpdateProduct,
 
   
}