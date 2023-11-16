import { fetchTopMovies } from 'components/servises/api';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Movies = () =>{
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchTopMovies().then((data) => setMovies(data))
    },[])
  return (
    <div>
      <ul>
      {movies.map(movie => (
        <li key={movie.id}>
            <Link to={movie.id.toString()} >
            {movie.original_title} 
            {/* <img src={movie.poster_path} alt={movie.title} /> */}
        </Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Movies