type TaskItemProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
};

export function TaskItem({ title, completed, onToggle }: TaskItemProps) {
  return (
    <label>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      {title}
    </label>
  );
}
