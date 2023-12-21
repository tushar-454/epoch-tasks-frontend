import { BsListTask } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GrTask } from 'react-icons/gr';
import { MdAddTask } from 'react-icons/md';
import { PiCaretRightFill } from 'react-icons/pi';
import DashboardNavItem from './DashboardNavItem';
const dashboardNavItems = [
  {
    route: 'All Task',
    path: 'all-task',
    icon: <BsListTask />,
  },
  {
    route: 'Add a Task',
    path: 'add-task',
    icon: <MdAddTask />,
  },
  {
    route: 'Completed Task',
    path: 'completed-task',
    icon: <GrTask />,
  },
  {
    route: 'Trash',
    path: 'trash',
    icon: <FaRegTrashAlt />,
  },
];
const AsideItems = ({ isCollapse, setIsCollapse }) => {
  return (
    <aside className='relative bg-slate-50 dark:bg-slate-800'>
      <span
        onClick={() => setIsCollapse(!isCollapse)}
        className={`block lg:hidden absolute -top-1 -right-8 cursor-pointer ${
          isCollapse ? 'rotate-180 !-right-4' : undefined
        }`}
      >
        <PiCaretRightFill className='text-5xl text-sun-950' />
      </span>
      <div className='min-h-screen border-r flex flex-col'>
        {dashboardNavItems.map((navItem, index) => (
          <DashboardNavItem
            key={index}
            navItem={navItem}
            setIsCollapse={setIsCollapse}
          />
        ))}
      </div>
    </aside>
  );
};

export default AsideItems;
