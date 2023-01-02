import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const content = req.body.content;
  const userId = req.user.id;
  const vehicleId = req.params.vehicleId;
  const comment = await createCommentService({ content, vehicleId, userId });
  return res.status(201).json(comment);
};
