'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t, langList, currentLangLabel } = useLanguage();

  const langMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close dropdowns when clicking outside or pressing Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Auto-close dropdowns on route changes
  useEffect(() => {
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t.nav.programs, href: '/programs' },
    { label: t.nav.companies, href: '/companies' },
    { label: t.nav.industries, href: '/industries' },
    { label: t.nav.destinations, href: '/destinations' },
    { label: t.nav.insights, href: '/blog' },
    { label: t.nav.about, href: '/about' },
  ];

  const isHome = pathname === '/';

  return (
    <header
      data-nav-state={isScrolled ? 'scrolled' : 'hero'}
      className="fixed inset-x-0 top-0 z-50 flex flex-col items-center bg-transparent px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8 transition-all duration-300"
    >
      <div className="pointer-events-auto flex w-full flex-col gap-2 max-w-7xl">
        <div
          className={`relative flex min-h-[3.25rem] items-center justify-between gap-2 ps-3 pe-1.5 sm:min-h-14 sm:gap-3 sm:ps-5 sm:pe-3 rounded-box transition-all duration-300 ${
            isScrolled || !isHome
              ? 'border border-white/15 bg-brand-navy/90 backdrop-blur-xl shadow-lg'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="relative z-10 shrink-0 font-display text-base font-black uppercase tracking-tight text-surface-cream sm:text-lg hover:text-white transition-colors"
          >
            China AI Tour
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="relative z-10 hidden items-center xl:flex">
            <div className="flex items-center gap-0.5 p-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-box px-3 py-2 text-sm font-bold transition-colors ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Action: Language + Plan a Program CTA */}
          <div className="relative z-10 flex shrink-0 items-center gap-2 lg:-me-0.5">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(prev => !prev)}
                className="flex cursor-pointer list-none items-center gap-1.5 rounded-box border border-white/25 px-2.5 py-2 text-xs font-semibold text-white hover:border-white/40 transition"
                aria-label="Choose language"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z" />
                </svg>
                <span>{currentLangLabel}</span>
                <span aria-hidden="true">⌄</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-box border border-ink/10 bg-surface-cream p-1.5 text-ink shadow-2xl z-[60]">
                  {langList.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLang(item.code);
                        setLangMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-box px-3 py-2 text-xs sm:text-sm transition ${
                        lang === item.code
                          ? 'font-bold text-brand-navy bg-brand-navy/10'
                          : 'text-ink-soft hover:bg-brand-navy/5 hover:text-brand-navy'
                      }`}
                    >
                      <span>{item.native}</span>
                      {lang === item.code && <span className="text-accent font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plan a Program CTA Button */}
            <Link
              href="/#contact"
              className="hidden rounded-box bg-surface-cream px-4 py-2.5 text-sm font-bold text-brand-navy transition hover:bg-white sm:px-5 xl:inline-flex shadow-none active:scale-95"
            >
              {t.nav.planProgram}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex rounded-box p-2.5 text-white transition-colors xl:hidden hover:text-white/90"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden w-full rounded-box border border-white/15 bg-brand-navy/95 backdrop-blur-xl p-4 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-box text-sm font-bold transition ${
                  pathname === link.href
                    ? 'bg-white/15 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center rounded-box bg-surface-cream px-4 py-2.5 text-sm font-bold text-brand-navy hover:bg-white transition"
              >
                {t.nav.planProgram}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
