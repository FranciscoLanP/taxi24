import { Schema, model, Document } from 'mongoose';

export interface IConductor extends Document {
    _id: Schema.Types.ObjectId;
    nombre: string;
    cedula: string;
    telefono: string;
    correo?: string;
}

const ConductorSchema = new Schema<IConductor>({
    nombre: { type: String, required: true, },
    cedula: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: true },
    correo: { type: String, unique: true }
})

export const Conductor = model<IConductor>("Conductores", ConductorSchema)