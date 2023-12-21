import { NavLink } from 'react-router-dom';

const DashboardNavItem = ({ setIsCollapse, navItem }) => {
  return (
    <NavLink
      onClick={() => setIsCollapse(false)}
      className={`whitespace-nowrap flex items-center p-4 gap-x-3 text-lg font-medium text-gray-500 transition-all hover:text-froly-600 hover:bg-froly-50 dark:hover:bg-slate-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-froly-500 ${({
        isActive,
      }) => (isActive ? 'activeDashboardItem' : undefined)}`}
      to={navItem.path}
    >
      {navItem.icon}
      {navItem.route}
    </NavLink>
  );
};

export default DashboardNavItem;
