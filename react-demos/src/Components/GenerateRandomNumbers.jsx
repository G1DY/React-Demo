import React from 'react'
import { useState } from 'react'

const GenerateRandomNumbers = () => {
    const [randomnumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100));
    const Increment = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newNumber)
    }
  return (
    <div>
        <h1>{randomnumber}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default GenerateRandomNumbers