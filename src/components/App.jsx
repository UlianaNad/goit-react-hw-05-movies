import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SearchMovies from './pages/SearchMovies';
import NotFound from './pages/NotFound';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import HomePage from './pages/HomePage'; 

import MoviePage from './pages/MoviePage';


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
