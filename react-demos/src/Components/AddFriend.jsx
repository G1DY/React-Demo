import React from 'react'
import { useState } from 'react'

const AddFriend = () => {
    const [friend, setFriend] = useState(['Gideon', 'John']);
    const AddFriend = () => setFriend([...friend, 'job']);
    const RemoveFriend = () => setFriend(friend.filter((f) => f !== 'John'));
    const UpdateFriend = () => setFriend(friend.map(f => f === "Gideon" ? 'Gideon Sitienei' : f));
  return (
    <div>
        {friend.map((f)=> (
            <ul key={Math.random()}>
                <li>{f}</li>
            </ul>
        ))}
        <button onClick={AddFriend}>AddFriend</button>
        <button onClick={RemoveFriend}>RemoveFriend</button>
        <button onClick={UpdateFriend}>Update</button>
    </div>
  );
};

export default AddFriend