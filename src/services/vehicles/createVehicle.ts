import AppDataSource from "../../data-source";
import { Images } from "../../entities/images.entity";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";

export const createVehicleService = async (data: any) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle)
    const ImageRepo = AppDataSource.getRepository(Images)
    const UserRepo = AppDataSource.getRepository(User)

    const { userId, images, ...restData } = data


    // const imagesArr = await images.map(async (img: string) => {
    //     const actualImage = ImageRepo.create({ image: img })
    //     await ImageRepo.save(actualImage)
    //     return actualImage
    // })
    // const promessa = Promise.resolve(imagesArr).then(resp => resp)
    // console.log(promessa)

    const userFinded = await UserRepo.findOneBy({ id: userId })
    restData.user = userFinded
    restData.images = []

    images.forEach(async (img: string) => {
        const actualImage = await ImageRepo.save({ image: img })
        restData.images.push(actualImage)
    })
    // const image2 = await ImageRepo.save({ image: images[1] })
    // restData.images.push(image2)

    const vehicleCreated = await VehicleRepo.save(restData)

    const { user, ...vehicle } = vehicleCreated

    return vehicle
}
