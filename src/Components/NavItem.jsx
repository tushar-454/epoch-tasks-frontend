import { Link } from 'react-router-dom';

const NavItem = ({ navItem }) => {
  return (
    <Link
      className='flex items-center gap-x-2 font-medium text-gray-500 transition-all hover:text-froly-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-froly-500'
      to={navItem.path}
    >
      {navItem.icon}
      {navItem.route}
    </Link>
  );
};

export default NavItem;
