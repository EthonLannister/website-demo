'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function DestinationsPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Subpage Hero Header */}
      <header className="bg-brand-navy px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-subtle">
            {t.pages.destinations.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t.pages.destinations.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.pages.destinations.desc}
          </p>
        </div>
      </header>

      {/* Destinations Hub Grid */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(t.destinationsPage.items || []).map((city, idx) => {
              // The top hubs (Beijing, Shanghai, Hangzhou, Shenzhen) in dark theme, rest in cream
              const isDark = idx < 4;
              return (
                <article
                  key={city.id || city.name}
                  className={`flex flex-col rounded-box border p-8 shadow-sm transition hover:shadow-md ${
                    isDark
                      ? 'border-brand-navy bg-brand-navy text-white'
                      : 'border-ink/10 bg-surface-card text-ink'
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      isDark ? 'text-accent-subtle' : 'text-accent'
                    }`}
                  >
                    {city.eyebrow}
                  </p>
                  <h2
                    className={`mt-3 font-display text-3xl font-bold uppercase ${
                      isDark ? 'text-white' : 'text-brand-navy'
                    }`}
                  >
                    {city.name}
                  </h2>
                  <p
                    className={`mt-3 text-sm font-semibold ${
                      isDark ? 'text-white/80' : 'text-brand-soft'
                    }`}
                  >
                    {city.tagline}
                  </p>
                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      isDark ? 'text-white/70' : 'text-ink-soft'
                    }`}
                  >
                    {city.desc}
                  </p>

                  {city.hosts && (
                    <div className="mt-auto pt-7">
                      <p
                        className={`text-xs leading-relaxed ${
                          isDark ? 'text-white/55' : 'text-ink-soft/75'
                        }`}
                      >
                        <span className="font-bold">{t.destinationsPage.frequentHosts}</span> {city.hosts}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              {t.destinationsPage.requestRoute}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
