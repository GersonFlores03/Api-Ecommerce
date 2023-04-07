const Orders = require("../models/order.models");



class OrderService{
    static async create(data){
        try {
            const result = await Orders.create(data)
            return result
        } catch (error) {
            throw error
        }
    }

    static async findOrder(){
        try {
            const result = await Orders.findAll()
            return result
        } catch (error) {
            return error
        }
    }
}




module.exports = OrderService