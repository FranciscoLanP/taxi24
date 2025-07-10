import { Request, Response, NextFunction } from 'express';
import { Pasajero } from '../models/pasajero';

export const getAllPasajero = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { search } = req.query as { search?: string };
        const filter = search
            ? { pasajero: { $regex: search, $options: "i" } }
            : {};
        const items = await Pasajero.find(filter)
        res.status(200).json(items);
    } catch (error) {
        next(error);
    }
}

export const getByPasajeroId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const item = await Pasajero.findById(req.params.id);
        if (!item) {
            res.status(404).json({ message: "Pasajero no encontrado" });
            return;
        }
        res.status(200).json(item);
    } catch (error) {
        next(error);
    }

}

export const createPasajero = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { pasajero } = req.body;
        const exists = await Pasajero.findOne({ pasajero });
        if (exists) {
            res.status(409).json({ message: "Pasajero duplicado" });
            return;
        }
        const newItem = new Pasajero({ pasajero });
        const saved = await newItem.save();
        res.status(201).json(saved)
    } catch (error) {
        next(error)
    }
}

export const updatePasajero = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updated = await Pasajero.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) {
            res.status(404).json({ message: "Pasajero no encontrado" })
        }
        res.status(200).json(updated)
    } catch (error) {
        next(error);
    }
}