// import { useEffect } from "react";
import { getTasksAction, toggleTaskAction } from "../actions/task.actions";
import { TaskItem } from "../ui/task-item";
// import { useTaskStore } from "../hooks/use-task-store";

export async function TaskListWidget() {
  // use client example
  // const { tasks, load, toggle } = useTaskStore();

  // useEffect(() => {
  //   load();
  // }, []);

  const tasks = await getTasksAction();

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
          // onToggle={() => toggle(task.id)}
          onToggle={toggleTaskAction.bind(null, task.id)}
        />
      ))}
    </>
  );
}
