'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { MapPin, Sparkles } from 'lucide-react';

export function StickyStackDeck() {
  const { t } = useLanguage();

  const experienceImages = [
    '/experiences/flying-car.webp',
    '/experiences/robotics-center.webp',
    '/experiences/smart-manufacturing.webp',
    '/experiences/huaqiangbei.webp',
    '/experiences/tech-store.webp',
    '/experiences/west-lake-tea.webp',
  ];

  return (
    <section id="experiences" className="bg-taste-paper py-24 md:py-36 px-6 lg:px-12 border-b border-taste-rule relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-taste-coral" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral">
              {t.experiences.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-taste-navy leading-[0.95]">
            {t.experiences.title}
          </h2>
          <p className="text-taste-ink/80 text-base sm:text-lg leading-relaxed">
            {t.experiences.desc}
          </p>
        </div>

        {/* Stacking Deck Container */}
        <div className="space-y-10 lg:space-y-12">
          {t.experiences.items.map((exp, index) => (
            <article
              key={exp.id}
              style={{
                top: `${6.5 + index * 1.2}rem`,
              }}
              className="lg:sticky bg-[#f9f6f0] rounded-3xl border border-taste-rule shadow-xl overflow-hidden transition-all duration-300 group hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Photo Column */}
                <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-taste-navy">
                  <Image
                    src={experienceImages[index] || experienceImages[0]}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="documentary-img object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-taste-navy/80 text-white backdrop-blur-md border border-white/20">
                      <MapPin className="w-3.5 h-3.5 text-taste-coral" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-taste-coral uppercase tracking-widest block">
                      {t.experiences.expPrefix}{index + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-taste-navy leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-base font-medium text-taste-coral tracking-tight">
                      {exp.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-taste-ink/80 leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-taste-rule flex items-center justify-between text-xs text-taste-ink/60 font-medium">
                    <span>{t.experiences.scheduling}</span>
                    <a
                      href="#contact"
                      className="text-taste-navy font-bold hover:text-taste-coral transition underline underline-offset-4"
                    >
                      {t.experiences.inquire}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
