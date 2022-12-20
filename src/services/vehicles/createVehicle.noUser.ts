import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import { IReqCreateVehicle } from "../../interfaces/vehicle";

export const createVehicleServiceNoUser = async (data: IReqCreateVehicle) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)

    const vehicleCreated = await VehicleRepo.save(data)

    return vehicleCreated
}