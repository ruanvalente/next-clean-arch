"use server";

import { revalidatePath } from "next/cache";

import { tasksMemory, toggleTaskMemory } from "../datasrouce/task.memory";
// import { getTasksHttp, toggleTaskHttp } from "../datasrouce/tasks.http";

import { Task } from "../types/task.type";

// const isDev = process.env.NODE_ENV === "development";

export async function getTasksAction(): Promise<Array<Task>> {
  // if (isDev) {
  //   return tasksMemory;
  // }

  // return getTasksHttp();

  return tasksMemory
}

export async function toggleTaskAction(id: string): Promise<void> {
    toggleTaskMemory(id);
    revalidatePath("/tasks");
    return;

  // await toggleTaskHttp(id);
  // revalidatePath("/tasks");
}
