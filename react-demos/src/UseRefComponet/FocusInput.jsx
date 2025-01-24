import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null);
    const focusinput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='click the button to focus'/>
        <button onClick={focusinput}>Focus Input</button>
    </div>
  )
}

export default FocusInput