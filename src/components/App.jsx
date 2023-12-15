import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
//import SearchMovies from './pages/SearchMovies';
import NotFound from './pages/NotFound';
//import Cast from './pages/Cast';
//import Reviews from './pages/Reviews';
//import HomePage from './pages/HomePage'; 
//import MoviePage from './pages/MoviePage';
import { lazy } from 'react';


const HomePage = lazy(()=>import('./pages/HomePage'));
const MoviePage = lazy(()=>import('./pages/MoviePage'));
const Reviews = lazy(()=>import('./pages/Reviews'));
const Cast = lazy(()=>import('./pages/Cast'));
const SearchMovies = lazy(()=>import('./pages/SearchMovies'));

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
