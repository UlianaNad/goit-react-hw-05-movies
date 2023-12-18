import MovieCard from 'components/pages/MovieCard/MovieCard';
import useHttp from 'components/hooks/useHttp';
import { fetchMovieBySearch } from 'components/servises/api';
import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { StyledButton, StyledInput, StyledUl, WrapSearch } from './SearchMovie.styled.';

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

