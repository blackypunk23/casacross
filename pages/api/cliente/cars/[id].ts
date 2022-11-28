import type { NextApiResponse, NextApiRequest} from 'next';


import {db} from '../../../../database'
import { ICar } from '../../../../interfaces/';
import {Car} from '../../../../models/';


type Data = | { message: string} 
| ICar[]

export default function handler( req: NextApiRequest, res: NextApiResponse){

    switch( req.method) {
        case 'GET' :
            return obtenerCars(req, res)
        default: 
            res.status(400).json({
                message: 'Bad request'
            })    

    }

}
const  obtenerCars = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;
    console.log('recbiendo id cliente:' + id)

    await db.connect();
    
    const cars = await Car.find({ id }).lean()
    
    console.log(cars)
    await db.disconnect();

    if( !cars ) {
        return res.status(404).json({
            message: 'cliente no posee vehiculos'
        })
    }

  
    return res.json(cars );
    }


