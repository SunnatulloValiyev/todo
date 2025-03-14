import React from "react";

function TodoList({ todos, removeTodo }) {
    return (
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between bg-gray-700 p-2 rounded-lg">
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="text-red-400 hover:text-red-600">
              ❌
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  