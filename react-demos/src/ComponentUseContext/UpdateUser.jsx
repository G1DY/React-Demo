import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

import React from 'react'

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newname, setNewName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newname.trim()) {
            updateUser(newname);
            setNewName("");
        };
    };
  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newname} onChange={(e) => setNewName(e.target.value)} placeholder="Enter NewName"/>
            <button type="NewName">Update</button>
        </form>
    </div>
  );
};

export default UpdateUser