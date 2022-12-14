import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
} from 'typeorm';

import { Post } from './post.entity';
import { User } from './user.entity';

@Entity('vehicles')
export class Vehicle {
    @PrimaryGeneratedColumn('uuid')
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

    @OneToOne(() => Post, (post) => post.vehicle)
    post: Post;

    @ManyToOne(() => User, (user) => user.vehicles)
    user: User;
}
