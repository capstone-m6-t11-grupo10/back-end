import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import { IReqCreateVehicle } from "../../interfaces/vehicle";

export const createVehicleService = async (data: IReqCreateVehicle) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)

    const vehicleCreated = await VehicleRepo.save(data)
    const vehicleId = vehicleCreated.id


    const vehicle = await VehicleRepo.findOneBy({ id: vehicleId });
    return vehicle
}