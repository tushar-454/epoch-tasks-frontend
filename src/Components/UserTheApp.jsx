import Container from '../Shared/Container';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';
import User from './User';

const UserTheApp = ({ users }) => {
  return (
    <section>
      <Container>
        <DashBoardNavItemTitle displayName='Who can Use' />

        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10'>
          {users?.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserTheApp;
