/*************************/
//! Importaciones
import { Request, Response } from "express";
import { storage_f } from '../databases/firebase.databaes'
import {v4} from 'uuid'
/*************************/
//? -> Controlador que mostrara un archivo por la ruta creada
const view_file = async (req: Request, res: Response) => {
    //* |-> Capturamos el nombre del archivo
    const { type_file, name_file }: string | any = req.params
    //* |-> Control de errores tryCatch
    try {
        //* |-> Accedemos al bucket firebase
        const bucket = storage_f.bucket()
        const file = bucket.file(`${type_file}/${name_file}`)
        //* |-> Obtenemos la url de visualizacion
        const url_file_public = await file.getSignedUrl({
            action: 'read',
            expires: '01-01-2025'
        })
        //* |-> Retornamos un mensaje de exito
        return res.status(200).json({
            success: true,
            msg: `Busqueda de archivo exitosa!`,
            data: url_file_public[0]
        })
    } catch (err) {
        //! Imprimimos el error por consola
        console.log(err);
        //! Retornamos un mensaje de error al cliente
        return res.status(500).json({
            success: true,
            msg: 'No es posible continuar con la visualizacion del archivo, ocurrio un problema interno'
        })
    }
}
//? -> Controlador que subira un archivo al STORAGE FIRE
const upload_file = async (req: Request, res: Response) => {
    //* |-> Capturamos el archivo entrante
    const file = req.file
    //* |-> Control de errores tryCatch
    try {
        //* |-> Validamos que el archivo venga en la peticion
        if (!file) {
            //* |-> Si no existe el file retornamos 400
            return res.status(400).json({
                success: false,
                msg: 'No es posible continuar sin un archivo!'
            })
        }
        //* |-> Extraemos el tipo del archivo
        const split_ext: string[] = file.originalname.split('.')
        const type_ext = split_ext[split_ext.length - 1]
        //* |-> Creacion de nuevo nombre de archivo
        const new_name_file: string = `${v4()}.${type_ext}`
        //* |-> Accedemos al bucket de Firebase
        const bucket_f = storage_f.bucket()
        //* |-> Instanciamos el espacio de folder/name en el bucket
        const file_u = bucket_f.file(`${type_ext.toLocaleUpperCase()}/${new_name_file}`)
        //* |-> Stream file data
        const blobStream = file_u.createWriteStream({
            resumable: false,
            contentType: file.mimetype
        })
        //* |-> Cargas
        blobStream.on('finish', () => {
            return res.status(200).json({
                success: true,
                msg: 'Subida de archivo exitosa!',
                data: file_u.name
            })
        })
        blobStream.end(file.buffer);
    } catch (err) {
        //! Imprimimos el error por consola
        console.log(err);
        //! Retornamos un mensaje de error al cliente
        return res.status(500).json({
            success: true,
            msg: 'No es posible continuar con la subida del archivo, ocurrio un problema interno'
        })
    }
}
/*************************/
// TODO -> Exportacion del modulo
export {
    upload_file,
    view_file
}