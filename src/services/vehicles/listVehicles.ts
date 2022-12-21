import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"

export const listVehicleService = async () => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)
    const carros = await VehicleRepo.findBy({ type: 'carro' })
    const motos = await VehicleRepo.findBy({ type: 'moto' })
    return { carros, motos }
}