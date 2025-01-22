import React from 'react'

const CopyTest = () => {
    const HandleCopy = () => 
        alert('stop stealing my content')
        console.log('Stop Stealing the content');
  return (
    <div>
        <p onCopy={HandleCopy} style={{color: 'green'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, asperiores odit aspernatur molestias repellat minus rem, aut odio, ullam ipsa necessitatibus modi totam corrupti hic accusamus omnis possimus tenetur animi!</p>
    </div>
  );
};

export default CopyTest