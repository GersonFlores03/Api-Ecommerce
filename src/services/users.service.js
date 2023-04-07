const { text } = require("express")
const Products = require("../models/products.models")
const Users = require("../models/user.models")
const transmport = require("../utils/mailer")


class UserService {
   
    static async obtainUser(){
        try {
            const newUsers = await Users.findAll()
            return(newUsers)
        } catch (error) {
            throw(error)
        }
    }



    static async getUser(email){
        try {
              transmport.sendMail({
                from: "xdhaber12@gmail.com",
                to: "xdhaber13@gmail.com", 
                subject: "Bienvenido al Ecommerce",
                html: "<h4> Encuentra los mejores producto a los mejores precios </h4>",
                text: "Encontraras los mejores productos en un a buena calidad"
                
            })
            const newUser = await Users.findOne({
                where: {email}
                
            })
            return(newUser)
        } catch (error) {
            throw(error) 
        }
    }



    static async create(data){
        try {
            const newUser = await Users.create(data)
            return(newUser)
        } catch (error) {
            throw(error)
        }
    }

    static async avatarUpdate(avatar , id){
        try {
            const UpdateUser = await Users.update(avatar , {
                where: {id}
            })
            return(UpdateUser)
        } catch (error) {
            throw(error)
        }
    }

    static async productsObtain(id){
        try {
           const newsProducts = await Users.findByPk(id,{
                  include: [
                      {
                          model: Products
                      }
                  ]
           })
           return(newsProducts)
        } catch (error) {
          throw(error)
        }
  }
}


module.exports = UserService;