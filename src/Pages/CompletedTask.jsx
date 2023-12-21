import CompletedTaskCard from '../Components/CompletedTaskCard';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';

const CompletedTask = () => {
  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='Completed Task' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
        <CompletedTaskCard />
      </div>
    </div>
  );
};

export default CompletedTask;
