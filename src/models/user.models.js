const {DataTypes} = require("sequelize")
const bcrypt = require("bcrypt")
const db = require("../utils/database")

const Users = db.define("users" , {
     id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      } , 

    username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
        
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
        
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    avatar: {
        type: DataTypes.STRING
        
    },

    emailVerify: {
       type: DataTypes.BOOLEAN,
       defaultValue: false

    }

} ,{
    timestamps: true,
    updatedAt: false,
    hooks:{
        beforeCreate: async (user) => {
             try {
                const salt = await bcrypt.genSalt(10)
                const password = await bcrypt.hash(user.password , salt)
                user.password = password
             } catch (error) {
                 throw(error)
             }
      }
    
  } 
}

);

module.exports = Users;