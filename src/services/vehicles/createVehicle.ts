import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";

export const createVehicleService = async (data: any) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)
    const UserRepo = AppDataSource.getRepository(User)

    const { userId, ...restData } = data

    const user = await UserRepo.findOneBy({ id: userId })

    restData.user = user

    const vehicleCreated = await VehicleRepo.save(restData)

    return vehicleCreated
}
