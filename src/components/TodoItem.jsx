import Button from "./Button";

function TodoItem({ todo, removeTodo }) {
  return (
    <div className="flex items-center justify-between bg-gray-700 p-2 rounded-md mb-2">
      <span>{todo.text}</span>
      <Button onClick={() => removeTodo(todo.id)} variant="danger">X</Button>
    </div>
  );
}

export default TodoItem;
    