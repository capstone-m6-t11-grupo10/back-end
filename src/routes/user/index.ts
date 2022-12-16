import { Router } from "express"

import { createUserController } from "../../controllers/user/createUser.controller"

export const usersRoute = Router()

usersRoute.post("", createUserController)
