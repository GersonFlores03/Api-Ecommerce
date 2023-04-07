const {Router} = require("express");
const { CreateCarts, addProductCart, ObtainCarts } = require("../controllers/cart.controllers");
//const { createCartValidator } = require("../validators/global.validators");


const cartRoute = Router();

cartRoute.post("/api/v1/carts" , CreateCarts)
cartRoute.get("/api/v1/carts" , ObtainCarts)
cartRoute.post("/api/v1/carts/products"  , addProductCart)
//cartRoute.get("/api/v1/carts/:id/productcart" ,ProductCart)


module.exports = cartRoute;