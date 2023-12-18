import MovieCard from 'components/pages/MovieCard/MovieCard';
import useHttp from 'components/hooks/useHttp';
import { fetchTopMovies } from 'components/servises/api';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledH1, StyledUl } from './Homepage.styled';


const Movies = () => {
  const [movies] = useHttp(fetchTopMovies);

  const location = useLocation()
  return (
    <div>
      <StyledH1>Trending today</StyledH1>
      <StyledUl>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link state={{from:location}} to={`movies/${movie.id.toString()}`}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </StyledUl>
    </div>
  );
};

export default Movies;


