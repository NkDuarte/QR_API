/*************************/
//! Importaciones
import admin, { storage } from 'firebase-admin'
import path, { resolve } from 'path'
import { _name_file_fire_conf_, _f_bucket_storage_, _f_real_database_ } from '../environments/environments'
//* |-> Ruta de archivo credencial
const account_fire = resolve(path.join(__dirname, `../config/${_name_file_fire_conf_}`))
/*************************/
//* |-> Inicializar Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(account_fire),
    storageBucket: _f_bucket_storage_,
    databaseURL: _f_real_database_
})
/*************************/
export const db = admin.database()
export const storage_f = admin.storage()