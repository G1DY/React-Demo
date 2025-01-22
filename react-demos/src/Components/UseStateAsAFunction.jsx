import React, { useState } from 'react'

const UseStateAsAFunction = () => {
    const [count, setCount] = useState(() => {
        const initialcount=10;
        return initialcount;
    });
    const Increment = () => {
        setCount((previouscount) => previouscount + 1)
    };
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default UseStateAsAFunction