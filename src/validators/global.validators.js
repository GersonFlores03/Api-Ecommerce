const { check } = require("express-validator")
const validateResult = require("../utils/validate")





const createUserValidator = [ 
   check("username" , "Error en el campo de username")
    .exists()
    .withMessage("El username debe existir")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser string")
    .isLength({min: 6 , max: 30})
    .withMessage("El username debe tener un longitud de 6 y 30 caracteres"),
check("email" , "Error en el correo electronico")
    .exists()
    .withMessage("El correo electronico debe existir")
    .notEmpty()
    .withMessage("El correo electronico no debe estar vacio")
    .isString()
    .withMessage("El correo electronico debe ser un string")
    .isLength({min: 7 , max:50})
    .withMessage("El correo electronico debe tener un longitud de 7 y 50 caracteres")
    .isEmail()
   .withMessage("El correo debe tener formato de correo electronico"),
check("password" , "Error en el la contraseña ")
    .exists()
    .withMessage("La contraseña debe existir")
    .notEmpty()
    .withMessage("La contraseña no debe ser nulo")
    .isString()
    .withMessage("La contraseña debe ser string")
    .isLength({min: 8})
    .withMessage("La contraseña debe tener un longitud de 8 caracteres"),
    (req , res , next) => {
        validateResult(req , res ,next)
    }
     
];


const createProductsValidator = [
    check("name" , "Error en el campo de name del producto")
    .exists()
    .withMessage("El producto debe existir")
    .notEmpty()
    .withMessage("El producto no debe estar vacio")
    .isString()
    .withMessage("El producto debe ser un string"),
    check("description" , "Error en la descripcion del producto")
    .exists()
    .withMessage("La descripcion debe existir")
    .notEmpty()
    .withMessage("La descripcion no debe estar vacia")
    .isString()
    .withMessage("La descripcion debe ser string"),
    (req, res , next) => {
        validateResult(req, res ,next)
    }
]


const createCartValidator = [
    check("usersId" , "Error con el usuario")
    .exists()
    .withMessage("El usuario debe existir")
    .notEmpty()
    .withMessage("El usuario no debe estar vacio")
    .isIn()
    .withMessage("El username debe ser un numero"),
    (req , res , next) => {
        validateResult(req , res ,next)
    }
]




module.exports = {
    createUserValidator,
    createProductsValidator,
    createCartValidator
}