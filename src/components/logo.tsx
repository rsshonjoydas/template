'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const Logo = () => (
  <Link href='/'>
    <div
      className={cn(
        'blue-gradient_text flex select-none items-center justify-center gap-x-2 text-3xl font-bold transition hover:opacity-75',
        font.className
      )}
    >
      RS
      <p className={cn('hidden lg:flex', font.className)}>Shonjoy</p>
    </div>
  </Link>
);
