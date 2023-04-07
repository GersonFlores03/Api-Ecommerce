const {Router} = require("express");
const { createProducts, UpdateProduct} = require("../controllers/product.controller");
const { createProductsValidator } = require("../validators/global.validators");

const productsRoute = Router();

productsRoute.post("/api/v1/products" , createProductsValidator , createProducts)
productsRoute.put("/api/v1/products/:id" , UpdateProduct )

//productsRoute.get("/api/v1/products/:id/users" , obtainProducts)

module.exports = productsRoute;