import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineDashboard } from 'react-icons/md';
import { PiCaretRightFill } from 'react-icons/pi';
import { SiKnowledgebase } from 'react-icons/si';
import DashboardNavItem from './DashboardNavItem';
const dashboardNavItems = [
  {
    route: 'All Task',
    path: '/all-task',
    icon: <IoHomeOutline />,
  },
  {
    route: 'Add a Task',
    path: '/add-task',
    icon: <SiKnowledgebase />,
  },
  {
    route: 'Completed Task',
    path: '/completed-task',
    icon: <MdOutlineDashboard />,
  },
  {
    route: 'Trash',
    path: '/trash',
    icon: <IoHomeOutline />,
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
          <DashboardNavItem key={index} navItem={navItem} />
        ))}
      </div>
    </aside>
  );
};

export default AsideItems;
