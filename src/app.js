const express = require("express")
const morgan = require("morgan")
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
const cors = require("cors")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const userRouter = require("./routes/users.routes")
const productRouter = require("./routes/products.routes")
const cartRouter = require("./routes/cart.routes") 
const productCartRouter = require("./routes/productsCart.routes")
const productOrderRouter = require("./routes/productOrder.routes")
const orderRouter = require("./routes/order.routes")
const authRouter = require("./routes/auth.routes")
const ormHandleRouter = require("./routes/errorHandler.routes")




initModels();

const app = express();
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8000;

db.authenticate()
.then(()=>{
    console.log("Servidor aunteticada")
})
.catch((error)=> {
    console.log(error)
})


db.sync({alter: false})
.then(() =>{
    console.log("Servidor sincronizado")
})
.catch((error)=> {
     console.log(error)
})


app.use("/api/ecommerce/docs" , swaggerUi.serve , swaggerUi.setup(swaggerDoc));

app.use(userRouter)
app.use(productRouter)
app.use(cartRouter)
app.use(orderRouter)
app.use(productCartRouter)
app.use(productOrderRouter)
app.use(authRouter)



app.get("/" , (req, res) => {
    res.send("Mi servidor")
})

ormHandleRouter(app)


app.listen(PORT , () => {
    console.log(`Estas conectados en el servidos ${PORT}`)
})


