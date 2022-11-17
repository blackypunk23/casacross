import { Cliente } from '../models'
import { db} from './'

export const getClinteByid =async (user_id:string) => {

    await db.connect();
    const cliente = await Cliente.findOne({user_id});
    await db.disconnect();

    return JSON.parse(JSON.stringify(cliente));
    
}