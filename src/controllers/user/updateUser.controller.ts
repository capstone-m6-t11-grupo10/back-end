import { Request, Response } from "express"
import { updateUserService } from "../../services/user/updateUser.service"

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = req.body

  const updatedChart = await updateUserService(id, data)

  return res.status(200).json(updatedChart)
}
