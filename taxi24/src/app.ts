import 'dotenv/config';
import express from 'express';
import apiRoutes from './routes'

export const app = express();

app.use(express.json());
app.use("/api", apiRoutes )