import { Router } from "express";
import { createVehicleController, listVehiclesController } from "../controllers/vehicle/vehicles.controllers";

const routes = Router();

export const vehiclesRoutes = () => {
    // routes.post("/:userId", createVehicleController);
    routes.post("", createVehicleController);
    routes.get("", listVehiclesController);
    return routes
}

