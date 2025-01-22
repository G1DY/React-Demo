import React from 'react'

const GreetingTernary = (props) => {
  return props.timeofday === "morning" ? (<h1>Goodmorning!</h1>) : (<h1>Goodafternoon!</h1>);
};

export default GreetingTernary