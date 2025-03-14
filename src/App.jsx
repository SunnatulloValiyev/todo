import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const getStoredTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(getStoredTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (task.trim() === "") return;
    const newTodo = { id: Date.now(), text: task };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Yangi rejalar</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
