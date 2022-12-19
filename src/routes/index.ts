import { Express } from "express"

import { usersRoutes } from "./users.routes"
import { loginRoutes } from "./login.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes())
  app.use("/login", loginRoutes())
}
