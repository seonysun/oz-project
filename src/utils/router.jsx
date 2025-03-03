import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/Home/HomePage';
import ItemListPage from '../pages/ItemList/ItemListPage';
import NotFound from '../pages/NotFound';

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
