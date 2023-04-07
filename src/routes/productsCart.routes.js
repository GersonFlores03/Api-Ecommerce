const {Router} = require("express");
const { CreateProductCart } = require("../controllers/productsCart.controllers");

const routerCart = Router();

routerCart.post("/api/v1/productcart" , CreateProductCart)


module.exports = routerCart;