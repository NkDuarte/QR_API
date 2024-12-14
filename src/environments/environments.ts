/*************************/
//! Importaciones
import dotenv from 'dotenv'
/*************************/
//? -> Configuracion del entorno
dotenv.config()
/*************************/
//* |-> Variables No exportables
/*************************/
//* |-> Variables Exportables
const _port_: number = Number(process.env.PORT)
const _url_static_: string = String(process.env.URL_STATIC)
/*************************/
const _name_file_fire_conf_: string = String(process.env.NAME_FILE_CONFIG_FIRE)
const _f_bucket_storage_: string = String(process.env.FIREBASE_BUCKET_STORAGE)
const _f_real_database_: string = String(process.env.FIREBASE_REAL_DATABASE)
/*************************/
// TODO -> Exportacion del modulo
export {
    _port_,
    _name_file_fire_conf_,
    _f_bucket_storage_,
    _url_static_,
    _f_real_database_
}