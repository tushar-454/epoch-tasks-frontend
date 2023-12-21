const DashBoardNavItemTitle = ({ displayName = 'Display Name' }) => {
  return (
    <div className='mb-10'>
      <h1 className='text-center text-5xl font-black bg-gradient-to-tr from-sun-500 to-froly-500 bg-clip-text text-transparent text-stroke'>
        {displayName}
      </h1>
    </div>
  );
};

export default DashBoardNavItemTitle;
