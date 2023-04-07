const Orders = require("../models/order.models")
const ProductOrder = require("../models/productOrder.models")
const OrderService = require("../services/order.service")
const transmport = require("../utils/mailer")


const CreateOrders = async (req , res , next) => {
    try {
        const data = req.body
        const result = await OrderService.create(data)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

const obtainOrder = async (req , res , next) => {
    try {
       const result = await OrderService.findOrder()
       res.json(result) 
    } catch (error) {
        next(error)
    }
}

const addCheckout = async (req , res , next) => {
    try {

        transmport.sendMail({
            from: "xdhaber12@gmail.com",
            to: "xdhaber13@gmail.com", 
            subject: "Bienvenido al Ecommerce",
            html: "<h4> Encuentra los mejores producto a los mejores precios </h4>",
            text: "Encontraras los mejores productos en un a buena calidad"
            
        })

        
        const { orderId ,  productId ,  quantity , price , status} = req.body
        await ProductOrder.create({orderId ,  productId ,  quantity , price , status})
        const totalprice = price  * quantity
        await Orders.increment({ totalprice} ,
            {
                where: {
                    id: orderId
                }
            }
            )
            res.json({
                status: "Purchased" ,
                message: "Compra realizada con exito !Gracias!"
            })
    } catch (error) {
        next(error)
    }
}


module.exports = {
   CreateOrders,
   addCheckout,
   obtainOrder
}



