import { Task } from "@/src/core/models/task.model";
import { TaskRepository } from "@/src/core/repositories/task.repository";

export class TaskApiRepositoryMemory implements TaskRepository {
  private tasks: Task[] = [
    { id: "1", title: "Task 1", completed: false },
    { id: "2", title: "Task 2", completed: true },
  ];

  async getAll(): Promise<Task[]> {
    return [...this.tasks];
  }

  async toggle(id: string): Promise<Task> {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      throw new Error("Task not found");
    }

    const updatedTask: Task = {
      ...this.tasks[index],
      completed: !this.tasks[index].completed,
    };

    this.tasks[index] = updatedTask;

    return updatedTask;
  }
}
