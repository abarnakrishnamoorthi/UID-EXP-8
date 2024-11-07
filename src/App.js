import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Add or update a task
  const addOrUpdateTask = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === null) {
        setTasks([...tasks, inputValue]); // Add a new task
      } else {
        const updatedTasks = tasks.map((task, i) =>
          i === editIndex ? inputValue : task
        );
        setTasks(updatedTasks); // Update the task
        setEditIndex(null);
      }
      setInputValue(''); // Clear the input field
    }
  };

  // Remove a task by index
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  // Edit a task by index
  const editTask = (index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h1>Task Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addOrUpdateTask}>
          {editIndex === null ? 'Add Task' : 'Update Task'}
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div className="actions">
              <button className="edit-btn" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => removeTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
