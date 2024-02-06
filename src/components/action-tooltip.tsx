import React from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  className?: string;
}

export const ActionTooltip = ({ label, children, side, align, className }: ActionTooltipProps) => (
  <TooltipProvider>
    <Tooltip delayDuration={50}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={align} className={className}>
        <p className='text-sm font-semibold capitalize'>{label.toLowerCase()}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
