import React from 'react'

const MouseTest = () => {
    function MouseHandler() {
        alert('Mouse move event fired');
        console.log('Mouse Move event fired');
    }
  return (
    <div>
        <p onMouseMove={MouseHandler} style={{color: 'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo similique, numquam ab, nesciunt debitis, voluptate architecto dolor sint vitae veritatis incidunt. Voluptas, nostrum. Consequuntur laudantium animi quidem repellat dolore?</p>
    </div>
  )
}

export default MouseTest