import { StyledLink } from 'components/NavBar';
import useHttp from 'components/hooks/useHttp';
import { fetchMovieById } from 'components/services/api';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';


const Movie = () => {
  const { movieId } = useParams();
  const [movie] = useHttp(fetchMovieById, movieId);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.tagline}
      />
      <p>{movie.original_title}</p>
      <p>{movie.overview}</p>

      <div>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Movie;
