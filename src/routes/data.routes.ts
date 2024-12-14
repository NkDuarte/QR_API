/*********************/
//! Importaciones
import { Router } from "express";
import { store_data, view_info_uuid } from "../controllers/data.controllers";
/*********************/
//? Instancia de Router
const router: Router = Router()
/*********************/
//? Inicializacion de rutas
    //? $GET
    router.get(
        '/view-info/:uuid',
        view_info_uuid
    )
    //? $POST
    router.post(
        '/send-store',
        store_data
    )
    //? $PUT | PATCH
    //? $DELETE
/*********************/
// TODO -> Exportacion del modulo rutas
export default router