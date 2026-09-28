'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { industryService } from '@/lib/services';
import { IndustryItem } from '@/lib/types';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function IndustriesPage() {
  const { lang, t } = useLanguage();
  const [industries, setIndustries] = useState<IndustryItem[]>(t.industriesPage.items || []);

  useEffect(() => {
    let isCancelled = false;
    industryService.getIndustries({ locale: lang as any }).then((data) => {
      if (!isCancelled) {
        setIndustries(data);
      }
    });
    return () => {
      isCancelled = true;
    };
  }, [lang]);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Subpage Hero Header */}
      <header className="bg-brand-navy px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-subtle">
            {t.pages.industries.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t.pages.industries.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.pages.industries.desc}
          </p>
        </div>
      </header>

      {/* Industries Grid */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
            {industries.map((ind) => (

              <article key={ind.id || ind.title} className="border-t border-ink/15 pt-8 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-3xl font-bold uppercase text-brand-navy">
                    {ind.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {ind.desc}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-soft mb-2">
                      {t.industriesPage.keyQuestions}
                    </p>
                    <ul className="space-y-2 text-sm text-ink font-medium">
                      {ind.questions.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent font-bold">—</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ink/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-ink-soft mr-1">{t.industriesPage.frequentHosts}</span>
                  {ind.hosts.map((host) => (
                    <span
                      key={host}
                      className="rounded-box bg-brand-navy/5 px-2.5 py-1 text-xs font-semibold text-brand-navy"
                    >
                      {host}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
              {t.aboutPage.ctaTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              {t.aboutPage.ctaDesc}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              className="rounded-box bg-surface-cream px-6 py-3.5 text-sm font-bold text-brand-navy transition hover:bg-white shadow-lg"
              href="/#contact"
            >
              {t.industriesPage.requestTrack}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
