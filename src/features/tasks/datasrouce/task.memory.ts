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

export function toggleTaskMemory(id: string) {
  tasksMemory = tasksMemory.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}
