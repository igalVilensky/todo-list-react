import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";

import "./app.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState(null);
  const [textEdit, setTextEdit] = useState("");
  /*   const [alert, setAlert] = useState(false); */

  /* useEffect(() => {
    if (todo === "") {
      alert("Please enter some text");
    }
  }, [setTodo]); */

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
    if (todo === "") {
      alert("Please enter some text");
      /* const alertmsg = "Please enter some text";
      return (
        <div id="please">
          <h2>{alertmsg}</h2>
        </div>
      ); */
    } else {
      setTodos([...todos].concat(newTodo));
    }

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
      <div className="app-container">
        <div className="heading-wrapper">
          <h1>Todo App</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add your new todo"
          />

          <button
            /* onClick={() => {
              setTodo === "" ? alert("hi") : alert("Please enter something");
            }} */
            type="submit"
          >
            +
          </button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todos-container">
            {todoEdit === todo.id ? (
              <input
                className="edit-box"
                type="text"
                onChange={(e) => setTextEdit(e.target.value)}
                value={textEdit}
              ></input>
            ) : (
              <div className="todo-text">{todo.text}</div>
            )}

            <button className="del-btn" onClick={() => deleteTodo(todo.id)}>
              <AiFillDelete />
            </button>
            <label htmlFor="done"></label>
            <input
              name="done"
              id="done"
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />
            {todoEdit === todo.id ? (
              <button
                className="submit-edit-btn"
                onClick={() => editTodo(todo.id)}
              >
                <AiOutlineCheck />
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setTodoEdit(todo.id)}>
                <AiFillEdit />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
