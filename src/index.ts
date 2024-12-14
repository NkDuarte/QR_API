/*************************/
//! Importaciones
import express, { Application } from 'express'
import cors from 'cors'
import { _port_, _url_static_ } from './environments/environments'
import router_files from './routes/files.routes'
import router_data from './routes/data.routes'
/*************************/
//? |-> Instancia inicial de la API
const app: Application = express()
/*************************/
//? |-> Configuracion del ambiente
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
/*************************/
//? |-> Rutas
// TODO -> Files
app.use(`${_url_static_}/storage`, router_files)
app.use(`${_url_static_}/store`, router_data)
/*************************/
//? |-> Inicializacion de la API
app.listen(_port_, () => console.log(`API Listening in port: ${_port_}`))
/*************************/