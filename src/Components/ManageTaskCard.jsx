import useAxios from '../Hook/useAxios';
import Toast from '../Utils/Toast/Toast';

const ManageTaskCard = ({ userTask, refetch }) => {
  const axios = useAxios();
  const { _id, title, description, deadline } = userTask;
  // handle transfar task in trash
  const handleTaskTrash = async (id) => {
    try {
      const res = await axios.patch(`/task/trash/${id}`, {
        trashStatus: true,
      });
      if (res.data.message === 'success') {
        Toast('Task is trash now !', 'info');
        refetch();
      }
    } catch (error) {
      Toast('There was an error !', 'error');
    }
  };
  return (
    <div className='flex flex-col p-2 bg-sun-50 border-l-8 rounded-md border-sun-500'>
      <h1 className='text-2xl font-bold'>
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
      <div className='flex gap-1'>
        <p className='p-1 px-2 rounded bg-blue-200 inline-block mr-3 cursor-pointer transition-all hover:bg-blue-300 active:bg-blue-400'>
          Update
        </p>
        <p
          onClick={() => handleTaskTrash(_id)}
          className='p-1 px-2 rounded bg-red-200 inline-block mr-3 cursor-pointer transition-all hover:bg-red-300 active:bg-red-400'
        >
          Trash
        </p>
      </div>
    </div>
  );
};

export default ManageTaskCard;
