'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      window.location.href = '/Animals';
    } catch (err: any) {
      console.error('Error during sign up:', err.message);
    } finally {
      console.log('Did this run');
    }
  };

  return (
    <div>
      <Link href='/Animals' className='absolute m-3 underline'>
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
        <div className='flex flex-col justify-center items-center h-2/3 w-4/5 md:w-3/4 lg:w-2/3 py-12 px-4 bg-wm-orange rounded-[15px]'>
          <div className='text-4xl font-bold text-center mb-8'>Login</div>
          <form onSubmit={onLogin} className='flex flex-col w-full space-y-4'>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='email' className='text-sm font-medium'>
                Email:
              </label>
              <input
                id='email'
                type='text'
                value={user.email}
                placeholder='Email...'
                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='password' className='text-sm font-medium'>
                Password:
              </label>
              <input
                id='password'
                type='password'
                minLength={4}
                value={user.password}
                placeholder='Password...'
                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1 text-black'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
              <Link
                href='/'
                className='text-sm text-indigo-600 hover:text-indigo-500'
              >
                Forgot Password
              </Link>
            </div>
            <button className='py-2 px-4 text-white text-3xl underline'>
              Login →
            </button>
          </form>
          <div className='flex justify-center mt-3'>
            <Link
              href='/Signup'
              className='text-sm text-indigo-600 hover:text-indigo-500'
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
