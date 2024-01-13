'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { links } from './data';

interface NavItemProps {
  className?: string;
}

export const NavItem = ({ className }: NavItemProps) => {
  const router = useRouter();

  const [activeLabelOnScroll, setActiveLabelOnScroll] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero'); // Assuming the ID of the hero section is 'hero'

      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const heroVisibleHeight =
          Math.min(heroRect.bottom, window.innerHeight) - Math.max(heroRect.top, 0);

        // If hero section is more than half visible, set it as active
        if (heroVisibleHeight > window.innerHeight / 2) {
          setActiveLabelOnScroll('hero');
          return;
        }
      }

      const visibleSections = links
        .map((link) => {
          const element = document.getElementById(link.label?.toLocaleLowerCase());
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              label: link.label?.toLocaleLowerCase(),
              visibleHeight: Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find the section with the maximum visible height
      const largestSection = visibleSections.reduce((max, section: any) =>
        section.visibleHeight > (max?.visibleHeight || 0) ? section : max
      );

      setActiveLabelOnScroll(largestSection?.label || null);
    };

    // Initialize active label on scroll when the component mounts
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {links.map((link) => (
        <div
          role='button'
          tabIndex={0}
          key={link.label}
          onClick={() => {
            router.push(link.href);
          }}
          className={cn(
            'cursor-pointer px-3 py-3 text-foreground/80 transition-colors hover:text-foreground/60',
            {
              'blue-gradient_text hover:text-transparent':
                activeLabelOnScroll === link.label?.toLocaleLowerCase(),
            },
            className
          )}
        >
          {link.label}
        </div>
      ))}
    </>
  );
};
