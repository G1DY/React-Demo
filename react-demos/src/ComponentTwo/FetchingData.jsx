import React, { useEffect, useState } from 'react'

const FetchingData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/posts");
            const data = await response.json();
            if (data && data.length) setData(data);
        }
        getData();
    }, [data])
  return (
    <div>
        {data.map((todo) => (
            <section key={todo.id}>
                <ul >
                    <li>
                        Title: {todo.title}
                    </li>
                    <li>
                        Body : {todo.body}
                    </li>
                </ul>
            </section>  
        ))}
    </div>
  );
};

export default FetchingData