
import { Request, Response, NextFunction } from 'express';
import { Viajes } from '../models/viajes';


export const getAllViajes = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        let query = Viajes.find({ viaje_activo: true })
       
        const items = await query.find().exec();
         console.log(items)
        res.status(200).json(items)
    } catch (error) {
        next(error);
    }
}

export const getByViajesId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const item = await Viajes.findById(req.params.id)
            .populate("conductor_id")
            .exec()

        if (!item) {
            res.status(404).json({ message: "Viajes no encontrado" });
            return;
        }
        res.status(200).json(item);
    } catch (error) {
        next(error);
    }
}

export const createViajes = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { piloto, viaje_activo, conductor_id, pasajero_id} = req.body;
        const newItem = new Viajes({ piloto, viaje_activo, conductor_id, pasajero_id });
        const saved = await newItem.save();
        res.status(201).json(saved)
    } catch (error) {
        next(error)
    }
}

export const updateViajes = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updated = await Viajes.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) {
            res.status(404).json({ message: "Viajes no encontrado" })
        }
        res.status(200).json(updated)
    } catch (error) {
        next(error);
    }
}

export const toggleViajesStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const { viaje_activo } = req.body;

        if (viaje_activo === undefined) {
            res.status(400).json({ message: "Status field is required" });
        }

        const updatedCompletado = await Viajes.findByIdAndUpdate(
            id,
            { viaje_activo },
            { new: true, runValidators: true },
        );

        if (!updatedCompletado) {
            res.status(404).json({ message: "Viaje not found" });
        }

        res.status(200).json(updatedCompletado);
    } catch (error) {
        next(error)
    }
};