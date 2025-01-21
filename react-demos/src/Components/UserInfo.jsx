import React from 'react'

const UserInfo = () => {
    const UserList = [
        {
            username: "Dan",
            email: "test1@gmail.com",
            location: "iceland",
        },
        {
            username: "Adan",
            email: "test2@gmail.com",
            location: "Greenland",
        },
        {
            username: "Adani",
            email: "test3@gmail.com",
            location: "Istanbul",
        }
    ];
  return (
    <div>
        <main>
            { UserList.map(({username, email, location}) => (
                <ul key={Math.random()}>
                    <li>
                        {username}
                    </li>
                    <li>
                        {email}
                    </li>
                    <li>
                        {location}
                    </li>
                </ul>
            ))}
        </main>
    </div>
  );
};

export default UserInfo
