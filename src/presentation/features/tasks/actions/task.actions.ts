"use server";

import { revalidatePath } from "next/cache";

import { composeTaskUseCases } from "@/src/composition/task/tasks.composition.ts";

export async function getTasksAction() {
  const { getAllTasks } = composeTaskUseCases();
  return getAllTasks.execute();
}

export async function toggleTaskAction(id: string) {
  const { toggleTask } = composeTaskUseCases();
  await toggleTask.execute(id);

  revalidatePath("/tasks");
}
