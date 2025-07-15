import { IConductor } from "../models/conductor";
import { IPasajero } from "../models/pasajero";
import { IViajes } from "../models/viajes";


export interface SeedContext {
    conductor?: IConductor[];
    pasajero?: IPasajero[]
    viajes?: IViajes;
}
