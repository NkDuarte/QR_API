/*************************/
//! Importaciones
import dotenv from 'dotenv'
/*************************/
//? -> Configuracion del entorno
dotenv.config()
/*************************/
//* |-> Variables No exportables
import fs from 'fs'
import path from 'path';
/*************************/
fs.mkdirSync(path.join(__dirname, '../config'), { recursive: true })
/*************************/
//* |-> Variables Exportables
const _port_: number = Number(process.env.PORT)
const _url_static_: string = String(process.env.URL_STATIC)
/*************************/
const _name_file_fire_conf_: string = String(process.env.NAME_FILE_CONFIG_FIRE)
const _f_bucket_storage_: string = String(process.env.FIREBASE_BUCKET_STORAGE)
const _f_real_database_: string = String(process.env.FIREBASE_REAL_DATABASE)
/*************************/
if (fs.existsSync(path.join(__dirname, '../config'))) {
    if (!fs.existsSync(path.join(__dirname, `../config/${_name_file_fire_conf_}`))) {
        const firebaseConfig = {
            type: String(process.env.FIREBASE_TYPE),
            project_id: String(process.env.FIREBASE_PROJECT_ID),
            private_key_id: String(process.env.FIREBASE_PRIVATE_KEY_ID),
            private_key: String(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, '\n'),
            client_email: String(process.env.FIREBASE_CLIENT_EMAIL),
            client_id: String(process.env.FIREBASE_CLIENT_ID),
            auth_uri: 'https://accounts.google.com/o/oauth2/auth',
            token_uri: 'https://oauth2.googleapis.com/token',
            auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
            client_x509_cert_url: String(process.env.FIREBASE_CLIENT_X509_CERT_URL),
        };
        fs.writeFileSync(path.join(__dirname, `../config/${_name_file_fire_conf_}`), JSON.stringify(firebaseConfig));
    }
}
// TODO -> Exportacion del modulo
export {
    _port_,
    _name_file_fire_conf_,
    _f_bucket_storage_,
    _url_static_,
    _f_real_database_
}