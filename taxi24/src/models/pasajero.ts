import { Schema, model, Document } from 'mongoose';

export interface IPasajero extends Document {
    _id: Schema.Types.ObjectId;
    pasajero: string;
}
const PasajeroSchema = new Schema<IPasajero>({
    pasajero: { type: String, required: true, unique: true }
})

export const Pasajero = model<IPasajero>("Pasajero", PasajeroSchema)