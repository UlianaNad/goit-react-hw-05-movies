import React from 'react';
import ImageNull from '../../ImageNull';
import { StyledImage, StyledItem, StyledMovieName } from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <StyledItem>
      <StyledMovieName>{movie.original_title}</StyledMovieName>
      {movie.poster_path !== null ? (
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.tagline}
        />
      ) : (
        <ImageNull />
      )}
    </StyledItem>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};