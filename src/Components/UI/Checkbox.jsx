const Checkbox = ({ displayName, id, ...rest }) => {
  return (
    <div className='flex items-center'>
      <div className='flex'>
        <input
          {...rest}
          id={id}
          className='shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
        />
      </div>
      <div className='ms-3'>
        <label htmlFor={id} className='text-sm dark:text-white'>
          {displayName}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
