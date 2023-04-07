const {Router} = require("express");
const { CreateOrden } = require("../controllers/productOrder.controllers");

const ProductOrder = Router();

ProductOrder.post("/api/v1/productorder" , CreateOrden)

module.exports = ProductOrder;

