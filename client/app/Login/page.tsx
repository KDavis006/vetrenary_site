'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Redirect } from 'next';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
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
    // <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    //   <h1>{loading ? 'Processing' : 'Login'}</h1>
    //   <hr />

    //   <label htmlFor='email'>email</label>
    //   <input
    //     id='email'
    //     type='text'
    //     value={user.email}
    //     onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     placeholder='email'
    //   />
    //   <label htmlFor='password'>password</label>
    //   <input
    //     id='password'
    //     type='password'
    //     value={user.password}
    //     onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     placeholder='password'
    //   />
    //   <button onClick={onLogin}>Login</button>
    //   <Link href='/Signup'>Visit signup page</Link>
    // </div>
    <div>
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
          <div className='flex flex-col w-full space-y-4'>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='email' className='text-sm font-medium'>
                Email:
              </label>
              <input
                id='email'
                type='text'
                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='password' className='text-sm font-medium'>
                Password:
              </label>
              <input
                id='password'
                type='password'
                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-1'
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
          </div>
          <div className='flex justify-center mt-6'>
            <Link
              href='/Signup'
              className='text-sm text-indigo-600 hover:text-indigo-500'
            >
              {' '}
              Go to Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
