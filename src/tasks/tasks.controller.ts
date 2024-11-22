import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.tasksService.delete(id);
  }
}
