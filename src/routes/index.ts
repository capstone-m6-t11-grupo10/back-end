import { Express } from "express"

import { usersRoutes } from "./users.routes"
import { loginRoutes } from "./login.routes"
import { vehiclesRoutes } from "./vehicles.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes())
  app.use("/vehicles", vehiclesRoutes())
  app.use("/login", loginRoutes())
}
