import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading && pathname === '/profile') {
    return (
      <>
        <div className='flex flex-col gap-1 items-center py-10 min-h-screen bg-white dark:bg-gray-700'>
          <div>
            <p className='w-32 h-32 object-cover border-2 border-transparent ring-4 ring-gray-300 dark:bg-gray-600 rounded-full mb-5'></p>
          </div>
          <p className='w-[200px] h-10 bg-gray-300 dark:bg-gray-600 rounded-full'></p>
          <p className='w-[260px] h-5 bg-gray-300 dark:bg-gray-600 rounded-full'></p>
          <p className='w-[290px] h-5 bg-gray-300 dark:bg-gray-600 rounded-full'></p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mt-5'>
            <div>
              <button className='w-[169px] h-[46px] py-3 px-4 border-transparent rounded-lg bg-gray-300 dark:bg-gray-600'></button>
            </div>
            <div>
              <button className='w-[169px] h-[46px] py-3 px-4 border-transparent rounded-lg bg-gray-300 dark:bg-gray-600'></button>
            </div>
            <div>
              <button className='w-[169px] h-[46px] py-3 px-4 border-transparent rounded-lg bg-gray-300 dark:bg-gray-600'></button>
            </div>
          </div>
        </div>
      </>
    );
  }
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
    return <Navigate to={'/'} />;
  }
  return children;
};

export default PrivateRoute;
