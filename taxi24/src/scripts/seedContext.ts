import { IConductor } from "../models/conductor";
import { IPasajero } from "../models/pasajero";
import { IViajes } from "../models/viajes";


export interface SeedContext {
    conductor?: IConductor[];
    viajes?: IViajes;
    pasajero?: IPasajero
}
