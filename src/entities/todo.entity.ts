import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('todo')
export class TodoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    todo: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}