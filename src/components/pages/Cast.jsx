import useHttp from 'components/hooks/useHttp';
import { fetchCastByMovieId } from 'components/servises/api';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchCastByMovieId, movieId);
  return (
    <CastWrapper>
      {cast?.slice(0, 30).map(item => (
        <CastCard key={item.id}>
          <h4>
            {item.name}
            {/* {item.character} */}
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

export const CastWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 16px;
`;
export const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const StyledImg = styled.img`
  border-radius: 5px;
`;
