import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent' | 'subtle';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'sm',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-semibold rounded-box transition-colors';

  const variants = {
    default: 'bg-brand-navy/5 text-brand-navy border border-brand-navy/10',
    outline: 'border border-ink/15 text-ink-soft bg-surface-card',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    subtle: 'bg-white/10 text-white/90 border border-white/15',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
