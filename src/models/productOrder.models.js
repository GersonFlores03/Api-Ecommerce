const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const ProductOrder = db.define("productorder" , {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      orderId:{
         type: DataTypes.INTEGER,
         allowNull: false,
         field: "order_id"
     },

     productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "products_id"
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})


module.exports = ProductOrder;