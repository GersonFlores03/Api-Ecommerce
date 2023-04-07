const {DataTypes} = require("sequelize")
const db = require("../utils/database")

const Carts = db.define("carts" , {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      usersId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         field: "users_id"
      },

      totalprice: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      }
})

module.exports= Carts;