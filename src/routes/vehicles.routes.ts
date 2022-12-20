import { Router } from "express";

import {
  createVehicleController,
  createVehicleControllerNoUser,
  listVehiclesController,
  vehicleListVeicleIdController,
} from "../controllers/vehicle/vehicles.controllers";

import { createVehicleController, listVehiclesController } from "../controllers/vehicle/vehicles.controllers";

import { verifySamePlate } from "../middlewares/vehicles/verifySamePlates";

const routes = Router();

export const vehiclesRoutes = () => {

  // routes.post("/:userId", createVehicleController);
  routes.post("", verifySamePlate, createVehicleControllerNoUser);
  routes.post("/:userId", verifySamePlate, createVehicleController);
  routes.get("", listVehiclesController);
  routes.get("/:userId", vehicleListVeicleIdController);
  return routes;
};



