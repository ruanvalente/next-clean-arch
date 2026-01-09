import { TaskApiRepositoryMemory } from "@/src/infrastructure/repositories/task-api-memory.repository";
import { GetAllTasksUseCase } from "../../core/use-cases/get-task-usecases";
import { ToggleTaskUseCase } from "../../core/use-cases/toggle-task.usecase";
// import { provideTaskRepository } from "./tasks.providers";

// const taskRepository = provideTaskRepository();
const taskRepository = new TaskApiRepositoryMemory();

export function composeTaskUseCases() {
  return {
    getAllTasks: new GetAllTasksUseCase(taskRepository),
    toggleTask: new ToggleTaskUseCase(taskRepository),
  };
}
