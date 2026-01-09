import { composeTaskUseCases } from "@/src/composition/task/tasks.composition.ts";
import { Task } from "@/src/core/models/task.model";
import { useState } from "react";

export function useTaskStore() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { getAllTasks, toggleTask } = composeTaskUseCases();

  async function load() {
    const data = await getAllTasks.execute();
    setTasks(data);
  }

  async function toggle(id: string) {
    const updated = await toggleTask.execute(id);

    setTasks((tasks) => tasks.map((task) => (task.id === id ? updated : task)));
  }

  return {
    tasks,
    load,
    toggle,
  };
}
