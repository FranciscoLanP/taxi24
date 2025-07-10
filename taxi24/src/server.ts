import dotenv from 'dotenv';
import connectDB from './mongodb/config';
import { app } from './app';


dotenv.config();

const PORT: number = Number(process.env.PORT) || 3001;

const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/api`);
  });
};

startServer();
