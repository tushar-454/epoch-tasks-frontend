import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { CiDark } from 'react-icons/ci';
import { IoHomeOutline, IoMenuOutline } from 'react-icons/io5';
import { MdDarkMode, MdOutlineDashboard } from 'react-icons/md';
import { PiSignOutBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { SiKnowledgebase } from 'react-icons/si';
import { SlUserFemale } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import NavItem from '../Components/NavItem';
import useAuth from '../Hook/useAuth';
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
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme'));
  const { user, logOutAccount, forceUP } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    logOutAccount();
  };
  useEffect(() => {
    if (
      darkMode === null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList = 'dark';
      return;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList = 'light';
    }
    if (darkMode === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList = 'light';
      return;
    }
    if (darkMode === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList = 'dark';
      return;
    }
  }, [darkMode]);
  return (
    <header className='flex flex-wrap sm:flex-nowrap topPriority w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 transition-all'>
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
            className={`w-full !bg-white dark:!bg-gray-800 absolute z-50 sm:relative transition-all duration-300 basis-full grow sm:block origin-top scale-y-0 sm:scale-100 px-4 pb-4 sm:px-0 sm:pb-0 ${
              navShow ? 'scale-y-100' : undefined
            }`}
          >
            <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0'>
              {navItems.map((navIteminfo, index) => (
                <NavItem
                  key={index}
                  navItem={navIteminfo}
                  setNavShow={setNavShow}
                />
              ))}
              {user ? (
                <>
                  {' '}
                  <p
                    onClick={() => setDropdown(!dropdown)}
                    className='flex items-center gap-x-2 font-medium text-gray-500 transition-all cursor-pointer hover:text-froly-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-froly-600'
                  >
                    <img
                      src={user?.photoURL || forceUP.photo}
                      alt='user'
                      className='w-12 h-12 object-cover rounded-full'
                    />
                    {user?.displayName || forceUP.name}
                  </p>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    className={`z-50 absolute top-12 right-0 transition origin-top-right ${
                      dropdown ? 'scale-100' : 'scale-0'
                    } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul className='py-2' aria-labelledby='user-menu-button'>
                      <li className='cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                        <Link
                          onClick={() => {
                            setNavShow(false);
                            setDropdown(false);
                          }}
                          to={'profile'}
                          className='flex gap-2 items-center'
                        >
                          Profile <CgProfile />
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setDarkMode(
                            darkMode === null
                              ? 'light'
                              : darkMode === 'light'
                              ? 'dark'
                              : 'light'
                          );
                          setDropdown(!dropdown);
                          setNavShow(false);
                        }}
                        className='flex gap-2 items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        {darkMode === 'dark' ? (
                          <span className='flex gap-2 items-center'>
                            Lightmode <CiDark />
                          </span>
                        ) : (
                          <span className='flex gap-2 items-center'>
                            Darkmode <MdDarkMode />
                          </span>
                        )}
                      </li>
                      <li
                        onClick={() => {
                          handleLogout();
                          setDropdown(false);
                          setNavShow(false);
                        }}
                        className='flex gap-2 items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Sign out <PiSignOutBold />
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  className='flex items-center gap-x-2 font-medium text-gray-500 transition-all hover:text-froly-600 sm:border-s sm:border-e sm:border-gray-300 sm:my-6 sm:ps-6 sm:pe-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-froly-600'
                  to='/login'
                >
                  <SlUserFemale />
                  Log in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
