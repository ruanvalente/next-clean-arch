import { Task } from "../types/task.type";

export async function getTasksHttp(): Promise<Task[]> {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  return res.json();
}

export async function toggleTaskHttp(id: string) {
  await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "PATCH",
  });
}
