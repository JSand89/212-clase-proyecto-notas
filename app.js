const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const estudiantesRoutes = require("./routes/estudiantes")

const app = express()

//middleware


//Conexion bd

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("base de datos conectada"))
    .catch(err => console.error(`No se pudo conectar a MongoDB`,err))

//rutas
app.use("/api/estudiantes",estudiantesRoutes)

const PORT = process.env.PORT ||3000  

app.listen(PORT,()=> console.log(`servidor escuchando el puerto ${PORT}`))


