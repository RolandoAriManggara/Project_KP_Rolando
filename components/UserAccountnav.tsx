'use client'

import { signOut } from 'next-auth/react';
import '../app/globals.css';

const handleLogout = async () => {
    signOut({ callbackUrl: '/auth/signin' })
  };

const UserAccountNav = () => {
  return (
    <div>
        <button className='btn' onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default UserAccountNav