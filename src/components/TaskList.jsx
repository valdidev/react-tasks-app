import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
  
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <h1>No hay tareas pendientes</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
};
