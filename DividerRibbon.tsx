import React from 'react';

interface DividerRibbonProps {
  className?: string;
  variant?: 'leaf' | 'brass_pip' | 'monogram';
}

export const DividerRibbon: React.FC<DividerRibbonProps> = ({
  className = '',
  variant = 'leaf',
}) => {
  return (
    <div className={`relative flex items-center justify-center py-6 w-full ${className}`}>
      <div className="grow h-px bg-gradient-to-r from-transparent via-[#1B432C]/15 to-[#1B432C]/25" />
      
      <div className="mx-4 shrink-0 flex items-center justify-center">
        {variant === 'leaf' && (
          <div className="flex items-center gap-1 text-[#7FA038]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-45">
              <path
                d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                stroke="#1B432C"
                strokeWidth="1.2"
                fill="#7FA038"
                fillOpacity="0.25"
              />
              <path d="M16 8L2 22" stroke="#8C5535" strokeWidth="1" strokeLinecap="round" />
              <path d="M17.5 15H9" stroke="#C8A253" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {variant === 'brass_pip' && (
          <div className="w-2.5 h-2.5 rotate-45 border border-[#C8A253] bg-[#FBF9F4] shadow-xs" />
        )}

        {variant === 'monogram' && (
          <div className="px-3 py-1 bg-[#F5F3EE] rounded-full border border-[#DFB96C]/40 text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-[#1B432C]">
            Est. Ceylon 1892
          </div>
        )}
      </div>

      <div className="grow h-px bg-gradient-to-l from-transparent via-[#1B432C]/15 to-[#1B432C]/25" />
    </div>
  );
};
