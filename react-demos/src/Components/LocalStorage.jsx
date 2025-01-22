import React, { useEffect } from 'react'
import { useState } from 'react';

const LocalStorage = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : "";
    });
    const handleChange = (event) => {
        setName(event.target.value)
    };
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    })
    const clearName = () => setName("");
  return (
    <div>
        <h1>SavedName: {name}</h1>
        <input type="text" value={name} placeholder='Enter your name' onChange={handleChange} />
        <button onClick={clearName}>clearName</button>
    </div>
  )
}

export default LocalStorage