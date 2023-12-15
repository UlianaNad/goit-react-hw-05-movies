import MovieCard from 'components/MovieCard';
import useHttp from 'components/hooks/useHttp';
import { fetchTopMovies } from 'components/servises/api';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Movies = () => {
  const [movies] = useHttp(fetchTopMovies);

  const location = useLocation()
  return (
    <div>
      <h1>Trending today</h1>
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

export const StyledUl = styled.ul`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;
export const StyledItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px;
  border-radius: 10px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 250px;
  width: 180px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
export const StyledMovieName = styled.p`
  text-align: center;
  color: teal;
  font-weight: 600;
  font-size: 20px;
  margin: 5px;
`;
