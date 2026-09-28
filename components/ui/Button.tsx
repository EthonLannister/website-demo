import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold tracking-tight rounded-box transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary: 'bg-brand-navy text-surface-cream hover:bg-brand-soft shadow-sm focus:ring-brand-navy',
      navy: 'bg-brand-navy text-white hover:bg-brand-soft shadow-sm focus:ring-brand-navy',
      secondary: 'bg-surface-cream text-brand-navy hover:bg-white shadow-sm focus:ring-brand-navy',
      outline: 'border border-ink/15 text-brand-navy bg-transparent hover:border-brand-navy hover:bg-brand-navy/5 focus:ring-brand-navy',
      ghost: 'text-brand-navy hover:bg-brand-navy/5 focus:ring-brand-navy',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-base',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
