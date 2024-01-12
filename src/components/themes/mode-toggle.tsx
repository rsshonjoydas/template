'use client';

import { useTheme } from 'next-themes';

import Icons from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='icon'
          size='icon'
          className='group flex items-center justify-center focus-visible:ring-0 focus-visible:ring-offset-0'
        >
          <Icons.Sun className='absolute h-6 w-6 rotate-0 scale-100 stroke-accent-foreground/80 transition-all group-hover:stroke-accent-foreground dark:-rotate-90 dark:scale-0' />
          <Icons.Moon className='absolute h-6 w-6 rotate-90 scale-0 fill-accent-foreground/80 transition-all group-hover:fill-accent-foreground dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`${
            theme === 'light' ? 'my-0.5 bg-accent text-foreground' : 'text-foreground/80'
          }`}
        >
          <Icons.Sun
            className={`mr-2 h-5 w-5 ${
              theme === 'light' ? 'stroke-foreground' : 'stroke-foreground/80'
            }`}
          />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`${
            theme === 'dark' ? 'my-0.5 bg-accent text-foreground' : 'text-foreground/80'
          }`}
        >
          <Icons.Moon
            className={`mr-1 h-6 w-6 ${
              theme === 'dark' ? 'fill-foreground' : 'fill-foreground/50'
            }`}
          />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`${
            theme === 'system' || theme === null
              ? 'my-0.5 bg-accent text-foreground'
              : 'text-foreground/80'
          }`}
        >
          <Icons.System
            className={`mr-2 h-5 w-5 ${
              theme === 'system' || theme === null ? 'stroke-foreground' : 'stroke-foreground/60'
            }`}
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
