import { Link } from 'react-router-dom';
import ButtonFill from '../Components/UI/ButtonFill';
import Checkbox from '../Components/UI/Checkbox';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import LoginwithGoogle from '../Shared/LoginwithGoogle';

const Signup = () => {
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <main className='w-full max-w-md mx-auto p-6 '>
        <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                Sign Up
              </h1>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Have an account already?{' '}
                <Link
                  className='text-[#FC7081] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  to='/login'
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className='mt-5'>
              <LoginwithGoogle />

              <div className='py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600'>
                Or
              </div>

              {/* <!-- Form --> */}
              <form>
                <div className='grid gap-y-4'>
                  <Input
                    displayName='Full Name'
                    type='text'
                    id={'name'}
                    name='name'
                    placeholder={'Jhon Dou'}
                  />
                  <Input
                    displayName='Email address'
                    type='email'
                    id={'email'}
                    name='email'
                    placeholder={'example@gmail.com'}
                  />
                  <InputFile
                    displayName='Upload your photo'
                    type='file'
                    id={'photoUpload'}
                    name='photoUpload'
                  />
                  <Input
                    displayName='Password'
                    type='password'
                    id={'password'}
                    name='password'
                    placeholder={'s909j*(^&'}
                  />
                  <Input
                    displayName='Confirm Password'
                    type='password'
                    id={'confirmPassword'}
                    name='confirmPassword'
                    placeholder={'s909j*(^&'}
                  />
                  <Checkbox
                    displayName={'Remember Me'}
                    id='remember-me'
                    type='checkbox'
                    name='remember-me'
                  />
                  <ButtonFill displayName={'Sign Up'} />
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Signup;
