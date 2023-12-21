const Container = ({ children }) => {
  return (
    <div className='w-full md:w-11/12 lg:w-4/5 xl:max-w-7xl mx-auto px-4 lg:px-0'>
      {children}
    </div>
  );
};

export default Container;
