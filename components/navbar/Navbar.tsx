import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from '../UserAccountnav';
import Link from 'next/link';

const Navbar = async () => {
    const session = await getServerSession(authOptions)

  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">PEGAWAI {session?.user.nama}</a>
            </div>
            <div className="flex-none gap-2">
            {session ? (
            <UserAccountNav/>
            ) : (
            <Link href='/auth/signin' className="btn">
              Login
            </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;