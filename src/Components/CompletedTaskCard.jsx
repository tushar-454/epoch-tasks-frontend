const CompletedTaskCard = () => {
  return (
    <div className='p-2 bg-green-100 border-l-8 rounded-md border-green-500'>
      <h1 className='text-2xl font-bold'>Title</h1>
      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rem ad
        quaerat! Pariatur, eveniet explicabo?
      </p>
      <p className='my-4'>12/22/2023 - 12-25-2023</p>
      <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>Low</p>
      <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>Medium</p>
      <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>High</p>
    </div>
  );
};

export default CompletedTaskCard;
