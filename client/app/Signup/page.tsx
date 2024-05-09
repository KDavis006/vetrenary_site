'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function SignupPage() {
  const [user, setUser] = React.useState({
    first_name: '',
    last_name: '',
    number: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const onSignup = async () => {
    try {
      console.log(user);
      if (user.password == user.confirmPassword) {
        const response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (!response) {
          throw new Error('Failed to sign up');
        }

        const data = await response.json();
        console.log('Sign up successful:', data);
        window.location.href = '/Login';
      } else {
        throw new Error('Passwords do not match');
      }
    } catch (err: any) {
      console.error('Error during log in:', err.message);
    } finally {
      console.log('Did this run');
    }
  };

  return (
    <div>
      <Link href='/Animals' className='absolute p-3 underline drop-shadow-md'>
        ← Back to Animals
      </Link>
      <Image
        src='/campus.jpg'
        alt='background Image'
        width={1000}
        height={1000}
        className='w-screen h-screen absolute z-[-10]'
      />
      <div className='flex w-screen lg:w-1/2  justify-center items-center h-screen'>
        <div className='flex flex-col justify-center items-center h-5/6 w-4/5 md:w-3/4 lg:w-2/3 py-12 px-4 bg-wm-orange rounded-[15px]'>
          <div className='text-4xl font-bold text-center mb-5'>Sign Up</div>
          <form onSubmit={onSignup} className='flex flex-col w-full space-y-2'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col space-y-1 w-2/5'>
                <label htmlFor='firstname' className='text-xs font-medium'>
                  First Name:
                </label>
                <input
                  id='firstname'
                  type='text'
                  value={user.first_name}
                  placeholder='First Name...'
                  className='px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                  onChange={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className='flex flex-col space-y-1 w-2/5 '>
                <label htmlFor='lastname' className='text-xs font-medium'>
                  Last Name:
                </label>
                <input
                  id='lastname'
                  type='text'
                  value={user.last_name}
                  placeholder='Last Name...'
                  className='px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                  onChange={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className='flex flex-col space-y-1 '>
              <label htmlFor='number' className='text-xs font-medium'>
                Phone Number:
              </label>
              <input
                id='number'
                type='tel'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                value={user.number}
                placeholder='Phone Number...'
                className='px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                onChange={(e) => setUser({ ...user, number: e.target.value })}
                required
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='email' className='text-xs font-medium'>
                Email:
              </label>
              <input
                id='email'
                type='text'
                value={user.email}
                placeholder='Email...'
                className='px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='password' className='font-medium text-xs'>
                Password:
              </label>
              <input
                id='password'
                type='password'
                minLength={4}
                value={user.password}
                placeholder='Password...'
                className='px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='confirmpassword' className='text-xs font-medium'>
                Confirm Password:
              </label>
              <input
                id='confirmpassword'
                type='password'
                minLength={4}
                value={user.confirmPassword}
                placeholder='Confirm Password...'
                className='px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                required
              />
              <Link
                href='/'
                className='text-xs text-indigo-600 hover:text-indigo-500'
              >
                Forgot Password
              </Link>
            </div>
            <button className='px-3 text-white text-2xl underline'>
              Sign Up →
            </button>
          </form>
          <div className='flex justify-center mt-3'>
            <Link
              href='/Login'
              className='text-xs text-indigo-600 hover:text-indigo-500'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
