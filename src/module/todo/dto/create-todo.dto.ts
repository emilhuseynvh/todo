import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class CreateTodoDto {
    @Type()
    @IsString()
    @MinLength(1)
    @ApiProperty({ default: 'Hello World' })
    todo: string;
}