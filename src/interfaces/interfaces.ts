/********************/
//* |-> Interface info data
interface _data_store {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    info_personal?: {
        telefonos?: string[],
        emails?: string[],
        direccion?: string;
        redes_sociales?: {
            red: string;
            url: string;
            descripcion: string;
        }[]
        company?: {
            nombre: string;
            telefonos: string[];
            emails: string[];
            descripcion: string;
            horarios: {
                dias: string;
                hora_entrada: string;
                hora_cierre: string;
            }[];
            direccion: string;
            redes_sociales: {
                red: string;
                url: string;
                descripcion: string;
            }[];
            instalaciones: {
                nombre: string;
            }[]
            menus: {
                nombre_seccion: string;
                descripcion: string;
                productos: {
                    img: string;
                    nombre: string;
                    descripcion: string;
                    precio: string;
                }
            }
        },
        cupon?: {
            codigo: string;
            valido_fecha: string;
            descripcion_t_c: string;
            btn_activo: {
                nombre: string;
                url: string;
            }
        }
    }
    url_web?: string;
    archivo?: string;
    tipo: number;
}
/********************/
// TODO -> Ecportacion del modulo
export {
    _data_store
}