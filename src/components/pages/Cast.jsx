import useHttp from 'components/hooks/useHttp'
import { fetchCastByMovieId } from 'components/services/api'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Cast = () => {
    const {movieId} = useParams()
    const  [cast] = useHttp(fetchCastByMovieId, movieId)
    return (
        <CastWrapper>
          {cast?.slice(0,30).map((item) => (
            <div key={item.id}>
              <p>
                {item.name} - {item.character}
              </p>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name} width="100px"
              />
            </div>
          ))}
        </CastWrapper>
      );
}

export default Cast

export const CastWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;