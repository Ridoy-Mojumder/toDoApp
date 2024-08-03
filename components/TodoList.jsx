"use client";

import React, { useState } from 'react';

// The TodoItem component displays individual tasks
const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <li className={`flex items-center justify-between p-2 mb-2 bg-white rounded shadow-sm ${task.completed ? 'line-through' : ''}`}>
      <span>{task.text}</span>
      <div className="flex space-x-2">
        <button
          onClick={onComplete}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

// The TodoList component contains the logic for managing tasks
const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = () => {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    setTasks([...tasks, { text: taskText, completed: false }]);
    taskInput.value = '';
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          id="new-task"
          placeholder="Add a new task"
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul id="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onComplete={() => toggleComplete(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
