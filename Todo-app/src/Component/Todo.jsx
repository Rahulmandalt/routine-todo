import React, { useState } from "react";
import "./Toto.css"

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const submitChange = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  const handleRemove = (i) => {
    const newList = todo.filter((_, id) => i !== id);
    setTodo(newList);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">📝 My Todo List</h1>
      <div className="todo-input-section">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Add a new task"
          className="todo-input"
        />
        <button onClick={submitChange} className="todo-add-btn">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todo.map((item, i) => (
          <li key={i} className="todo-item">
            {item}
            <button onClick={() => handleRemove(i)} className="todo-delete-btn">
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
