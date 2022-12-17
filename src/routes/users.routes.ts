import { Router } from "express"
import { createUserController } from "../controllers/user/createUser.controller"

// import { schemaValidation } from "../middlewares/schemaValidation.middleware"
import { authTokenMiddleware } from "../middlewares/authToken.middleware"

// import { userSchema } from "../schemas/user.schema"

const routes = Router()

export const usersRoutes = () => {
  routes.post("", createUserController)
  return routes
}
