import type { NextApiResponse, NextApiRequest} from 'next';


import {db} from '../../../database'
import { ICliente } from '../../../interfaces/cliente';
import Cliente from '../../../models/Cliente';


type Data = | { message: string} 
| ICliente

export default function handler( req: NextApiRequest, res: NextApiResponse){

    switch( req.method) {
        case 'GET' :
            return obtenerCliente(req, res)
        default: 
            res.status(400).json({
                message: 'Bad request'
            })    

    }

}
const  obtenerCliente = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;
    console.log('recbiendo id :' + id)

    await db.connect();
    
    const cliente = await Cliente.findOne({ id }).lean();
    await db.disconnect();

    if( !cliente ) {
        return res.status(404).json({
            message: 'cliente no encontrado'
        })
    }

  
    return res.json(cliente );
    }


