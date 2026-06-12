'use client';

import React, { useState, useEffect } from 'react';

export const RenovationBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Only render after mounting on the client so the banner's time-sensitive
  // visibility is never baked into the prerendered/static HTML (which would
  // cause a stale flash on load). See git history for the bug this fixes.
  useEffect(() => {
    setMounted(true);
  }, []);

  const closureStart = new Date('2026-06-08T00:00:00');
  const closureEnd = new Date('2026-06-11T00:00:00');
  const now = new Date();

  const isActive = now < closureEnd;

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 300);
  };

  if (!mounted || !isActive || isDismissed) return null;

  const isCurrentlyClosed = now >= closureStart && now < closureEnd;

  const announcements = [
    {
      flag: '🇺🇸',
      heading: isCurrentlyClosed
        ? 'We are currently closed for renovations'
        : 'Upcoming closure for renovations',
      details: 'Monday, June 8 – Wednesday, June 10, 2026',
      tagline: 'We\u2019ll be back with a fresh new look!',
    },
    {
      flag: '🇲🇽',
      heading: isCurrentlyClosed
        ? 'Cerraremos por renovaciones'
        : 'Cerraremos por renovaciones',
      details: 'Lunes 8 de junio – Miércoles 10 de junio, 2026',
      tagline: '¡Volveremos con un nuevo look!',
    },
    {
      flag: '🇰🇷',
      heading: isCurrentlyClosed
        ? '현재 리모델링으로 인해 휴업 중입니다'
        : '리모델링을 위한 휴업 예정 안내',
      details: '6월 8일 월요일 – 6월 10일 수요일, 2026',
      tagline: '새로운 모습으로 돌아오겠습니다!',
    },
  ];

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r from-red-1001 via-red-800 to-red-1001 text-white transition-all duration-300 ease-in-out ${
        isVisible ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-5 sm:py-6">
        {/* Dismiss button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={handleDismiss}
            className="rounded-full p-1.5 hover:bg-white/20 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Construction icon */}
        <div className="text-center mb-4">
          <span className="text-3xl sm:text-4xl" role="img" aria-label="construction">🏗️</span>
        </div>

        {/* Language cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {announcements.map((a, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-4 text-center border border-white/20"
            >
              <span className="text-3xl sm:text-4xl block mb-2">{a.flag}</span>
              <p className="font-bold text-sm sm:text-base leading-snug mb-1.5">
                {a.heading}
              </p>
              <p className="text-xs sm:text-sm text-red-100 leading-snug">
                {a.details}
              </p>
              <p className="text-xs sm:text-sm text-red-100 leading-snug mt-1 italic">
                {a.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenovationBanner;
