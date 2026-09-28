import React from 'react';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export function SearchInput({ className, value, onChange, onClear, placeholder, ...props }: SearchInputProps) {
  const hasValue = Boolean(value);

  return (
    <div className={cn('relative w-full', className)}>
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft/60 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-box border border-ink/15 bg-surface-card pl-10 pr-9 py-2.5 text-sm text-brand-navy placeholder:text-ink-soft/60 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy shadow-sm transition"
        {...props}
      />
      {hasValue && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft/60 hover:text-brand-navy p-0.5 rounded transition"
          aria-label="Clear search"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
