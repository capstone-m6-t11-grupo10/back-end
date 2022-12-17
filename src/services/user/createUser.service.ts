import { hash } from "bcryptjs"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserRequest } from "../../interfaces/user"

export const createUserService = async ({
  name,
  email,
  cpf,
  password,
  isSeller,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)

  const userAlreadyExists = await userRepository.findOne({
    where: {
      cpf,
    },
  })

  if (userAlreadyExists) {
    throw new AppError("Usuário já cadastrado!", 400)
  }

  const hashedPassword = await hash(password, 10)

  if (isSeller) {
    const newSeller = userRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
      isSeller: true,
    })

    await userRepository.save(newSeller)

    return newSeller
  }

  const normalUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
    cpf,
  })

  await userRepository.save(normalUser)

  return normalUser
}
