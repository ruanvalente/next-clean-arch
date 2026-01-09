import { Task } from "../models/task.model";

export interface TaskRepository {
  getAll(): Promise<Task[]>;
  toggle(id: string): Promise<Task>;
}
