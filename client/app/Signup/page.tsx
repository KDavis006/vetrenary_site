'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const onSignup = async () => {
    try {
      if(user.password == user.confirmPassword) {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
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
      <label htmlFor='firstname'>First Name</label>
      <input
        id='firstname'
        type='text'
        value={user.first_name}
        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        placeholder='First Name'
        required
      />
      <label htmlFor='lastname'>Last Name</label>
      <input
        id='lastname'
        type='text'
        value={user.last_name}
        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        placeholder='Last Name'
        required
      />
      <label htmlFor='email'>email</label>
      <input
        id='email'
        type='text'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email'
        required
      />
      <label htmlFor='password'>password</label>
      <input
        id='password'
        type='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
        required
      />
      <label htmlFor='confirmpassword'>Confirm Password</label>
      <input
        id='confirmpassword'
        type='password'
        value={user.confirmPassword}
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        placeholder='Confirm Password'
        required
      />
      <button onClick={onSignup}>Sign Up</button>

      <Link href='/Login'>Visit login page</Link>
    </div>
  );
}
