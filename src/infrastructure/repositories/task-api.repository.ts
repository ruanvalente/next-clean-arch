import { Task } from "@/src/core/models/task.model";
import { TaskRepository } from "@/src/core/repositories/task.repository";
import { httpClient } from "../http/http.client";

export class TaskApiRepository implements TaskRepository {
  getAll(): Promise<Task[]> {
    return httpClient.get("/tasks", {
      cache: "no-store",
      next: { revalidate: 0 },
    });
  }

  toggle(id: string): Promise<Task> {
    return httpClient.patch(`/tasks/${id}/toggle`, null, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });
  }
}
