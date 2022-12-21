import AppDataSource from "../../data-source";
import { Images } from "../../entities/images.entity";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";

export const createVehicleService = async (data: any) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)
    const ImageRepo = AppDataSource.getRepository(Images)
    const UserRepo = AppDataSource.getRepository(User)

    const { userId, images, ...restData } = data

    const userFinded = await UserRepo.findOneBy({ id: userId })
    restData.user = userFinded

    const vehicleCreated = await VehicleRepo.save(restData)

    images.forEach(async (img: string) => {
        const actualImage = await ImageRepo.save({ image: img, vehicle: vehicleCreated })
        await ImageRepo.save(actualImage)
    })

    await VehicleRepo.save(vehicleCreated)

    const { user, ...vehicle } = vehicleCreated

    return vehicle
}
