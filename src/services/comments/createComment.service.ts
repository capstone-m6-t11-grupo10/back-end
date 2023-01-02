import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import { IUserComment } from "../../interfaces/comments";

export const createCommentService = async ({
  id,
  //id é o id do usuario
  vehicleId,
  content,
}: IUserComment) => {
  const userRepository = AppDataSource.getRepository(User);
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const commentRepository = AppDataSource.getRepository(Comment);

  const userExists = await userRepository.findOne({ where: { id: id } });
  //id é o id do usuario
  if (!userExists) {
    throw new Error(`User does not exist`);
  }
  const vehicleExists = await vehicleRepository.findOne({
    where: { id: vehicleId },
    //id é o id do veiculo
  });
  if (!vehicleExists) {
    throw new Error(`Vehicle does not exist`);
  }

  const comment = new Comment();
  comment.content = content;
  comment.vehicle = vehicleExists;
  comment.user = userExists;

  commentRepository.create(comment);
  await commentRepository.save(comment);

  return comment;
};
