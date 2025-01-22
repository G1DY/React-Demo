import React from 'react'
import { useState } from 'react'

const ChangeMovieRating = () => {
    const [movie, setMovie] = useState({
        title: 'squidGame',
        rating: 10,
    });
    const ChangeRating = () => {
        const copyMovie = {
            ...movie,
            rating: 7,
        };
        setMovie(copyMovie);
    };
  return (
    <div>
        <h1>Title: {movie.title}</h1>
        <h1>Rating: {movie.rating}</h1>
        <button onClick={ChangeRating}> ChangeRating</button>
    </div>
  )
}

export default ChangeMovieRating