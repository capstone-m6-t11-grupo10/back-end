import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Comment } from "./comment.entity";

import { User } from "./user.entity";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 15 })
  color: string;

  @Column()
  type: string;

  @Column()
  price: string;

  @Column({ unique: true })
  plate: string;

  @Column()
  image: string;

  @Column()
  km: number;

  @Column({ length: 4 })
  year: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Comment, (comment) => comment.vehicle)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.vehicles, { eager: true })
  user: User;
}
