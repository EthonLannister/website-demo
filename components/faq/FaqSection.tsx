'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { HelpCircle, Plus } from 'lucide-react';

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-[#ede7dd] py-24 md:py-36 px-6 lg:px-12 border-b border-taste-rule">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.eyebrow}</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-taste-navy">
            {t.faq.title}
          </h2>
          <p className="text-taste-ink/80 text-base max-w-xl mx-auto">
            {t.faq.desc}
          </p>
        </div>

        {/* Native HTML5 Details Accordions */}
        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <details
              key={faq.id}
              name="expedition-faq"
              open={index === 0}
              className="group rounded-2xl border border-taste-rule bg-taste-paper p-6 sm:p-7 shadow-sm transition hover:border-taste-coral/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg sm:text-xl font-bold text-taste-navy group-hover:text-taste-coral transition-colors">
                  {faq.question}
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-taste-rule text-taste-navy group-open:rotate-45 group-open:bg-taste-coral group-open:text-white group-open:border-taste-coral transition-all duration-200 shrink-0">
                  <Plus className="w-4 h-4" />
                </span>
              </summary>
              <div className="pt-4 text-sm sm:text-base text-taste-ink/80 leading-relaxed border-t border-taste-rule/60 mt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm text-taste-ink/60">
            {t.faq.contactNote}{' '}
            <a href="#contact" className="font-bold text-taste-navy hover:text-taste-coral underline underline-offset-4">
              {t.faq.contactLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
