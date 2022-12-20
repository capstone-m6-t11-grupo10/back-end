import { Router } from "express";
import { createVehicleController, createVehicleControllerNoUser, listVehiclesController } from "../controllers/vehicle/vehicles.controllers";
import { verifySamePlate } from "../middlewares/vehicles/verifySamePlates";

const routes = Router();

export const vehiclesRoutes = () => {
    // routes.post("/:userId", createVehicleController);
    routes.post("", verifySamePlate, createVehicleControllerNoUser);
    routes.post("/:userId", verifySamePlate, createVehicleController);
    routes.get("", listVehiclesController);
    return routes
}

