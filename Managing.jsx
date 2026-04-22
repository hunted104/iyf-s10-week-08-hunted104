import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false }
  ]);

  const [inputValue, setInputValue] = useState("");

  // Add item
  const addTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false }
    ]);

    setInputValue("");
  };

  // Toggle item
  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete item
  const deleteTodo = (id) => {
    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    );
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
        placeholder="Add a todo..."
      />

      <button onClick={addTodo}>Add</button>

      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                  marginRight: "10px"
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
