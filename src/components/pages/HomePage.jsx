import useHttp from 'components/hooks/useHttp';
import { fetchTopMovies } from 'components/services/api';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movies = () => {
  const [movies] = useHttp(fetchTopMovies);

  return (
    <div>
      <StyledUl>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              {movie.original_title}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.tagline}
                width="200px"
              />
            </Link>
          </li>
        ))}
      </StyledUl>
    </div>
  );
};

export default Movies;
export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;


