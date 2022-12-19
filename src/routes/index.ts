import { Express } from "express"

import { usersRoutes } from "./users.routes"
import { vehiclesRoutes } from "./vehicles.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes())
  app.use("/vehicles", vehiclesRoutes())
}
