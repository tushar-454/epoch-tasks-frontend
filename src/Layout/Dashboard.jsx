import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AsideItems from '../Components/AsideItems';

const Dashboard = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <section>
      <div className='flex relative'>
        <div
          className={`w-[240px] absolute ${
            isCollapse ? 'left-0' : '-left-60'
          } lg:relative lg:left-0 transition-all`}
        >
          <AsideItems isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </div>
        <div className='flex-grow p-8 bg-white min-h-screen dark:bg-slate-700'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
