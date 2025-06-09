import express from "express"
import { connectDB } from "./config/mongo"
import { BooksRoutes } from "./routes/routes"

process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()
// funcion para configurar las peticiones post
// permite capturar el json enviado en req.body
app.use(express.json())
//aca iba cors supestamente

// quiero borrar un libro
app.use("/api/books", BooksRoutes)

app.use("",(req, res) => {
    res.status(404).json({ sucess: false, message: "not found resource"})

})

app.listen(PORT, () =>{ 
    console.log("Servidor en escucha en el puerto http://localhost:${PORT}")
    connectDB()
})