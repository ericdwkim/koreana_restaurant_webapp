'use client';

import React, { useState } from 'react';

export const RenovationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const closureStart = new Date('2026-06-08T00:00:00');
  const closureEnd = new Date('2026-06-11T00:00:00');
  const now = new Date();

  const isActive = now < closureEnd;

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 300);
  };

  if (!isActive || isDismissed) return null;

  const isCurrentlyClosed = now >= closureStart && now < closureEnd;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r from-red-1001 via-red-800 to-red-1001 text-white transition-all duration-300 ease-in-out ${
        isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xl flex-shrink-0" role="img" aria-label="construction">
            🏗️
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-sm sm:text-base leading-tight">
              {isCurrentlyClosed
                ? 'We are currently closed for renovations'
                : 'Upcoming closure for renovations'}
            </p>
            <p className="text-xs sm:text-sm text-red-100 leading-tight mt-0.5">
              Monday, June 8 – Wednesday, June 10, 2026 · We'll be back with a fresh new look!
            </p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RenovationBanner;
