import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";

export const createVehicleService = async (data: any) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)
    const UserRepo = AppDataSource.getRepository(User)

    const { id, ...restData } = data

    const user = UserRepo.findOneBy({ id })

    restData.user = user

    const vehicleCreated = await VehicleRepo.save(restData)
    const vehicleId = vehicleCreated.id


    const vehicle = await VehicleRepo.findOneBy({ id: vehicleId });
    return vehicleCreated
}