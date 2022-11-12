import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import { tasks as data } from "./data/task";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => setTasks(data), []);

  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(id) {
    let remainTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainTasks);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default App;
