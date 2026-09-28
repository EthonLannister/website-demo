'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { MapPin, ArrowRight } from 'lucide-react';

export function HubMatrix() {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="bg-[#ede7dd] py-24 md:py-32 px-6 lg:px-12 border-b border-taste-rule">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-taste-rule pb-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral block">
              {t.hubMatrix.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-taste-navy">
              {t.hubMatrix.title}
            </h2>
            <p className="text-taste-ink/80 text-base leading-relaxed">
              {t.hubMatrix.desc}
            </p>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-brand-navy transition group shrink-0"
          >
            <span>{t.hubMatrix.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.hubMatrix.hubs.map((hub) => (
            <div
              key={hub.id}
              className="bg-taste-paper p-8 rounded-2xl border border-taste-rule hover:border-taste-coral/40 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#e6e0d5] text-taste-navy">
                    <MapPin className="w-3 h-3 text-taste-coral" />
                    <span>{hub.cityName}</span>
                  </span>
                  <span className="text-[11px] font-mono text-taste-ink/40 uppercase">
                    {t.hubMatrix.hubCodeLabel} {hub.code}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-taste-navy group-hover:text-taste-coral transition-colors">
                    {hub.headline}
                  </h3>
                  <p className="text-xs font-semibold text-taste-coral tracking-tight mt-1">
                    {hub.subtitle}
                  </p>
                </div>

                <p className="text-sm text-taste-ink/75 leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-taste-rule/60">
                <div className="flex flex-wrap gap-1.5">
                  {hub.focusTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#e4ded3] text-taste-ink/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
