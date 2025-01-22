import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setState] = useState(0);

    const Increment = () => setState(count+1);
    const Decrement = () => setState(count-1);
  return (
    <div>
        <h1>0</h1>
        <button onClick={Increment}></button>
        <button onClick={Decrement}></button>
    </div>
  );
};

export default Count