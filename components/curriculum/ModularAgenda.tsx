'use client';

import React, { useState } from 'react';
import { useTourMode } from '@/components/providers/TourModeProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Calendar } from 'lucide-react';

export function ModularAgenda() {
  const { mode } = useTourMode();
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <section id="curriculum" className="bg-[#ede7dd] py-24 md:py-36 px-6 lg:px-12 border-b border-taste-rule">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral block">
            {t.curriculum.eyebrow}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-taste-navy leading-[0.95]">
            {t.curriculum.title}
          </h2>
          <p className="text-taste-ink/80 text-base sm:text-lg leading-relaxed">
            {t.curriculum.desc}
          </p>
        </div>

        {/* Day Selector Pills */}
        <div className="flex flex-wrap gap-2.5 pb-2 border-b border-taste-rule">
          {t.curriculum.days.map((day) => {
            const isCurrent = activeDay === day.dayNumber;
            const matchesMode = day.targetModes.includes(mode);
            return (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDay(day.dayNumber)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-taste-navy text-taste-paper shadow-md scale-105'
                    : matchesMode
                    ? 'bg-taste-paper text-taste-navy hover:bg-white border border-taste-rule'
                    : 'bg-taste-paper/50 text-taste-ink/40 hover:text-taste-navy border border-transparent'
                }`}
              >
                <span>{t.curriculum.dayPrefix}{day.dayNumber}</span>
                {matchesMode && <span className="w-1.5 h-1.5 rounded-full bg-taste-coral" />}
              </button>
            );
          })}
        </div>

        {/* Detailed Timeline View for Selected Day */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {t.curriculum.days.map((day) => {
            if (day.dayNumber !== activeDay) return null;
            return (
              <React.Fragment key={day.dayNumber}>
                {/* Left Overview Column */}
                <div className="lg:col-span-5 bg-taste-paper p-8 sm:p-10 rounded-3xl border border-taste-rule shadow-sm space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-taste-coral uppercase tracking-widest block">
                      {t.curriculum.dayPrefix}{day.dayNumber} {t.curriculum.briefingSuffix}
                    </span>
                    <h3 className="font-display text-3xl font-bold text-taste-navy tracking-tight leading-snug">
                      {day.themeTitle}
                    </h3>
                  </div>

                  <div className="py-3 px-4 rounded-xl bg-[#ece6dc] text-xs font-mono font-semibold text-taste-navy flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-taste-coral shrink-0" />
                    <span>{t.curriculum.focusPrefix} {day.hubLocation}</span>
                  </div>

                  <p className="text-sm text-taste-ink/75 leading-relaxed">
                    {t.curriculum.connectText}
                  </p>

                  <div className="pt-4 border-t border-taste-rule text-xs text-taste-ink/60">
                    <span>{t.curriculum.targetTracks} </span>
                    <span className="font-bold text-taste-navy capitalize">
                      {day.targetModes.join(' · ')}
                    </span>
                  </div>
                </div>

                {/* Right Activity List Column */}
                <div className="lg:col-span-7 bg-taste-paper p-8 sm:p-10 rounded-3xl border border-taste-rule shadow-sm space-y-6">
                  <h4 className="font-display text-xl font-bold text-taste-navy pb-3 border-b border-taste-rule">
                    {t.curriculum.agendaSchedule}
                  </h4>

                  <ul className="space-y-4">
                    {day.activities.map((act, actIdx) => (
                      <li
                        key={actIdx}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-[#f7f4ed] border border-taste-rule/40 hover:border-taste-coral/40 transition group"
                      >
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-taste-navy text-taste-paper text-xs font-mono font-bold shrink-0 mt-0.5">
                          0{actIdx + 1}
                        </span>
                        <div className="space-y-1">
                          <p className="text-sm sm:text-base font-medium text-taste-navy group-hover:text-taste-coral transition-colors">
                            {act}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-xl bg-taste-mist/40 border border-taste-rule/60 text-xs text-taste-ink/80 flex items-center justify-between">
                    <span>Looking for specific company hosts?</span>
                    <a href="#contact" className="font-bold text-taste-navy hover:text-taste-coral underline">
                      Scope tailored visits →
                    </a>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
