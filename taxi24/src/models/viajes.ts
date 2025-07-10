import { Schema, model, Document } from 'mongoose';

export interface IViajes extends Document {
    _id: Schema.Types.ObjectId;
    piloto: string;
    viaje_activo: boolean;
    conductor_id: Schema.Types.ObjectId;
}
const ViajesSchema = new Schema<IViajes>({
    piloto: { type: String, unique: true },
    viaje_activo: { type: Boolean },
    conductor_id: { type: Schema.Types.ObjectId, ref: 'Conductor', required: true },
})

export const Viajes = model<IViajes>("Viajes", ViajesSchema)