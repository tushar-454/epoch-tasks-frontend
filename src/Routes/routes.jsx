import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

export default routes;
