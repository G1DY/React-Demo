import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile((prevprofile) => ({
            ...prevprofile,
            [name]: value,
        }));
    };
  return (
    <div>
        <div>
            <h1>User Profile</h1>
        <label>
            Name:
            <input type="text" name="name" value={profile.name} placeholder='Add profile name' onChange={handleChange} />
        </label>
        </div>
        <div>
        <label>
            Age:
            <input type="number" value={profile.age} placeholder='Add profile name' onChange={handleChange} name='age' />
        </label>
        <h3>Profile Information</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        </div>  
    </div>
  );
};

export default Profile