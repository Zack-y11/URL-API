import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import urlRoutes from './routes/url.routes.js'
dotenv.config()


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res)=>{
    res.send('API IS AVAILABLE')
})

//declaramos la ruta de la api
app.use('/api',urlRoutes)

//declaramos la varible de env de mongoDB
const uri = process.env.MONGO_URI
//revisamos que exista la variable de entorno
//si no existe, mostramos un error en consola
if(!uri){
    console.error("MONGO URI is not defined")
}
//nos conectamos a nuestra base de datos 
mongoose.connect(uri)
//si la conexion es exitosa, mostramos un mensaje en consola
.then(()=>{
    console.log("mongoDB connected")
})
//si hay un error lo pasamos en consola
.catch((err)=>{
    console.error("Failed to connect to mongoDB", err)
})

app.listen(port, ()=>{
    console.log("server started on port " + port )
})