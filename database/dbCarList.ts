import { Car } from '../models'
import { db} from '.'

export const getCarsByid =async (user_id:string) => {

    await db.connect();
    const cars = await Car.find({user_id});
    await db.disconnect();

    return JSON.parse(JSON.stringify(cars));
    
}