import React from 'react'

const ButtonTest = () => {
  const HandleClick = () => console.log(Math.round(Math.random() * 10));
  return (
    <div>
      <button onClick={HandleClick} style={{backgroundColor: 'blueviolet'}}>Click</button>
    </div>
  );
};

export default ButtonTest