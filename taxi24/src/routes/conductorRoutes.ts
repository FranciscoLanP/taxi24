import { Router } from 'express'
import { createConductor, getAllConductor, getAllConductorDisponibles, getByConductorId, updateConductor } from '../controller/conductoresController'

const router = Router()
router.get("/conductor/:id", getByConductorId)
router.get("/conductor-disponibles", getAllConductorDisponibles)
router.get("/conductor", getAllConductor)
router.post("/conductor", createConductor)
router.put("/conductor/:id", updateConductor)

export default router