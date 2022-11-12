import { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    // clean inputs
    setTitle('')
    setDescription('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="escribe tu tarea..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="descripción de la tarea..."
        onChange={(e) => setDescription(e.target.value)}
        style={{resize: 'none'}}
        value={description}
      />
      <button>Guardar</button>
    </form>
  );
};
