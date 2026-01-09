import { TaskRepository } from "@/src/core/repositories/task.repository";
import { TaskApiRepositoryMemory } from "@/src/infrastructure/repositories/task-api-memory.repository";
import { TaskApiRepository } from "@/src/infrastructure/repositories/task-api.repository";

let repository: TaskRepository | null = null;

export function provideTaskRepository(): TaskRepository {
  if (!repository) {
    repository =
      process.env.NODE_ENV === "development"
        ? new TaskApiRepositoryMemory()
        : new TaskApiRepository();
  }

  return repository;
}
