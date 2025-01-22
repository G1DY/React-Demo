import { useState } from "react";
import React from 'react'

const CountNu = () => {
  const[count, setCount] = useState(0);
  function Increment() {
    setCount(count+1);
  }
  function Decrement() {
    setCount(count-1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
};

export default CountNu