import React from 'react'
import { useState } from 'react'

const MovieArray = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "spiderman", rating: 7 },
        { id: 1, title: "spiderman", rating: 6 },
    ]);
    const ChangeTitle = () => setMovies(movies.map((m) => (m.id === 1 ? {...movies, title: "John Wick"}  : m)));
  return (
    <div>
        {movies.map(m => ( <ul key={Math.random()}>
            <li>{m.title}</li>
        </ul>))}
        <button onClick={ChangeTitle}>Change title</button>
    </div>
  );
};

export default MovieArray