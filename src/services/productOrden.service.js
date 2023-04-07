const ProductOrder = require("../models/productOrder.models");


class OrdenService {
    static async create(data){
        try {
            const result = await ProductOrder.create(data)
            return(result)
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = OrdenService