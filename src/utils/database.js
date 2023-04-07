const {Sequelize} = require("sequelize")

const db = new Sequelize({
    database: "ecommerce_api",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "gerflores",
    dialect: "postgres",
    logging: false
})


module.exports = db;

