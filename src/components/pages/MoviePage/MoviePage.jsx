
import useHttp from 'components/hooks/useHttp';
import { fetchMovieById } from 'components/servises/api';
import React, { Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledImg, TextWrap, WrapRoutes, Wrapper, WrapperMovie } from './Moviepage.styled';
import { StyledButton } from '../SearchMovie/SearchMovie.styled.';
import { StyledLink } from 'components/NavBar/NavBar.styled';

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
        <StyledLink  state={location.state} to="cast">Cast</StyledLink>
        <StyledLink  state={location.state} to="reviews">Reviews</StyledLink>
      </WrapRoutes>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Movie;

