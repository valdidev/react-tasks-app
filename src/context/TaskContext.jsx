import { createContext } from "react";

// name of context
export const TaskContext = createContext();

// context component that encompasses all
export const TaskContextProvider = (props) => {

    let x = 20;

  return (
    <TaskContext.Provider value={x}>
        {props.children}
    </TaskContext.Provider>
  );
};
