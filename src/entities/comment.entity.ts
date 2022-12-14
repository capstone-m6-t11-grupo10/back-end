import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Post } from './post.entity';
import { User } from './user.entity';

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    content: string;

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;
}
