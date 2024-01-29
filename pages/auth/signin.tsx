"use client"

import React, { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import '/app/globals.css'
import { signIn } from 'next-auth/react';

const Login = () => {
 const [nik, setNik] = useState('');
 const [password, setPassword] = useState('');
 const router = useRouter();

 const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const result = await signIn('credentials', {
        redirect: false,
        nik: nik,
        password: password,
      });

      if (result.error) {
        alert('NIK atau password salah');
      } else {
        console.log('Login Successful:', result);
        alert('Login Berhasil');
        router.push('/pegawai');
      }
    } catch (error) {
      console.log('Login Error:', error);
      alert('Ada Kesalahan Cuy!');
    }
 };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className='text-center mb-5 text-lg font-bold'><b>Masuk</b></h2>
            <div className="mb-4">
              <input type='number' className="input input-bordered w-full"
                placeholder="NIP"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input className="input input-bordered w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Login
            </button>

        </form>
          {/* <button className="w-full btn btn-primary mt-5" onClick={() => signIn() } >Halaman Login</button> */}
      </div>
    </div>
  );
};

export default Login;
