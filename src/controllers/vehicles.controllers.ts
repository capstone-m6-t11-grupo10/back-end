import { Request, Response } from "express";
import { createVehicleService } from "../services/vehicles/createVehicle";
import { listVehicleService } from "../services/vehicles/listVehices";

export const createVehicleController = async (req: Request, res: Response) => {
    const data = req.body;
    const response = await createVehicleService(data);
    return res.status(201).json(response);
};

export const listVehiclesController = async (req: Request, res: Response) => {
    const response = await listVehicleService()
    return res.status(200).json(response)
}