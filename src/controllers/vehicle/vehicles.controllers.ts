import { Request, Response } from "express";
import { IReqCreateVehicle } from "../../interfaces/vehicle";
import { createVehicleService } from "../../services/vehicles/createVehicle";
import { createVehicleServiceNoUser } from "../../services/vehicles/createVehicle.noUser";
import vehicleListIdService from "../../services/vehicles/listVehicleId";

import { listVehicleService } from "../../services/vehicles/listVehicles";

export const createVehicleControllerNoUser = async (
  req: Request,
  res: Response
) => {
  const data: IReqCreateVehicle = req.body;
  const response = await createVehicleServiceNoUser(data);
  return res.status(201).json(response);
};
export const createVehicleController = async (req: Request, res: Response) => {
  const data: IReqCreateVehicle = req.body;
  const userId = req.params.userId;
  data.userId = userId;
  const response = await createVehicleService(data);
  return res.status(201).json(response);
};

export const listVehiclesController = async (req: Request, res: Response) => {
  const response = await listVehicleService();
  return res.status(200).json(response);
};

export const vehicleListVeicleIdController = async (
  req: Request,
  res: Response
) => {
  const vehicleId: string = req.params.userId;
  const vehicle = await vehicleListIdService(vehicleId);
  return res.status(200).json(vehicle);
};
