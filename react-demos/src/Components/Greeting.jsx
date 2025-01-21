import React from 'react'

const Greeting = () => {
    const name = "John";
    const date = new Date();
  return (
    <div>
      <h1>Element that dynamically displays a greeting WelcomeMessage to {name}</h1>
      <p>Element that dynamically displays the current date: {date.getDate()}</p>
    </div>
  )
}

export default Greeting
