import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  create(task: Partial<Task>): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  delete(id: number): Promise<void> {
    return this.tasksRepository.delete(id).then(() => undefined);
  }
}