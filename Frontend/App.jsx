import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const API_URL = 'http://localhost:5000/api/todos';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async (text) => {
    const res = await axios.post(API_URL, { text });
    setTodos([res.data, ...todos]);
  };

  const toggleComplete = async (id, completed) => {
    const res = await axios.patch(`${API_URL}/${id}`, { completed });
    setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#282c34', // Optional: Background color for better visibility
      }}
    >
      <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '2.5rem', color: 'white' }}>
          My Todo List
        </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

