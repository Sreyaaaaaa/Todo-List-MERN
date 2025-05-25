import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <input
          type="text"
          placeholder="Add todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            minWidth: '250px',
            border: '1px solid #555',
            backgroundColor: '#1e1e1e',
            color: 'white',
            borderRadius: '4px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
