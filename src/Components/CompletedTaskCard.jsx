const CompletedTaskCard = ({ completedTask }) => {
  const { title, description, deadline, priroty } = completedTask;
  return (
    <div className='flex flex-col p-2 bg-green-100 border-l-8 rounded-md border-green-500'>
      <h1 className='text-2xl font-bold'>
        {' '}
        {title.length > 23 ? `${title.slice(0, 22)}...` : title}
      </h1>
      <p className='text-xl flex-grow'>
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <p className='my-4'>
        <b>Deadline:-</b> {deadline}
      </p>
      <div>
        {priroty === 'low' && (
          <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>Low</p>
        )}
        {priroty === 'medium' && (
          <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
            Medium
          </p>
        )}
        {priroty === 'high' && (
          <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>High</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTaskCard;
