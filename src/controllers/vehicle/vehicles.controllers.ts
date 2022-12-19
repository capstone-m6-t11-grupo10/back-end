import { Request, Response } from "express";
import { IReqCreateVehicle } from "../../interfaces/vehicle";
import { createVehicleService } from "../../services/vehicles/createVehicle";
import { listVehicleService } from "../../services/vehicles/listVehicles";

export const createVehicleController = async (req: Request, res: Response) => {
    const data: IReqCreateVehicle = req.body;
    const response = await createVehicleService(data);
    return res.status(201).json(response);
};

export const listVehiclesController = async (req: Request, res: Response) => {
    const response = await listVehicleService()
    return res.status(200).json(response)
}