import { createBrowserRouter } from 'react-router-dom';
import { Favorites, Home } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/favorites',
    Component: Favorites
  }
]);
