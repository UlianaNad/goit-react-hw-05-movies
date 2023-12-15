import MovieCard from 'components/MovieCard';
import useHttp from 'components/hooks/useHttp';
import { fetchMovieBySearch } from 'components/servises/api';
import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function SearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('')

  const query = searchParams.get('query') || '';

  const [movies] = useHttp(fetchMovieBySearch, query);

  const location = useLocation()

  const filteredMovies = movies?.filter(movie =>
    movie.original_title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSetSearchQuery = () =>{
    setSearchParams(value ? {query: value} : {})
  }
  return (
    <div>
      <WrapSearch>
        <StyledInput
          value={value}
          onChange={e =>
            setValue(e.target.value)
          }
          type="text"
          placeholder="Enter movie name"
        />
        <StyledButton onClick={handleSetSearchQuery}>Search</StyledButton>
      </WrapSearch>
      <StyledUl>
        {filteredMovies?.map(movie => (
          <li key={movie.id}>
            <Link state={{from:location}} to={movie.id.toString()}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </StyledUl>
    </div>
  );
}

export default SearchMovie;

export const StyledUl = styled.ul`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const StyledInput = styled.input`
  width: 250px;
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(225, 225, 225);
    padding: 8px 10px;
    outline: none;
    color: rgb(87, 75, 65);
    display: block;
    border-radius: 5px;

  &focus,
  &:hover {
    border-color: rgba(0, 161, 82, 0.5);
    box-shadow: 0 0 5px 1px #006363;
  }
`;
export const StyledButton = styled.button`
  display: inline-block;
  padding: 9px 20px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  border: 0;
  background-color: #008888;
  width: 150px;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: #006363;
  }
  @media (max-width: 425px) {
    min-width: 47%;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 0;
  }
`;
export const WrapSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
`;