import React from 'react'
import useFetch from './useFetch'

const UrlFetch = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/")
  return (
    <div>
        {data && data.map((todo) => {
            return (
                <ul key={todo.id}>
                <li>{todo.title}</li>
            </ul>
            );
        })}
    </div>
  )
}

export default UrlFetch