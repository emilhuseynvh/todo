import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Controller('todo')
export class TodoController {
    constructor(
        private todoService: TodoService
    ) { }

    @Get()
    async list() {
        return await this.todoService.list();
    }

    @Post()
    async create(@Body() body: CreateTodoDto) {
        return await this.todoService.create(body);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: UpdateTodoDto) {
        return await this.todoService.update(id, body);
    }

    @Delete(':id')
    async deleteTodo(@Param('id') id: number) {
        return await this.todoService.deleteTodo(id);
    }
}