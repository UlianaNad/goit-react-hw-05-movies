import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies/:movieId" element={<Movies />} />
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
