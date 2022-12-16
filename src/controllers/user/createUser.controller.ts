import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"

import { IUserRequest } from "../../interfaces/user"
import { createUserService } from "../../services/user/createUser.service"

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body
  const user = await createUserService(userData)
  return res.status(201).json(instanceToPlain(user))
}
