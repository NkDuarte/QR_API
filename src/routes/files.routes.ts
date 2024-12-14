/**********************/
//! Importaciones
import { Router } from "express";
import multer from 'multer'
import { upload_file, view_file } from "../controllers/files.controllers";
/**********************/
//? |-> Instancia de Router
const router: Router | any = Router()
//? |-> Configuracion carega de archivo temporal
const upload_file_multer = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 35 * 1024 * 1024 }
})
/**********************/
//? |-> Inicializacion de rutas
    //? $GET
    router.get(
        '/view-file/:type_file/:name_file',
        view_file
    )
    //? $POST
    router.post(
        '/upload',
        [ upload_file_multer.single('file') ],
        upload_file
    )
    //? $PUT || $PATCH
    //? $DELETE
/**********************/
// TODO -> Exportacion del modelo rutas por defecto
export default router