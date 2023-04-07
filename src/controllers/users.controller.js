const UserService = require("../services/users.service")







const createUser = async (req , res ,next) => {
    try {
        const data = req.body
        const newUser = await UserService.create(data)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}

const findUsers = async (req , res , next) => {
    try {
     const obtainUser = await UserService.obtainUser()
     res.json(obtainUser)
    } catch (error) {
       next(error)
    }
}

const updateUser = async (req , res , next) => {
    try {
        const {id} = req.params
        const avatar = req.body
        const UserUpdate = await UserService.avatarUpdate(avatar , id)
        res.status(204).json(UserUpdate)
    } catch (error) {
        next(error)
    }
}

const obtainProducts = async (req , res , next) => {
    try {
        const {id} = req.params
        const newProducts = await UserService.productsObtain(id)
        res.json(newProducts)
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createUser,
    findUsers,
    updateUser,
    obtainProducts
}