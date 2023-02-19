import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Detail from '../pages/Detail/Detail';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Favourites from '../pages/Favorites/Favorites';
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import ServerError from '../pages/ServerError/ServerError';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    //errorElement:,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/detail',
        element: <Detail />,
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
      {
        path: '/serverError',
        element: <ServerError />,
      },
      {
        path: '/pageNotFound',
        element: <PageNotFound />,
      },
      {
        path: '/errorPage',
        element: <ErrorPage />,
      },
    ],
  },
]);
