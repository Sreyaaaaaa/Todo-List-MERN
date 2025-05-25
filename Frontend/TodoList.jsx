import React from 'react';

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo._id} style={{ marginBottom: 10 }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo._id, !todo.completed)}
          />
          <span style={{ marginLeft: 10, textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo._id)}
            style={{ marginLeft: 20, color: 'red' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
