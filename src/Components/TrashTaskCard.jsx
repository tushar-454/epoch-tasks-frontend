const TrashTaskCard = () => {
  return (
    <div className='p-2 bg-froly-50 border-l-8 rounded-md border-red-500'>
      <h1 className='text-2xl font-bold'>Title</h1>
      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rem ad
        quaerat! Pariatur, eveniet explicabo?
      </p>
      <p className='my-4'>12/22/2023 - 12-25-2023</p>
      <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3 cursor-pointer transition-all hover:bg-green-300 active:bg-green-400'>
        Restore
      </p>
      <p className='p-1 px-2 rounded bg-red-200 inline-block mr-3 cursor-pointer transition-all hover:bg-red-300 active:bg-red-400'>
        Delete
      </p>
    </div>
  );
};

export default TrashTaskCard;
