import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await resp.json();
            setPosts(data);
        };
        fetchData();
    }, []);
  return (
    <div>
        <section>
            <h1>First Post Title: </h1>
            {posts.length > 0 ? <h2> {posts[0].title}</h2> : <p> Loading...</p>}
        </section>   
    </div>
  );
};

export default FetchData