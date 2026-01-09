import { TaskRepository } from "../repositories/task.repository";

export class ToggleTaskUseCase {
  constructor(private repository: TaskRepository) {}

  execute(id: string) {
    return this.repository.toggle(id);
  }
}
