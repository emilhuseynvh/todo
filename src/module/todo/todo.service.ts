import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "src/entities/todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepo: Repository<TodoEntity>
    ) { }

    async list() {
        return await this.todoRepo.find();
    }

    async create(params: CreateTodoDto) {
        let todo = this.todoRepo.create(params);

        await todo.save();

        return {
            message: 'todo created succesfully',
            todo
        };
    }

    async update(id: number, params: UpdateTodoDto) {
        let todo = await this.todoRepo.findOne({ where: { id } });

        if (!todo) throw new NotFoundException('todo is not found');

        let result = await this.todoRepo.update(id, params);

        return {
            message: 'todo updated successfully'
        };
    }

    async deleteTodo(id: number) {
        console.log(id);
        
        let result = await this.todoRepo.delete(id);

        if (!result.affected) throw new NotFoundException(`Todo in ${id} id is not found`);

        return {
            message: 'todo deleted succesfully'
        };
    }
}