import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [taskInput, setTaskInput] = useState(""); // State for input

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>Todo</h1>
      </div>

      <div className="addTask">
        <input
          type="text"
          value={taskInput}
          placeholder="Add a task..."
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => removeTask(index)} className="remove-task">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
