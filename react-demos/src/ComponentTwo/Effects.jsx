import React, { useEffect, useState } from 'react'

const Effects = () => {
    const [value, setValue] = useState(0);
    useEffect(()=> {
        console.log("Call eseEffects");
        document.title = `Increment ${value}`;
    }, [value]);
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Click Me</button>
    </div>
  )
}

export default Effects