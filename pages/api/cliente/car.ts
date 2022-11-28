import type { NextApiResponse, NextApiRequest} from 'next';


import {db} from '../../../database'
import { ICar } from '../../../interfaces';
import Car from '../../../models/Car';



type Data = | { message: string} 
| {car: ICar}

export default function handler( req: NextApiRequest, res: NextApiResponse){

    switch( req.method) {
        case 'POST' :
            return agregarCar(req, res)       
        default: 
            res.status(400).json({
                message: 'Bad request'
            })    

    }

}


const  agregarCar = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {user_id, placa, marca, modelo, year, vin } = req.body.car as ICar
        
    await db.connect();


    const newCar = new Car({
        user_id,
        placa,
        marca,
        modelo,
        year,
        vin
    });

    try {
        await newCar.save({validateBeforeSave: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    }

    const car = newCar;

    await db.disconnect();

    return res.status(200).json({
        car
    })


}