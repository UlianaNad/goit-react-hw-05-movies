import useHttp from 'components/hooks/useHttp';
import { fetchCastByMovieId } from 'components/servises/api';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CastCard, CastWrapper, StyledImg } from './Cast.styled';


const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchCastByMovieId, movieId);
  return (
    <CastWrapper>
      {cast?.slice(0, 30).map(item => (
        <CastCard key={item.id}>
          <h4>
            {item.name}
          </h4>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
            width="100px"
          />
        </CastCard>
      ))}
    </CastWrapper>
  );
};

export default Cast;

