'use client';

import Link from 'next/link';

import Icons from '@/components/icons';
import { ModeToggle } from '@/components/themes/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

import { MobileSidebar } from './mobile-sidebar';
import { Navbar } from './navbar';

export const Header = () => {
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        'supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full bg-background/80 backdrop-blur',
        scrolled && 'border-b shadow-sm dark:border-slate-700/70'
      )}
    >
      <div className='container flex h-14 items-center justify-between bg-transparent p-4'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='flex items-center justify-between md:justify-center lg:justify-end'>
            <MobileSidebar />
            <Navbar />
          </div>
        </div>

        <nav className='flex flex-1 items-center justify-end space-x-1'>
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div
              className={cn(
                buttonVariants({
                  variant: 'icon',
                  size: 'icon',
                })
              )}
            >
              <Icons.GitHub className='h-4 w-4' />
              <span className='sr-only'>GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
            <div
              className={cn(
                buttonVariants({
                  variant: 'icon',
                  size: 'icon',
                })
              )}
            >
              <Icons.XTwitter className='h-4 w-4' />
              <span className='sr-only'>Twitter</span>
            </div>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};
