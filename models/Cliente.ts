import { FlashAuto } from '@mui/icons-material';
import mongoose, { Schema, model, Model} from 'mongoose'

import { ICliente } from '../interfaces'

const clienteSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    nombre: { type: String, required: true },
    empresa: { type: String, required: true },
    cedula: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: false },
    
    
})

const Cliente:Model<ICliente>= mongoose.models.Cliente || model('Cliente', clienteSchema);

export default Cliente