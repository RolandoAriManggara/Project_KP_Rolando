"use client"

import Link from 'next/link'
import { useState } from 'react';

const Sidebar = ({children}) => {

  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (href) => {
    setActiveMenu(href);
  };

  return (
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col py-5 px-5">
            <div>{children}</div>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Buka Menu</label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                {/* <Link className={`${activeMenu === '/pegawai' ? 'active' : ''}`} href="/pegawai"> */}
                <Link href="/pegawai">
                  Kelola Pegawai
                </Link>
              </li>
              <li >
                <Link href="/tugas">
                  Kelola Tugas Tambahan
                </Link>
              </li>
              <li >
                <Link href="/mapel">
                  Kelola Mata Pelajaran
                </Link>
              </li>
            </ul>
        </div>
      </div>
  )
}

export default Sidebar