import {connect}from "mongoose"

process.loadEnvFile()


const URI_DB= process.env .URI_DB || "mongodb://localhost:27017/coleccion"

const connectDB = async ()=>{
    try{
        await connect(URI_DB)
        console.log("Servidor Mongo DB conectado")
        } catch (error){
            console.log("Error al conectarse al servidor Mongo DB" )
        }
}
export {connectDB}