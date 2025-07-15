import { Schema, model, Document } from 'mongoose';

export interface IPasajero extends Document {
    _id: Schema.Types.ObjectId;
    nombre: string;
    cedula: string;
    telefono: string;
    correo?: string;
}
const PasajeroSchema = new Schema<IPasajero>({
    nombre: { type: String, required: true,  },
    cedula: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: true },
    correo: { type: String, unique: true }
})

export const Pasajero = model<IPasajero>("Pasajero", PasajeroSchema)