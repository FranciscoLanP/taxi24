import {Router} from 'express'
import { createViajes, getAllViajes, getByViajesId, toggleViajesStatus, updateViajes } from '../controller/viajesController'

const router = Router()
router.get("/viajes/:id", getByViajesId)
router.get("/viajes", getAllViajes)
router.post("/viajes", createViajes)
router.put("/viajes/:id", updateViajes)
router.put("/viajes/:id/status", toggleViajesStatus);


export default router