import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <>
        <div className='flex bg-white dark:bg-gray-800 min-h-screen'>
          <div className='w-[240px] hidden lg:block border-r p-1'>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <p className='w-full h-12 my-2 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
          </div>
          <div className='flex-grow p-4'>
            <p className='w-[340px] h-12 my-5 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto'></p>
            <div className='flex flex-col lg:flex-row gap-10 justify-between items-center'>
              <div className='w-full lg:w-1/3 h-40 bg-gray-300 dark:bg-gray-700 rounded-lg'></div>
              <div className='w-full lg:w-1/3 h-40 bg-gray-300 dark:bg-gray-700 rounded-lg'></div>
              <div className='w-full lg:w-1/3 h-40 bg-gray-300 dark:bg-gray-700 rounded-lg'></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} />;
  }
  return children;
};

export default PrivateRoute;
