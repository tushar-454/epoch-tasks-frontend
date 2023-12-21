import { useState } from 'react';
import { IoHomeOutline, IoMenuOutline } from 'react-icons/io5';
import { MdOutlineDashboard } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { SiKnowledgebase } from 'react-icons/si';
import { SlUserFemale } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import NavItem from '../Components/NavItem';
import logo from '../assets/icon/logo.webp';
import Container from './Container';

const navItems = [
  {
    route: 'Home',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    route: 'About',
    path: '/about',
    icon: <SiKnowledgebase />,
  },
  {
    route: 'Dashboard',
    path: '/dashboard',
    icon: <MdOutlineDashboard />,
  },
];

const Header = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700'>
      <Container>
        <nav
          className='relative max-w-7xl w-full mx-auto sm:flex sm:items-center sm:justify-between '
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <Link className='flex-none' to='/'>
              <img src={logo} className='w-16' />
            </Link>
            <div className='sm:hidden'>
              <button
                onClick={() => setNavShow(!navShow)}
                type='button'
                className='w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              >
                {navShow ? <RxCross2 /> : <IoMenuOutline />}
              </button>
            </div>
          </div>
          <div
            className={`w-full bg-white dark:bg-gray-800 absolute sm:relative overflow-hidden transition-all duration-300 basis-full grow sm:block origin-top scale-y-0 sm:scale-100 ${
              navShow ? 'scale-y-100' : undefined
            }`}
          >
            <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0'>
              {navItems.map((navIteminfo, index) => (
                <NavItem key={index} navItem={navIteminfo} />
              ))}

              <a
                className='flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500'
                href='#'
              >
                <SlUserFemale />
                Log in
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
