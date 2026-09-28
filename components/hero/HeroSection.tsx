'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TelemetryCard } from './TelemetryCard';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="page-hero" className="relative min-h-[100svh] overflow-hidden bg-brand-navy text-white flex flex-col justify-between">
      {/* Background Hero Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/experiences/smart-manufacturing.jpg"
          alt="China AI Manufacturing and Robotics"
          fill
          priority
          className="object-cover opacity-35 filter grayscale contrast-125"
          sizes="100vw"
        />
        {/* Tech vignette and gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-12 pt-[calc(var(--site-header-pad)+4rem)] sm:px-6 lg:px-8">
        <div className="flex w-full flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {/* Left Column: Headlines & CTAs */}
          <div className="w-full max-w-3xl lg:max-w-none lg:flex-1">
            {/* Eyebrow Tag */}
            <p className="inline-flex w-fit items-center rounded-box bg-white/10 border border-white/20 px-3.5 py-1 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent-subtle shadow-sm backdrop-blur-sm">
              {t.hero.eyebrow}
            </p>

            {/* Main H1 Title with Embedded Photo Badge */}
            <h1 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight uppercase text-white">
              {t.hero.title} <br className="hidden sm:inline" />
              {t.hero.titleSub}
              <span className="hero-title-badge ml-3 hidden md:inline-block" aria-hidden="true" />
            </h1>

            {/* Subtitle */}
            <p className="mt-4 font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white/90">
              {t.hero.subtitle}
            </p>

            {/* Lede paragraph */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-white/80">
              {t.hero.desc}
            </p>

            {/* 3 Checkmark Highlights */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-white/90">
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-box bg-white text-xs font-black text-brand-navy">
                  ✓
                </span>
                <span>{t.hero.curation}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-box bg-white text-xs font-black text-brand-navy">
                  ✓
                </span>
                <span>{t.hero.guides}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-box bg-white text-xs font-black text-brand-navy">
                  ✓
                </span>
                <span>{t.hero.logistics}</span>
              </li>
            </ul>

            {/* Buttons & Overview Link */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#contact"
                  className="inline-flex justify-center rounded-box bg-surface-cream px-8 py-3.5 text-center text-sm font-bold text-brand-navy shadow-lg transition hover:bg-white active:scale-95"
                >
                  {t.hero.ctaPrimary}
                </Link>
                <Link
                  href="/companies"
                  className="inline-flex justify-center rounded-box border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>

              <Link
                href="/#contact"
                className="group inline-flex w-fit items-center gap-2 py-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5" />
                  <path d="M12 12v6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
                <span>{t.hero.overview}</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Telemetry Card */}
          <div className="mt-10 lg:mt-0">
            <TelemetryCard />
          </div>
        </div>
      </div>

      {/* Marquee Watermark at Bottom */}
      <div className="relative z-10 w-full overflow-hidden pb-4" aria-hidden="true">
        <div className="mb-4 h-px w-full bg-white/15" />
        <div className="flex w-max animate-hero-marquee select-none whitespace-nowrap opacity-25">
          <span className="pe-16 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
            GLOBAL LEADERS × CHINA · AI &nbsp;—&nbsp; GLOBAL LEADERS × CHINA · AI
          </span>
          <span className="pe-16 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
            GLOBAL LEADERS × CHINA · AI &nbsp;—&nbsp; GLOBAL LEADERS × CHINA · AI
          </span>
        </div>
      </div>
    </section>
  );
}
