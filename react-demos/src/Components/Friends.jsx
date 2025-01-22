import React from 'react'
import { useState } from 'react'

const Friends = () => {
    const [friends, setFriends] = useState(['Dave', 'Dan', 'Kim', 'Ken', 'Nyamor']);
  return (
    <div>
        <ul>
            {friends.map((friend, index)=>( 
            <li key={index}>{friend}</li>))}
        </ul>
    </div>
  );
};

export default Friends