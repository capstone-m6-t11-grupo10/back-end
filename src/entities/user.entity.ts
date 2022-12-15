import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

import { Address } from './address.entity';
import { Comment } from './comment.entity';
import { Vehicle } from './vehicle.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ length: 150 })
    name: string;

    @Column()
    birthDate: Date;

    @Column()
    image: string;

    @Column({ length: 150, unique: true })
    email: string;

    @Column({ length: 11, unique: true })
    phone: string;

    @Column()
    password: string;

    @Column({ length: 11, unique: true })
    cpf: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: false })
    isSeller: boolean;

    @Column({ length: 150 })
    bio: string;

    @OneToOne(() => Address, (address) => address.user)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
    vehicles: Vehicle[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}
