import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Comment } from './comment.entity';
import { User } from './user.entity';
import { Vehicle } from './vehicle.entity';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => Vehicle, (vehicle) => vehicle.post)
    @JoinColumn()
    vehicle: Vehicle;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];
}
