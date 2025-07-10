import {Router} from 'express'
import { createPasajero, getAllPasajero, getByPasajeroId, updatePasajero } from '../controller/pasajeroController'

const router = Router()
router.get("/pasajero/:id", getByPasajeroId)
router.get("/pasajero", getAllPasajero)
router.post("/pasajero", createPasajero)
router.put("/pasajero/:id", updatePasajero)

export default router