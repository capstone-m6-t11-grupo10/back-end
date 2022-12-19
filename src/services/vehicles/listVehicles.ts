import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"

export const listVehicleService = async () => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)
    const clients = await VehicleRepo.find()
    return clients
}