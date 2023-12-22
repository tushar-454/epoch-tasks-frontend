import ManageTaskCard from '../Components/ManageTaskCard';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';

const ManageTask = () => {
  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='Manage Task' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        <ManageTaskCard />
        <ManageTaskCard />
        <ManageTaskCard />
        <ManageTaskCard />
        <ManageTaskCard />
        <ManageTaskCard />
      </div>
    </div>
  );
};

export default ManageTask;
