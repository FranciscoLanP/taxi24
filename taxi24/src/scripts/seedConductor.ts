import { Conductor, IConductor } from "../models/conductor";
import { SeedContext } from "./seedContext";

export const seedConductor = async (context: SeedContext): Promise<void> => {
	try {
		const conductorData: Partial<IConductor>[] = [
			{ nombre: "Francisco" },
			{ nombre: "Alvaro" },
			{ nombre: "Greicy" },
			{ nombre: "Samir" },
			{ nombre: "Honey" },
			{ nombre: "Kiki" },
		];

		const conductor = await Conductor.insertMany(conductorData);
		console.log("Conductor created:", conductor.map((i) => i._id));

		context.conductor = conductor as IConductor[];
	} catch (error) {
		console.error("Error seeding conductor:", error);
		throw error;
	}
};
