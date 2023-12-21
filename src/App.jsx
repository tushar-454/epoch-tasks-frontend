import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import routes from './Routes/routes';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
