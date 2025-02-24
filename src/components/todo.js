import React, { useState } from "react";

const Todo = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input value for a new task
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask(""); // Clear the input field
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-slate-300 p-4 shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-3 font--1 text-center font-leckerli">
        My Tasks
      </h2>

      {/* Input field for adding a new task */}
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border-gray-300 rounded-md focus:outline-none focus:border-zinc text-md "
        />
        <button
          onClick={addTask}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-md font-leckerli"
        >
          Add
        </button>
      </div>

      {/* Display the list of tasks */}
      <ul className="space-y-1">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-1 bg-gray-50 rounded-md font-leckerli"
          >
            <span className="text-gray-700 text-md">{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm font-leckerli"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
