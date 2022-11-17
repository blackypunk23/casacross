import type { NextApiResponse, NextApiRequest} from 'next';


import {db} from '../../../database'
import { ICliente } from '../../../interfaces/cliente';
import Cliente from '../../../models/Cliente';


type Data = | { message: string} 
| {cliente: ICliente}

export default function handler( req: NextApiRequest, res: NextApiResponse){

    switch( req.method) {
        case 'POST' :
            return crearCliente(req, res)
        default: 
            res.status(400).json({
                message: 'Bad request'
            })    

    }

}
const  crearCliente = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {user_id, nombre, empresa, cedula, telefono, direccion, sexo, } = req.body 

    await db.connect();


    const newCliente = new Cliente({
        user_id,
        nombre,
        empresa,
        cedula,
        telefono,
        direccion,
        sexo
    });

    try {
        await newCliente.save({validateBeforeSave: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    }

    const cliente = newCliente;

    return res.status(200).json({
        cliente
    })


}