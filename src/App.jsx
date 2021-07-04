import React, { useEffect, useState } from "react";

import "./app.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState(null);
  const [textEdit, setTextEdit] = useState("");

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const dataToJson = JSON.stringify(todos);
    localStorage.setItem("todos", dataToJson);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = textEdit;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEdit(null);
    setTextEdit("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-container">
          {todoEdit === todo.id ? (
            <input
              type="text"
              onChange={(e) => setTextEdit(e.target.value)}
              value={textEdit}
            ></input>
          ) : (
            <div className="todo-text">{todo.text}</div>
          )}

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <input
            type="checkbox"
            onChange={() => toggleComplete(todo.id)}
            checked={todo.completed}
          />
          {todoEdit === todo.id ? (
            <button
              className="submit-edit-btn"
              onClick={() => editTodo(todo.id)}
            >
              Submit Edit
            </button>
          ) : (
            <button className="edit-btn" onClick={() => setTodoEdit(todo.id)}>
              Edit Todo
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
