import React, { useState } from "react";
import Button from "./Button";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Yangi reja..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
