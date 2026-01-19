import { Task } from "@/src/features/tasks/types/task.type";

export let tasksMemory: Array<Task> = [
  {
    id: "1",
    title: "Estudar Next.js RSC",
    completed: false,
  },
  {
    id: "2",
    title: "Refatorar Clean Arch para Feature Module",
    completed: true,
  },
  {
    id: "3",
    title: "Implementar testes unitários",
    completed: false,
  },
  {
    id: "4",
    title: "Revisar código do projeto",
    completed: true,
  },
];

/**
 * Change state of completed task
 * @param id - Task ID
 * @returns Updated Task or undefined if not found
 */
export function toggleTaskMemory(id: string): Task | undefined {
  const taskIndex = tasksMemory.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return undefined;
  }

  const task = tasksMemory[taskIndex];
  const updatedTask = { ...task, completed: !task.completed };

  tasksMemory[taskIndex] = updatedTask;

  return updatedTask;
}
