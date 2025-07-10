import { Router } from "express";
import pasajeroRoutes from "./pasajeroRoutes";
import conductorRoutes from "./conductorRoutes";
import viajesRoutes from "./viajesRoutes";


const router = Router()

router.use(pasajeroRoutes)
router.use(conductorRoutes)
router.use(viajesRoutes)

export default router