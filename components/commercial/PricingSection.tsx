'use client';

import React from 'react';
import { useTourMode } from '@/components/providers/TourModeProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Check, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

export function PricingSection() {
  const { mode } = useTourMode();
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-taste-paper py-24 md:py-36 px-6 lg:px-12 border-b border-taste-rule">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral block">
            {t.pricing.eyebrow}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-taste-navy leading-[0.95]">
            {t.pricing.title}
          </h2>
          <p className="text-taste-ink/80 text-base sm:text-lg leading-relaxed">
            {t.pricing.desc}
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.pricing.models.map((model) => {
            const isHighlighted = mode === model.id;
            return (
              <div
                key={model.id}
                className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-taste-navy text-white border-taste-coral shadow-2xl scale-[1.02]'
                    : 'bg-[#f8f5ee] text-taste-ink border-taste-rule hover:border-taste-coral/40 shadow-sm'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 right-8 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-taste-coral text-white shadow-md">
                    Selected Track
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest block mb-2 text-taste-coral">
                      {model.badge}
                    </span>
                    <h3 className={`font-display text-2xl font-bold tracking-tight ${
                      isHighlighted ? 'text-white' : 'text-taste-navy'
                    }`}>
                      {model.title}
                    </h3>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    isHighlighted ? 'text-white/80' : 'text-taste-ink/75'
                  }`}>
                    {model.desc}
                  </p>

                  <div className={`p-4 rounded-2xl border ${
                    isHighlighted ? 'bg-white/10 border-white/15' : 'bg-taste-paper border-taste-rule'
                  }`}>
                    <div className="text-lg font-bold font-display tracking-tight">
                      {model.price}
                    </div>
                    <div className={`text-xs mt-0.5 ${
                      isHighlighted ? 'text-white/60' : 'text-taste-ink/50'
                    }`}>
                      {model.cohort}
                    </div>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {model.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-taste-coral" />
                        <span className={isHighlighted ? 'text-white/90' : 'text-taste-ink/80'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-taste-rule/40">
                  <a
                    href="#contact"
                    className={`w-full py-3 px-6 rounded-full text-xs sm:text-sm font-bold tracking-tight inline-flex items-center justify-center gap-2 transition active:scale-95 ${
                      isHighlighted
                        ? 'bg-taste-coral text-white hover:bg-taste-coral/90'
                        : 'bg-taste-navy text-taste-paper hover:bg-taste-navy/90'
                    }`}
                  >
                    <span>{t.pricing.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included vs Excluded Spec */}
        <div className="bg-[#ede7dd] rounded-3xl p-8 sm:p-12 border border-taste-rule space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-taste-rule">
            <ShieldCheck className="w-6 h-6 text-taste-coral" />
            <h3 className="font-display text-2xl font-bold text-taste-navy">
              {t.pricing.inclusionsTitle} &amp; {t.pricing.exclusionsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Included */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-taste-navy uppercase tracking-widest block">
                ✓ {t.pricing.inclusionsTitle}
              </span>
              <ul className="space-y-2.5">
                {t.pricing.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-taste-ink/85">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-600/20 text-emerald-700 shrink-0 mt-0.5 text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-taste-ink/50 uppercase tracking-widest block">
                — {t.pricing.exclusionsTitle}
              </span>
              <ul className="space-y-2.5">
                {t.pricing.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-taste-ink/60">
                    <Minus className="w-4 h-4 text-taste-ink/40 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
