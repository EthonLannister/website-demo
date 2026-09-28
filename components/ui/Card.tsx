import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-box border border-ink/10 bg-surface-card p-6 md:p-8 shadow-sm transition duration-200',
        hover && 'hover:border-brand-navy/30 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
