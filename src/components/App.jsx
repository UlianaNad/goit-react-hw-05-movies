import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './pages/NotFound';
import { lazy } from 'react';


const HomePage = lazy(()=>import('./pages/Homepage/HomePage'));
const MoviePage = lazy(()=>import('./pages/MoviePage/MoviePage'));
const Reviews = lazy(()=>import('./pages/Reviews/Reviews'));
const Cast = lazy(()=>import('./pages/Cast/Cast'));
const SearchMovies = lazy(()=>import('./pages/SearchMovie/SearchMovies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
