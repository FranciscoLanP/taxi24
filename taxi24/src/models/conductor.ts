import { Schema, model, Document } from 'mongoose';

export interface IConductor extends Document{
    _id: Schema.Types.ObjectId;
    nombre: string;
}
const ConductorSchema = new Schema<IConductor>({
    nombre: {type: String, required: true},
})

export const Conductor = model<IConductor>("Conductor", ConductorSchema )