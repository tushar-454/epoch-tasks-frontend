import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Root from '../Layout/Root';
import AddTask from '../Pages/AddTask';
import AllTask from '../Pages/AllTask';
import CompletedTask from '../Pages/CompletedTask';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ManageTask from '../Pages/ManageTask';
import Profile from '../Pages/Profile';
import Signup from '../Pages/SIgnup';
import Trash from '../Pages/Trash';
import Error from './Error';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <AllTask />,
          },
          {
            path: 'all-task',
            element: <AllTask />,
          },
          {
            path: 'add-task',
            element: <AddTask />,
          },
          {
            path: 'manage-task',
            element: <ManageTask />,
          },
          {
            path: 'completed-task',
            element: <CompletedTask />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
]);

export default routes;
