import React, { useReducer, useState } from 'react'
import { counterReducer, initialstate } from './CounterReducer'

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialstate);
    const [inputvalue, setInputValue] = useState(0);

    const handleIncrement = () => dispatch({type: "increment"});
    const handleDecrement = () => dispatch({type: "decrement"});

    const handleincrementByAmount = () => {
        dispatch({type: "incrementByAmount", payload: Number(inputvalue)});
        setInputValue(0);
    }

    const handledecrementByAmount = () => {
        dispatch({type: "decrementByAmount", payload: Number(inputvalue)});
        setInputValue(0);
    }
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div>
            <input type="number" value={inputvalue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleincrementByAmount}>Add</button>
            <button onClick={handledecrementByAmount}>Subtract</button>
        </div>
    </div>
  );
};

export default Counter;