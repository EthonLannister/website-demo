import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: 'dark' | 'light';
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  theme = 'light',
  className,
  align = 'left'
}: SectionHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p
          className={cn(
            'text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]',
            isDark ? 'text-accent-subtle' : 'text-brand-soft'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight',
          isDark ? 'text-white' : 'text-brand-navy'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            isDark ? 'text-white/75' : 'text-ink-soft'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
