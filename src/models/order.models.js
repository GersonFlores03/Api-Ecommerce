const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Orders = db.define("order" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    totalprice: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },

    userOder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_order"
    
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }


})

module.exports = Orders;