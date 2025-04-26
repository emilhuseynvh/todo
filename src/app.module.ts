import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
import { TodoEntity } from './entities/todo.entity';
import { TodoModule } from './module/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.databaseUrl,
      entities: [TodoEntity],
      logging: true,
      synchronize: false,
    }),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
