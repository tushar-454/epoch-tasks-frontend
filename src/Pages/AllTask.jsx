import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';

const AllTask = () => {
  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='All Task' />
      <div className='flex flex-col lg:flex-row justify-center gap-5'>
        <div className='w-full lg:1/3 border border-froly-500 dark:border-sun-200 p-6 rounded dark:bg-gray-800'>
          <h1 className='text-3xl font-extrabold underline underline-offset-8 dark:text-slate-50'>
            TODO
          </h1>
          {/* todo contain  */}
          <div className='todoContainer mt-5'>
            {/* single one todo item  */}
            <div
              className='w-full border border-gray-400 dark:border-gray-200 p-2 rounded'
              draggable='true'
            >
              <h1 className='font-bold dark:text-slate-200'>
                I go to outside for workout
              </h1>
              <p className='dark:text-slate-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tenetur alias, tempore eum necessitatibus ullam.
              </p>
              <p className='my-2 dark:text-slate-400'>25/12/2023</p>
              <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>
                Low
              </p>
              <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
                Medium
              </p>
              <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>
                High
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:1/3 border border-froly-500 dark:border-sun-200 p-6 rounded dark:bg-gray-800'>
          <h1 className='text-3xl font-extrabold underline underline-offset-8 dark:text-slate-50'>
            On Going
          </h1>
          {/* todo contain  */}
          <div className='todoContainer mt-5'>
            {/* single one todo item  */}
            <div
              className='w-full border border-gray-400 dark:border-gray-200 p-2 rounded'
              draggable='true'
            >
              <h1 className='font-bold dark:text-slate-200'>
                I go to outside for workout
              </h1>
              <p className='dark:text-slate-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tenetur alias, tempore eum necessitatibus ullam.
              </p>
              <p className='my-2 dark:text-slate-400'>25/12/2023</p>
              <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>
                Low
              </p>
              <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
                Medium
              </p>
              <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>
                High
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:1/3 border border-froly-500 dark:border-sun-200 p-6 rounded dark:bg-gray-800'>
          <h1 className='text-3xl font-extrabold underline underline-offset-8 dark:text-slate-50'>
            Completed
          </h1>
          {/* todo contain  */}
          <div className='todoContainer mt-5'>
            {/* single one todo item  */}
            <div
              className='w-full border border-gray-400 dark:border-gray-200 p-2 rounded'
              draggable='true'
            >
              <h1 className='font-bold dark:text-slate-200'>
                I go to outside for workout
              </h1>
              <p className='dark:text-slate-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tenetur alias, tempore eum necessitatibus ullam.
              </p>
              <p className='my-2 dark:text-slate-400'>25/12/2023</p>
              <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>
                Low
              </p>
              <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
                Medium
              </p>
              <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>
                High
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
