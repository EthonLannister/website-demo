'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { SITE_CONFIG } from '@/lib/constants';


export function SiteFooter() {
  const { t } = useLanguage();

  const marqueeItems = [
    'CHINA AI TOUR',
    'EXECUTIVE IMMERSIONS',
    'FRONTIER FOUNDATION MODELS',
    'SMART MANUFACTURING',
    'AUTONOMOUS MOBILITY',
    'EMBODIED ROBOTICS',
  ];

  return (
    <footer className="bg-brand-navy text-white/80 border-t border-white/10 overflow-hidden">
      {/* Infinite Footer Marquee */}
      <div className="py-4 border-b border-white/10 bg-[#08182b] overflow-hidden select-none" aria-hidden="true">
        <div className="flex shrink-0 gap-8 animate-hero-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-display font-black text-xs sm:text-sm tracking-widest text-white/35">
                {item}
              </span>
              <span className="text-accent-subtle text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="font-display text-white text-xl sm:text-2xl font-black uppercase tracking-tight">
              China AI Tour
            </Link>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
            <p className="text-xs text-accent-subtle font-semibold">
              {t.footer.subhead}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-subtle block">
              {t.footer.tracks}
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="hover:text-white transition">
                  {t.nav.programs}
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white transition">
                  {t.nav.companies}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition">
                  {t.nav.industries}
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition">
                  {t.nav.destinations}
                </Link>
              </li>
            </ul>
          </div>

          {/* Insights & About */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-subtle block">
              {t.footer.resources}
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  {t.nav.insights}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition">
                  {t.nav.planProgram}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/china-ai-tour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Desk */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-subtle block">
              {t.footer.contact}
            </span>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="text-xs text-white/50 pt-1">
                Room 1210, Building A, Zhongshan SOHO Plaza, Shanghai, China
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} China AI Tour. {t.footer.rights}
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition">{t.footer.methodology}</Link>
            <Link href="/programs" className="hover:text-white transition">{t.footer.terms}</Link>
            <Link href="/#contact" className="hover:text-white transition">{t.footer.contactLink}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
