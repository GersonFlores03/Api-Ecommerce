const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const ProductsCart = db.define("productcart" , {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
 
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "cart_id"
        },

        productId:{
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "product_id"
        },

        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0.0,
        },

        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }




})

module.exports = ProductsCart;