
import { useState } from "react";
import { Task } from "../types/task.type";
import { tasksMemory, toggleTaskMemory } from "../datasrouce/task.memory";

export function useTaskStore() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  async function load() {
    setTasks(tasksMemory);
  }

  async function toggle(id: string) {
    const updated = toggleTaskMemory(id) as unknown as Task;

    setTasks((tasks) => tasks.map((task) => (task.id === id ? updated : task)));
  }

  return {
    tasks,
    load,
    toggle,
  };
}
