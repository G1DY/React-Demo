import React from 'react'

const ButtonTest = () => {
  const HandleClick = () => console.log('You clikced me');
  return (
    <div>
      <button onClick={HandleClick} style={{backgroundColor: 'blueviolet'}}>Click</button>
    </div>
  );
};

export default ButtonTest