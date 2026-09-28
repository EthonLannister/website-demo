'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function ProgramsPage() {
  const { t } = useLanguage();
  const [decision, setDecision] = useState('');
  const [audience, setAudience] = useState('');
  const [timing, setTiming] = useState('');
  const [evidence, setEvidence] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleDiagnostic = () => {
    if (audience === 'corporate') {
      setResult(t.programsPage.diagnosticResults.corporate);
    } else if (audience === 'investor-policy') {
      setResult(t.programsPage.diagnosticResults.investorPolicy);
    } else if (audience === 'university') {
      setResult(t.programsPage.diagnosticResults.university);
    } else {
      setResult(t.programsPage.diagnosticResults.industry);
    }
  };

  const isFormComplete = decision && audience && timing && evidence;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Subpage Hero Header */}
      <header className="bg-brand-navy px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-subtle">
            {t.pages.programs.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t.pages.programs.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.pages.programs.desc}
          </p>
        </div>
      </header>

      {/* 4 Core Program Tracks */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {t.programsPage.tracks.map((track) => (
              <article
                key={track.num}
                className="angle-card flex flex-col rounded-box border border-ink/10 bg-surface-card p-8 shadow-sm sm:p-10 transition hover:shadow-md"
              >
                <p className="text-sm font-bold tabular-nums text-accent">{track.num}</p>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase text-brand-navy">
                  {track.title}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-soft">
                  {track.audience}
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  {track.desc}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5 text-sm">
                  <span className="text-ink-soft">{track.durationLabel}</span>
                  <span className="font-bold text-brand-navy">{track.duration}</span>
                </div>
                <Link
                  className="mt-6 inline-flex text-sm font-bold text-brand-navy underline-offset-4 hover:underline"
                  href="/#contact"
                >
                  {track.inquire}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program Fit Diagnostic */}
      <section className="bg-surface-muted px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
            {t.programsPage.diagnosticEyebrow}
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase text-brand-navy sm:text-5xl">
            {t.programsPage.diagnosticTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.programsPage.diagnosticDesc}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Q1 */}
            <fieldset className="rounded-box border border-ink/10 bg-surface-card p-6 shadow-sm">
              <p className="font-display text-xl font-bold leading-tight text-brand-navy">
                {t.programsPage.diagnosticQ1}
              </p>
              <div className="mt-4 grid gap-2">
                {t.programsPage.diagnosticQ1Opts.map((opt) => (
                  <label
                    key={opt.val}
                    className={`cursor-pointer rounded-box border px-4 py-3 text-sm transition flex items-center ${
                      decision === opt.val
                        ? 'border-brand-navy bg-brand-navy/5 font-bold text-brand-navy'
                        : 'border-ink/10 text-ink-soft hover:border-brand-navy/30'
                    }`}
                  >
                    <input
                      type="radio"
                      className="mr-3 accent-brand-navy"
                      name="decision"
                      checked={decision === opt.val}
                      onChange={() => setDecision(opt.val)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q2 */}
            <fieldset className="rounded-box border border-ink/10 bg-surface-card p-6 shadow-sm">
              <p className="font-display text-xl font-bold leading-tight text-brand-navy">
                {t.programsPage.diagnosticQ2}
              </p>
              <div className="mt-4 grid gap-2">
                {t.programsPage.diagnosticQ2Opts.map((opt) => (
                  <label
                    key={opt.val}
                    className={`cursor-pointer rounded-box border px-4 py-3 text-sm transition flex items-center ${
                      audience === opt.val
                        ? 'border-brand-navy bg-brand-navy/5 font-bold text-brand-navy'
                        : 'border-ink/10 text-ink-soft hover:border-brand-navy/30'
                    }`}
                  >
                    <input
                      type="radio"
                      className="mr-3 accent-brand-navy"
                      name="audience"
                      checked={audience === opt.val}
                      onChange={() => setAudience(opt.val)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q3 */}
            <fieldset className="rounded-box border border-ink/10 bg-surface-card p-6 shadow-sm">
              <p className="font-display text-xl font-bold leading-tight text-brand-navy">
                {t.programsPage.diagnosticQ3}
              </p>
              <div className="mt-4 grid gap-2">
                {t.programsPage.diagnosticQ3Opts.map((opt) => (
                  <label
                    key={opt.val}
                    className={`cursor-pointer rounded-box border px-4 py-3 text-sm transition flex items-center ${
                      timing === opt.val
                        ? 'border-brand-navy bg-brand-navy/5 font-bold text-brand-navy'
                        : 'border-ink/10 text-ink-soft hover:border-brand-navy/30'
                    }`}
                  >
                    <input
                      type="radio"
                      className="mr-3 accent-brand-navy"
                      name="timing"
                      checked={timing === opt.val}
                      onChange={() => setTiming(opt.val)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q4 */}
            <fieldset className="rounded-box border border-ink/10 bg-surface-card p-6 shadow-sm">
              <p className="font-display text-xl font-bold leading-tight text-brand-navy">
                {t.programsPage.diagnosticQ4}
              </p>
              <div className="mt-4 grid gap-2">
                {t.programsPage.diagnosticQ4Opts.map((opt) => (
                  <label
                    key={opt.val}
                    className={`cursor-pointer rounded-box border px-4 py-3 text-sm transition flex items-center ${
                      evidence === opt.val
                        ? 'border-brand-navy bg-brand-navy/5 font-bold text-brand-navy'
                        : 'border-ink/10 text-ink-soft hover:border-brand-navy/30'
                    }`}
                  >
                    <input
                      type="radio"
                      className="mr-3 accent-brand-navy"
                      name="evidence"
                      checked={evidence === opt.val}
                      onChange={() => setEvidence(opt.val)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              disabled={!isFormComplete}
              onClick={handleDiagnostic}
              className="rounded-box bg-brand-navy px-8 py-4 text-sm font-bold text-surface-cream disabled:cursor-not-allowed disabled:opacity-40 hover:bg-brand-navyHover transition shadow-md"
            >
              {t.programsPage.diagnosticBtn}
            </button>
            {result && (
              <div className="p-4 rounded-box bg-brand-navy/10 border border-brand-navy/20 text-brand-navy text-sm font-semibold max-w-xl">
                {result}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
              {t.programsPage.stepsEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-navy sm:text-5xl">
              {t.programsPage.stepsTitle}
            </h2>
          </div>

          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {t.programsPage.steps.map((step) => (
              <li
                key={step.num}
                className="grid gap-4 py-7 md:grid-cols-[80px_280px_1fr] md:items-start md:gap-8"
              >
                <span className="font-display text-xl font-bold text-accent">{step.num}</span>
                <h3 className="font-display text-2xl font-bold uppercase text-brand-navy">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              className="rounded-box bg-brand-navy px-6 py-3.5 text-sm font-bold text-surface-cream hover:bg-brand-navyHover transition"
              href="/companies"
            >
              {t.common.exploreCompanies}
            </Link>
            <Link
              className="rounded-box border border-brand-navy px-6 py-3.5 text-sm font-bold text-brand-navy hover:bg-brand-navy/5 transition"
              href="/destinations"
            >
              {t.common.exploreDestinations}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
              {t.programsPage.ctaTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              {t.programsPage.ctaDesc}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              className="rounded-box bg-surface-cream px-6 py-3.5 text-sm font-bold text-brand-navy transition hover:bg-white shadow-lg"
              href="/#contact"
            >
              {t.programsPage.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
