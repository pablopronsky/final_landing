'use client';

import { useState } from 'react';
import Image from 'next/image';

export const ProofImage = ({
  src,
  alt,
  annotation,
  className = '',
  sizes = '(min-width: 768px) 50vw, 100vw',
}: {
  src: string;
  alt: string;
  annotation: string;
  className?: string;
  sizes?: string;
}) => {
  const [error, setError] = useState(false);

  return (
    <div className={`group relative bg-surface-2 rounded-[3px] border border-grafito overflow-hidden ${className}`}>
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-all duration-700 grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04]"
          onError={() => setError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/10 to-transparent" />
      <div className="grain-overlay opacity-[0.06]" />

      {/* corner ticks */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cobre/70" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cobre/70" />

      {/* technical annotation — leader line revealed on hover */}
      <div className="absolute left-4 bottom-4 right-4 flex items-end gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
        <span className="h-px bg-cobre w-6 mb-[7px] origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-hueso drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          {annotation}
        </span>
      </div>
    </div>
  );
};
