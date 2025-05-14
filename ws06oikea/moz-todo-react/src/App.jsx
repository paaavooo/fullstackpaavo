import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); 
  const [taskName, setTaskName] = useState(""); 
  const [editingId, setEditingId] = useState(null); 
  const [editingValue, setEditingValue] = useState(""); 

  // Function to handle adding a task
  function addTask() {
    if (taskName.trim() === "") return; 
    const newTask = { id: Date.now(), name: taskName, completed: false }; 
    setTasks([...tasks, newTask]); 
    setTaskName(""); 
  }

  // Function to handle deleting a task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id)); 
  }

  // Function to start editing a task
  function startEditing(id, currentName) {
    setEditingId(id); 
    setEditingValue(currentName); 
  }

  // Function to handle changes in the edit input
  function handleEditChange(e) {
    setEditingValue(e.target.value); 
  }

  // Function to save the edited task
  function saveEdit(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: editingValue } : task
      )
    ); 
    setEditingId(null); 
    setEditingValue(""); 
  }

  
  function cancelEdit() {
    setEditingId(null); 
    setEditingValue(""); 
  }

  // Function to toggle task completion
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div id="root">
      <h1>Simple Todo App</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingValue}
                  onChange={handleEditChange} 
                />
                <button onClick={() => saveEdit(task.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </span>
                <button onClick={() => startEditing(task.id, task.name)}>
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
