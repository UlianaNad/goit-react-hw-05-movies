import { StyledLink } from 'components/NavBar';
import useHttp from 'components/hooks/useHttp';
import { fetchMovieById } from 'components/servises/api';
import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledButton } from './SearchMovies';
import styled from 'styled-components';

const Movie = () => {
  const { movieId } = useParams();
  const [movie] = useHttp(fetchMovieById, movieId);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <Wrapper>
      <WrapperMovie>
        <StyledImg
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.tagline}
        />
        <TextWrap>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
        </TextWrap>
      </WrapperMovie>
      <StyledButton onClick={handleGoBack}>Go back</StyledButton>
      <WrapRoutes>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </WrapRoutes>
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Movie;

export const Wrapper = styled.div`
  padding: 10px;
`;
export const WrapperMovie = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const StyledImg = styled.img`
  width: 300px;
  border-radius: 10px;
`;
export const TextWrap = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
export const WrapRoutes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: #9fe7db;
  margin-top: 10px;
  padding: 6px;
`;
