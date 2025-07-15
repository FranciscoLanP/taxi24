import { IViajes, Viajes } from '../models/viajes';
import type { SeedContext } from './seedContext';

export const seedViajes = async (context: SeedContext): Promise<void> => {
  try {
    if (
      !context.conductor ||
      !Array.isArray(context.conductor) ||
      context.conductor.length < 6 ||
      !context.pasajero ||
      !Array.isArray(context.pasajero) ||
      context.pasajero.length < 6
    ) {
      throw new Error(
        "Debes seedear al menos 6 conductores y 6 pasajeros antes de seedear viajes."
      );
    }

    const viajesData: Partial<IViajes>[] = [
      { piloto: "A1", viaje_activo: true, conductor_id: context.conductor[0]._id, pasajero_id: context.pasajero[0]._id },
      { piloto: "A2", viaje_activo: true, conductor_id: context.conductor[1]._id, pasajero_id: context.pasajero[1]._id },
      { piloto: "A3", viaje_activo: false, conductor_id: context.conductor[2]._id, pasajero_id: context.pasajero[2]._id },
      { piloto: "A4", viaje_activo: false, conductor_id: context.conductor[3]._id, pasajero_id: context.pasajero[3]._id },
      { piloto: "A5", viaje_activo: false, conductor_id: context.conductor[4]._id, pasajero_id: context.pasajero[4]._id }, 
      { piloto: "A6", viaje_activo: true, conductor_id: context.conductor[5]._id, pasajero_id: context.pasajero[5]._id },
    ];

    const viajes = await Viajes.insertMany(viajesData);
    console.log('Viajes created:', viajes.map((m) => m._id));

    context.viajes = viajes[0] as IViajes;
  } catch (error) {
    console.error('Error seeding viajes:', error);
    throw error;
  }
};
