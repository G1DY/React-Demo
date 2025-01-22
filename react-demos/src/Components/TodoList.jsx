import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputvalue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputvalue.trim() !== "") {
            setTodos([...todos, inputvalue]);
            setInputValue("");
        };
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputvalue} placeholder='Add a todo' onChange={(e) => setInputValue(e.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <ul key={index}>{todo}</ul>
            ))}
        </ul>
    </div>
  )
}

export default TodoList