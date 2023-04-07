const {Router} = require("express");
const { CreateOrders, addCheckout, obtainOrder } = require("../controllers/order.controllers");

const OrderRouter = Router();

OrderRouter.post("/api/v1/order" , CreateOrders)
OrderRouter.get("/api/v1/order", obtainOrder)
OrderRouter.post("/api/v1/order/productorder" , addCheckout)

module.exports = OrderRouter;