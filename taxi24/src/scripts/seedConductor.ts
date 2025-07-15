import { Conductor, IConductor } from "../models/conductor";
import { SeedContext } from "./seedContext";

export const seedConductor = async (context: SeedContext): Promise<void> => {
	try {
		const conductorData: Partial<IConductor>[] = [
			{ nombre: "Mengano", cedula: "1234567890", telefono: "0987654321", },
			{ nombre: "Perensejo", cedula: "1234567891", telefono: "0987654322", },
			{ nombre: "fulanito", cedula: "1234567892", telefono: "0987654323", },
			{ nombre: "firulai", cedula: "1234567893", telefono: "0987654324", },
			{ nombre: "Ramon", cedula: "1234567894", telefono: "0987654325", },
			{ nombre: "Kiki", cedula: "1234567895", telefono: "0987654326", },
		];

		const conductor = await Conductor.insertMany(conductorData);
		console.log("Conductor created:", conductor.map((i) => i._id));

		context.conductor = conductor as IConductor[];
	} catch (error) {
		console.error("Error seeding conductor:", error);
		throw error;
	}
};
