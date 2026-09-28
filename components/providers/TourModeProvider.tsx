'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TourMode } from '@/lib/data/types';

interface TourModeContextType {
  mode: TourMode;
  setMode: (mode: TourMode) => void;
  modeLabel: string;
}

const TourModeContext = createContext<TourModeContextType | null>(null);

const MODE_LABELS: Record<TourMode, string> = {
  corporate: 'Corporate Strategy Expedition',
  emba: 'EMBA & Executive Education',
  delegation: 'Institutional Delegation'
};

export function TourModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<TourMode>('corporate');

  return (
    <TourModeContext.Provider value={{ mode, setMode, modeLabel: MODE_LABELS[mode] }}>
      {children}
    </TourModeContext.Provider>
  );
}

export function useTourMode() {
  const context = useContext(TourModeContext);
  if (!context) {
    return {
      mode: 'corporate' as TourMode,
      setMode: () => {},
      modeLabel: 'Corporate Strategy Expedition'
    };
  }
  return context;
}

export function ModeSwitcher({ variant = 'hero' }: { variant?: 'hero' | 'compact' }) {
  const { mode, setMode } = useTourMode();

  const options: { id: TourMode; label: string; short: string }[] = [
    { id: 'corporate', label: 'Corporate Strategy', short: 'Corporate' },
    { id: 'emba', label: 'EMBA & Universities', short: 'EMBA' },
    { id: 'delegation', label: 'Institutional Delegations', short: 'Delegation' }
  ];

  return (
    <div
      role="tablist"
      className={`inline-flex items-center gap-1 rounded-full p-1 border shadow-sm backdrop-blur-md transition-all ${
        variant === 'hero'
          ? 'bg-taste-navy/80 border-white/20'
          : 'bg-taste-paper border-taste-rule'
      }`}
    >
      {options.map(opt => {
        const isActive = mode === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => setMode(opt.id)}
            className={`rounded-full px-4 py-2 text-xs md:text-sm font-semibold tracking-tight transition-all duration-300 ${
              isActive
                ? 'bg-taste-coral text-white shadow-md'
                : variant === 'hero'
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-taste-ink/70 hover:text-taste-ink hover:bg-taste-mist/40'
            }`}
          >
            <span className="hidden sm:inline">{opt.label}</span>
            <span className="sm:hidden">{opt.short}</span>
          </button>
        );
      })}
    </div>
  );
}
