import connectDB from "../mongodb/config";
import { seedConductor } from "./seedConductor";
import { SeedContext } from "./seedContext";
import { seedPasajero } from "./seedPasajero";
import { seedViajes } from "./seedViajes";


const runSeeds = async () => {
	try {
		await connectDB();
		const context: SeedContext = {};
		await seedConductor(context);
		await seedPasajero(context)
		await seedViajes(context)
			;
		console.log("✅All seed scripts executed successfully");
		process.exit(0);
	} catch (error) {
		console.error("❌Error executing seed scripts:", error);
		process.exit(1);
	}
};

runSeeds();
