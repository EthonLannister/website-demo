'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function LogoMarquee() {
  const { t } = useLanguage();
  const logos = [
    { src: '/logos/deepseek-text.svg', alt: 'DeepSeek' },
    { src: '/logos/qwen-text-1.svg', alt: 'Qwen' },
    { src: '/logos/kimi-text.svg', alt: 'Kimi' },
    { src: '/logos/zhipu-text.svg', alt: 'Zhipu AI' },
    { src: '/logos/minimax-text.svg', alt: 'MiniMax' },
    { src: '/logos/moonshot-text.svg', alt: 'Moonshot' },
    { src: '/logos/alibaba-brand.svg', alt: 'Alibaba' },
    { src: '/logos/tencent-brand.svg', alt: 'Tencent' },
    { src: '/logos/baidu-brand.svg', alt: 'Baidu' },
    { src: '/logos/unitree.png', alt: 'Unitree Robotics' },
    { src: '/logos/xpeng.png', alt: 'XPeng' },
    { src: '/logos/volcengine-text-1.svg', alt: 'Volcengine' },
    { src: '/logos/xiaomimimo-text.svg', alt: 'Xiaomi' },
    { src: '/logos/lenovo.svg', alt: 'Lenovo' },
    { src: '/logos/kling-text.svg', alt: 'Kling' },
  ];

  const marqueeItems = [...logos, ...logos];

  return (
    <div className="py-8 bg-surface-cream border-y border-ink/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
          {t.marquee.label}
        </span>
        <span className="text-xs font-bold text-accent">
          {t.marquee.tag}
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 items-center gap-10 py-2 animate-hero-marquee">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex h-12 w-[140px] shrink-0 items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={120}
                height={36}
                className="max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
