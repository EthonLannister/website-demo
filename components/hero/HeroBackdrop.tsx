'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

export function HeroBackdrop() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check motion preference and data-saver
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSaveData = (navigator as any).connection?.saveData;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isSaveData || isMobile) {
      return;
    }

    // Lazy load video stream using IntersectionObserver
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.src) {
          video.src = '/14074714_1920_1080_25fps.mp4';
          video.load();
        }
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Background Poster Image */}
      <div className="absolute inset-0">
        <Image
          src="/experiences/smart-manufacturing.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.35] contrast-[1.2]"
        />
      </div>

      {/* Ambient Looping Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover filter brightness-[0.32] contrast-[1.15]"
      />

      {/* Gradient Overlays: Deep Midnight Blue to preserve high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-taste-navy via-taste-navy/80 to-taste-navy/40" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-taste-navy/60 to-taste-navy" />
    </div>
  );
}
