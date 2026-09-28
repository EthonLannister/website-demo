'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function TelemetryCard() {
  const { t } = useLanguage();

  const metrics = [
    { label: t.hero.telemetry.datesLabel, value: t.hero.telemetry.datesVal },
    { label: t.hero.telemetry.durationLabel, value: t.hero.telemetry.durationVal },
    { label: t.hero.telemetry.routeLabel, value: t.hero.telemetry.routeVal },
    { label: t.hero.telemetry.groupLabel, value: t.hero.telemetry.groupVal },
  ];

  return (
    <aside className="w-full max-w-xs shrink-0 self-end">
      <div className="rounded-box border border-white/20 bg-brand-navy/60 backdrop-blur-md shadow-xl p-5">
        <dl className="flex flex-col divide-y divide-white/15">
          {metrics.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between py-2.5 first:pt-0 last:pb-0">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                {item.label}
              </dt>
              <dd className="text-sm font-bold text-white tabular-nums tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
