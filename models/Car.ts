import mongoose, { Schema, model, Model} from 'mongoose'

import { ICar } from '../interfaces'

const carSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    placa: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    year: { type: Number, required: true },
    vin: { type: String, required: false },   
})

const Car:Model<ICar>= mongoose.models.Car || model('Car', carSchema);

export default Car