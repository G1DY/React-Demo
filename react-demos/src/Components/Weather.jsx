import React from 'react'

const Weather = () => {
  let temp = 15;
  if (temp < 15) {
    return <h1>its cold outside!</h1>
  } else if (temp >= 15 && temp <= 25) {
    return <h1>its nice outside</h1>
  } else if (temp > 25) {
    return <h1>Its hot outside</h1>
  }
};

export default Weather