import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
    const [render, setRender] = useState()
    useEffect(() => {
        console.log("Rendered for the first time")
        setRender(render);
    }, []);
  return (
    <div>
        <h1>{render}</h1>
        <input type="text" value={render} placeholder='Render Data' />
    </div>
  )
}

export default BasicEffect