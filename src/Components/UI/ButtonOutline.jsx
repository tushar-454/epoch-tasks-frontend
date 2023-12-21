import { Link } from 'react-router-dom';

const ButtonOutline = ({ path = 'path', displayName = 'displayName' }) => {
  return (
    <div className='my-5 inline-block'>
      <Link
        to={path}
        className='text-lg font-medium px-5 py-3 rounded bg-white outline-none text-[#FC8465]'
      >
        {displayName}
      </Link>
    </div>
  );
};

export default ButtonOutline;
