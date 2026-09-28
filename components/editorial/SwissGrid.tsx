'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function SwissGrid() {
  const { t } = useLanguage();

  const spans = [
    'md:col-span-6 lg:col-span-4',
    'md:col-span-6 lg:col-span-4',
    'md:col-span-6 lg:col-span-4',
    'md:col-span-6 lg:col-span-6',
    'md:col-span-12 lg:col-span-6',
  ];

  return (
    <section id="context" className="bg-taste-paper py-24 md:py-32 px-6 lg:px-12 border-t border-taste-rule">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral block">
            {t.swissGrid.eyebrow}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-taste-navy leading-[0.95]">
            {t.swissGrid.title}
          </h2>
          <p className="text-taste-ink/80 text-base sm:text-lg leading-relaxed pt-2">
            {t.swissGrid.desc}
          </p>
        </div>

        {/* 12-Column Swiss Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-taste-rule border border-taste-rule shadow-sm">
          {t.swissGrid.pillars.map((item, idx) => (
            <article
              key={item.num}
              className={`bg-taste-paper p-8 sm:p-10 flex flex-col justify-between min-h-[20rem] sm:min-h-[22rem] group hover:bg-[#ece6dc] transition-colors ${spans[idx] || 'md:col-span-6'}`}
            >
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-taste-coral tracking-wider">
                  {item.num} // {item.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-taste-ink/30 group-hover:text-taste-coral transition-colors" />
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-taste-navy leading-snug">
                  {item.title}
                </h3>
                <p className="text-taste-ink/75 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
