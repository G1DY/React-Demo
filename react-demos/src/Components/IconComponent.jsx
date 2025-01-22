import React from 'react'
import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
    const styles = {fontSize: '30px', color: 'gold'}
  return (
    <div style={styles}>
        <h1>React Icons</h1>
        <FaBeer />
    </div>
  )
}

export default IconComponent