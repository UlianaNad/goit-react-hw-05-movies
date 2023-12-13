import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SearchMovies from './pages/SearchMovies';
import NotFound from './pages/NotFound';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import HomePage from './pages/HomePage'; // or the correct file name

import Movies from './pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SearchMovies />} />
          <Route path="movies" element={<HomePage />} />
          <Route path="movies/:movieId" element={<Movies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
