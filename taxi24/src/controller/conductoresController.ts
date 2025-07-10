import { Request, Response, NextFunction } from 'express';
import { Conductor } from '../models/conductor';
import { Viajes } from '../models/viajes';
import mongoose from 'mongoose';


export const getAllConductor = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { search } = req.query as { search?: string };
        const filter = search
            ? { pasajero: { $regex: search, $options: "i" } }
            : {};
        const items = await Conductor.find(filter)
        res.status(200).json(items);
    } catch (error) {
        next(error);
    }
}

export const getAllConductorDisponibles = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const viajesActivos = await Viajes.find({ viaje_activo: true }).select('conductor_id');
    const conductoresOcupados = viajesActivos
      .map(v => v.conductor_id) 
      .filter(id => mongoose.Types.ObjectId.isValid(id?.toString()));

    const items = await Conductor.find({
      _id: { $nin: conductoresOcupados },
    });

    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};


export const getByConductorId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const item = await Conductor.findById(req.params.id);
        if (!item) {
            res.status(404).json({ message: "Conductor no encontrado" });
            return;
        }
        res.status(200).json(item);
    } catch (error) {
        next(error);
    }

}

export const createConductor = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { nombre } = req.body;
        const newItem = new Conductor({ nombre });
        const saved = await newItem.save();
        res.status(201).json(saved)
    } catch (error) {
        next(error)
    }
}

export const updateConductor = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updated = await Conductor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) {
            res.status(404).json({ message: "Conductor no encontrado" })
        }
        res.status(200).json(updated)
    } catch (error) {
        next(error);
    }
}