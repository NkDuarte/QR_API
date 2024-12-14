/**********************/
//! Importaciones
import { Request, Response } from "express";
import { db } from "../databases/firebase.databaes";
import { _data_store } from "../interfaces/interfaces";
import { v4 } from "uuid";
/**********************/
//? -> Controlador que creara la informcacion del QR
const store_data = async (req: Request, res: Response) => {
    //* |-> Capturamos los datos entrantes del body
    const body_data: _data_store = req.body
    //* |-> Control de errores tryCatch
    try {
        const uuid_asso = v4()
        //* |-> Insertamos los datos entrantes a el firebase
        await db.ref(`/fabrica/${uuid_asso}`).set(body_data)
        //* |-> Retornamos un mensaje de exito 200
        return res.status(201).json({
            success: true,
            msg: 'Informacion almacenada correctamente!',
            data: uuid_asso
        })
    } catch (err) {
        //! Imprimimos el error por consola
        console.log(err);
        //! Retornamos un mensaje de error al cliente
        return res.status(500).json({
            success: true,
            msg: 'No es posible continuar con la creacion de la informacion QR, ocurrio un problema interno'
        })
    }
}
//? -> Controlador que mostrara la informacion de un uuid registrado
const view_info_uuid = async (req: Request, res: Response) => {
    //* |-> Capturamos el uuid para hacer la consulta
    const { uuid } = req.params
    //* |-> Control de errores tryCatch
    try {
        //* |-> Instanciamos y buscamos por el uuid
        db.ref(`/fabrica/${uuid}`).get()
            .then(snapshot => {
                if (!snapshot.exists()) {
                    //* |-> Respondemos al cliente un 404
                return res.status(404).json({
                    success: false,
                    msg: 'No se encontro ninguna informacion'
                })
                }
                //* |-> Respondemos al cliente un exito 200
                return res.status(200).json({
                    success: true,
                    msg: 'Busqueda exitosa!',
                    data: snapshot.val()
                })
            })
    } catch (err) {
        //! Imprimimos el error por consola
        console.log(err);
        //! Retornamos un mensaje de error al cliente
        return res.status(500).json({
            success: true,
            msg: 'No es posible continuar con visualizacion de la informacion QR, ocurrio un problema interno'
        })
    }
}
/**********************/
// TODO -> Exportacion del modulo controlador
export {
    store_data,
    view_info_uuid
}