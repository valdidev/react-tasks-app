import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

// name of context
export const TaskContext = createContext();

// context component that encompasses all
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => setTasks(data), []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
