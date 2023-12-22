import TrashTaskCard from '../Components/TrashTaskCard';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';

const Trash = () => {
  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='Trash' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        <TrashTaskCard />
        <TrashTaskCard />
        <TrashTaskCard />
        <TrashTaskCard />
        <TrashTaskCard />
        <TrashTaskCard />
      </div>
    </div>
  );
};

export default Trash;
