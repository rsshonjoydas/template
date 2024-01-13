'use client';

import { Logo } from '@/components/logo';

import { NavItem } from './nav-item';

export const Navbar = () => (
  <>
    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
      <div className='flex flex-shrink-0 items-center'>
        <Logo />
      </div>
    </div>
    <div className='items-center justify-between md:justify-center lg:justify-end'>
      <nav className='hidden justify-end p-3 md:flex'>
        <NavItem />
      </nav>
    </div>
  </>
);
