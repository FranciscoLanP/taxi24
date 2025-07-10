import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const uri =
			process.env.MONGO_URI ||"mongodb://localhost:27017/autobus"
		await mongoose.connect(uri);
		console.log("MongoDB conectado correctamente");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		throw new Error("MongoDB connection failed");
	}
};

export const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
		console.log("MongoDB desconectado correctamente");
	} catch (error) {
		console.error("Error disconnecting MongoDB:", error);
	}
};

export default connectDB;
