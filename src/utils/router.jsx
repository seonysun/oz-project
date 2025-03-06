import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const ItemListPage = lazy(() => import('../pages/ItemList/ItemListPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/list/:category/*',
        element: <ItemListPage />,
      },
    ],
  },
]);
