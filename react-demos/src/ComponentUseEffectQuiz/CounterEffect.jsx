import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState([]);

    useEffect(() => {
        if (count > 0) {
            console.log("counting numbers > 0");
            document.title = `Increment ${count}`;
        }
        document.title = `Decrement ${count}`;
        setCount(count);
    }, [count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CounterEffect