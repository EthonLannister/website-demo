'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Subpage Hero Header */}
      <header className="bg-brand-navy px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-subtle">
            {t.pages.about.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t.pages.about.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.pages.about.desc}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_1fr] items-start">
          {/* Left Column: Role */}
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-brand-navy sm:text-5xl">
              {t.aboutPage.roleTitle}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>{t.aboutPage.roleP1}</p>
              <p>{t.aboutPage.roleP2}</p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-box border border-brand-navy px-6 py-3.5 text-sm font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition"
              href="https://www.limenlab.ai/"
            >
              {t.aboutPage.visitLimen}
            </a>
          </div>

          {/* Right Column: Principles */}
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {t.aboutPage.principles.map((pr, idx) => (
              <article key={idx} className="py-7">
                <h3 className="font-display text-2xl font-bold uppercase text-brand-navy">
                  {pr.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pr.desc}
                </p>
              </article>
            ))}
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
              {t.aboutPage.ctaDesign}
            </Link>
            <Link
              className="rounded-box border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              href="/companies"
            >
              {t.aboutPage.ctaExplore}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
