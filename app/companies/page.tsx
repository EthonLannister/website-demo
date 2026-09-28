'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANIES_DATA } from '@/lib/data/companies';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function CompaniesPage() {
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tagFilters = t.companiesPage.tagFilters || [
    { id: 'All', label: 'All Sectors' },
    { id: 'Foundation Models', label: 'Foundation Models' },
    { id: 'Robotics & Hardware', label: 'Robotics & Hardware' },
    { id: 'Autonomous Mobility', label: 'Autonomous Mobility' },
    { id: 'Cloud & Platforms', label: 'Cloud & Platforms' },
    { id: 'Enterprise AI', label: 'Enterprise AI' },
    { id: 'Fintech', label: 'Fintech' },
  ];

  const filteredCompanies = useMemo(() => {
    return COMPANIES_DATA.filter((c) => {
      const matchesTag =
        selectedTag === 'All' ||
        c.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase())) ||
        (selectedTag === 'Robotics & Hardware' && (c.tags.includes('Robotics') || c.name.includes('Unitree') || c.name.includes('DJI') || c.name.includes('Xiaomi')));
      
      const localizedDesc = t.companiesPage.companyDescriptions?.[c.name] || c.desc;
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        localizedDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.city.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery, t.companiesPage.companyDescriptions]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Subpage Hero Header */}
      <header className="bg-brand-navy px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-subtle">
            {t.pages.companies.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t.pages.companies.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.pages.companies.desc}
          </p>
        </div>
      </header>

      {/* Directory & Filter Controls */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Controls Bar */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-ink/10 pb-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {tagFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedTag(filter.id)}
                  className={`rounded-box px-3.5 py-2 text-xs font-bold transition ${
                    selectedTag === filter.id
                      ? 'bg-brand-navy text-surface-cream shadow-sm'
                      : 'border border-ink/10 bg-surface-card text-ink-soft hover:border-brand-navy/30 hover:text-brand-navy'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.companiesPage.searchPlaceholder}
                className="w-full rounded-box border border-ink/15 bg-surface-card px-4 py-2 text-sm text-brand-navy placeholder:text-ink-soft/60 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-ink-soft hover:text-brand-navy"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="mb-4 text-xs font-mono text-ink-soft">
            {filteredCompanies.length} {t.companiesPage.resultsSuffix}
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="text-center py-16 bg-surface-card rounded-box border border-ink/10 space-y-4">
              <p className="text-ink-soft">{t.companiesPage.noResults}</p>
              <button
                onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
                className="px-5 py-2 rounded-box bg-brand-navy text-white text-xs font-bold"
              >
                {t.companiesPage.resetFilters}
              </button>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCompanies.map((c) => {
                const desc = t.companiesPage.companyDescriptions?.[c.name] || c.desc;
                return (
                  <li
                    key={c.name}
                    className="flex h-full flex-col justify-between rounded-box border border-ink/10 bg-surface-card p-7 shadow-sm transition duration-200 hover:border-brand-navy/30 hover:shadow-md"
                  >
                    <div>
                      <div className="flex min-h-[3.5rem] items-center justify-between gap-4">
                        {c.logo ? (
                          <div className="relative h-10 w-32 max-h-10">
                            <Image
                              src={c.logo}
                              alt={c.name}
                              width={120}
                              height={40}
                              className="h-10 w-auto max-w-[8rem] object-contain object-left"
                            />
                          </div>
                        ) : (
                          <span className="font-display font-bold text-lg text-brand-navy">{c.name}</span>
                        )}
                        <span className="text-right text-xs font-semibold uppercase tracking-wider text-brand-soft">
                          {c.city}
                        </span>
                      </div>

                      <h2 className="mt-6 font-display text-2xl font-bold uppercase text-brand-navy">
                        {c.name}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-ink/10 flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-box bg-brand-navy/5 px-2.5 py-1 text-[11px] font-semibold text-brand-navy"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
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
              {t.companiesPage.requestVisit}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
