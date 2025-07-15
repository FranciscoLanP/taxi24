import { Pasajero, IPasajero } from "../models/pasajero";
import { SeedContext } from "./seedContext";


export const seedPasajero = async (context: SeedContext): Promise<void> => {
    try {
        const pasajeroData: Partial<IPasajero>[] = [
            { nombre: "Francisco", cedula: "1234567890", telefono: "0987654321", correo: "francisco@gmail.com" },
            { nombre: "Alvaro", cedula: "1234567891", telefono: "0987654322", correo: "alvaro@gmail.com" },
            { nombre: "Greicy", cedula: "1234567892", telefono: "0987654323", correo: "greicy@gmail.com" },
            { nombre: "Samir", cedula: "1234567893", telefono: "0987654324", correo: "samir@gmail.com" },
            { nombre: "Gina", cedula: "1234567894", telefono: "0987654325", correo: "gina@gmail.com" },
            { nombre: "Arlet", cedula: "1234567895", telefono: "0987654326", correo: "arlet@gmail.com" },
        ];

        const pasajero = await Pasajero.insertMany(pasajeroData);
        console.log("Pasajero created:",pasajero.map((i) => i._id),
        );
        context.pasajero = pasajero as IPasajero[];
    } catch (error) {
        console.error("Error seeding pasajero:", error);
        throw error;
    }
};
