import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComment.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

export const commentsRoutes = () => {
  routes.post("/:id", authTokenMiddleware, createCommentController);
  return routes;
};