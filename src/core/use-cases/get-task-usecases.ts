import { Task } from "../models/task.model";
import { TaskRepository } from "../repositories/task.repository";

export class GetAllTasksUseCase {
  constructor(private readonly repository: TaskRepository) {}

  execute(): Promise<Task[]> {
    return this.repository.getAll();
  }
}
