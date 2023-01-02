import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const content = req.body.content;
  const { id } = req.user;
  //id é o id do usuario
  const vehicleId = req.params.vehicleId;
  const comment = await createCommentService({ content, vehicleId, id });
  return res.status(201).json(comment);
};
