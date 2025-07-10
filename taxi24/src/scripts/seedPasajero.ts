import { Pasajero, IPasajero } from "../models/pasajero";
import { SeedContext } from "./seedContext";


export const seedPasajero = async (context: SeedContext): Promise<void> => {
    try {
        const pasajeroData: Partial<IPasajero>[] = [
            { pasajero: "A1"},
            { pasajero: "A2"},
            { pasajero: "A3"},
            { pasajero: "A4"},
            { pasajero: "A5"},
            { pasajero: "A6"},
        ];

        const pasajero = await Pasajero.insertMany(pasajeroData);
        console.log(
            "Pasajero created:",
            pasajero.map((i) => i._id),
        );
        context.pasajero = pasajero[0] as IPasajero;
    } catch (error) {
        console.error("Error seeding pasajero:", error);
        throw error;
    }
};
