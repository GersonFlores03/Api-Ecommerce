const Users = require("../models/user.models")
const Products = require ("../models/products.models")
const ProductOrder = require("../models/productOrder.models")
const ProductsCart = require("../models/productCart.models")
const Orders = require("../models/order.models")
const Carts = require("../models/carts.models")



const initModels = () => {
    Users.hasMany(Products , {foreignKey: "user_id"})
    Products.belongsTo(Users , {foreignKey: "user_id"})

    Users.hasMany(Carts , {foreignKey: "users_id"})
    Carts.belongsTo(Users , {foreignKey: "users_id"})

    Users.hasMany(Orders , {foreignKey: "user_order"})
    Orders.belongsTo(Users , {foreignKey: "user_order"})

    Products.hasMany(ProductsCart , {foreignKey: "product_id"})
    ProductsCart.belongsTo(Products , {foreignKey: "product_id"})

    Products.hasMany(ProductOrder , {foreignKey: "products_id"})
    ProductOrder.belongsTo(Products , {foreignKey: "products_id"})

    Carts.hasMany(ProductsCart , {foreignKey: "cart_id"})
    ProductsCart.belongsTo(Carts , {foreignKey: "cart_id"})

    Orders.hasMany(ProductOrder ,{foreignKey: "order_id"})
    ProductOrder.belongsTo(Orders , {foreignKey: "order_id"})

}


module.exports = initModels;