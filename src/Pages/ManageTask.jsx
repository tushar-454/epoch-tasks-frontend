import { useQuery } from '@tanstack/react-query';
import ManageTaskCard from '../Components/ManageTaskCard';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';
import Toast from '../Utils/Toast/Toast';
const ManageTask = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: userTasks,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['userTask'],
    queryFn: async () => {
      const res = await axios.get(`/task/get/${user?.email}`);
      return res.data;
    },
  });
  const withoutCompletedTask =
    !isLoading && userTasks.filter((task) => task.status !== 'completed');
  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='Manage Task' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {isLoading ? (
          <span className='relative flex justify-center h-10 w-10'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-froly-400 dark:bg-sun-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-10 w-10 bg-froly-500 dark:bg-sun-500'></span>
          </span>
        ) : isError ? (
          <>{Toast('There was an error', 'error')}</>
        ) : !isLoading && withoutCompletedTask.length === 0 ? (
          <>
            <h1>No active task in your list.</h1>
          </>
        ) : (
          withoutCompletedTask?.map((userTask, index) => (
            <ManageTaskCard key={index} userTask={userTask} refetch={refetch} />
          ))
        )}
      </div>
    </div>
  );
};

export default ManageTask;
