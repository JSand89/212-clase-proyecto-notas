const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const estudiantesRoutes = require("./routes/estudiantes")
const materiaRoutes = require("./routes/materia")
const authRoutes = require("./routes/auth")

const authMiddleware = require("./middlewares/authMiddleware")

const app = express()

//middleware

app.use(express.json())
//Conexion bd

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("base de datos conectada"))
    .catch(err => console.error(`No se pudo conectar a MongoDB`,err))

//rutas
app.use("/api/estudiantes", authMiddleware,estudiantesRoutes)
app.use("/api/materia",authMiddleware, materiaRoutes)
app.use("/api", authRoutes)

const PORT = process.env.PORT ||3000  

module.exports = app

//app.listen(PORT,()=> console.log(`servidor escuchando el puerto ${PORT}`))


