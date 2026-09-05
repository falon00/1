import React from 'react';

interface SensoryMatrixProps {
  aromaScore: number; // 1-5
  heatScore: number; // 1-5
  sweetnessScore: number; // 1-5
  oilPotencyScore: number; // 1-5
  volatileOilPercent: number;
  coumarinPercent: number;
  compact?: boolean;
}

export const SensoryMatrix: React.FC<SensoryMatrixProps> = ({
  aromaScore,
  heatScore,
  sweetnessScore,
  oilPotencyScore,
  volatileOilPercent,
  coumarinPercent,
  compact = false,
}) => {
  const renderPips = (score: number, max = 5, color: 'leaf' | 'cinnamon' | 'brass') => {
    const colorClasses = {
      leaf: {
        active: 'bg-[#7FA038] border-[#1B432C]',
        inactive: 'bg-[#F4EFE6] border-[#C1C8C0]',
      },
      cinnamon: {
        active: 'bg-[#8C5535] border-[#5A3825]',
        inactive: 'bg-[#F4EFE6] border-[#C1C8C0]',
      },
      brass: {
        active: 'bg-[#C8A253] border-[#794527]',
        inactive: 'bg-[#F4EFE6] border-[#C1C8C0]',
      },
    };

    return (
      <div className="flex items-center gap-1.5">
        {Array.from({ length: max }).map((_, index) => {
          const filled = index < score;
          return (
            <span
              key={index}
              className={`w-3 h-2 rounded-xs border transition-all duration-300 ${
                filled
                  ? `${colorClasses[color].active} scale-105 shadow-xs`
                  : `${colorClasses[color].inactive} opacity-40`
              }`}
              title={`${score} of ${max}`}
            />
          );
        })}
      </div>
    );
  };

  if (compact) {
    return (
      <div className="space-y-2 text-xs font-sans">
        <div className="flex items-center justify-between">
          <span className="text-[#414942] font-medium tracking-wide">Aroma Bloom</span>
          {renderPips(aromaScore, 5, 'leaf')}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#414942] font-medium tracking-wide">Sweet Undertone</span>
          {renderPips(sweetnessScore, 5, 'brass')}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#414942] font-medium tracking-wide">Warmth & Heat</span>
          {renderPips(heatScore, 5, 'cinnamon')}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4EFE6] rounded-xl p-5 border border-[#1B432C]/10 shadow-botanical-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#1B432C]/10 mb-4">
        <h4 className="font-serif text-base font-semibold text-[#1B432C] tracking-wide flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7FA038]" />
          Organoleptic Tasting Matrix
        </h4>
        <span className="text-[10px] uppercase tracking-[0.14em] font-sans font-bold text-[#8C5535] bg-[#FBF9F4] px-2.5 py-0.5 rounded-full border border-[#DFB96C]/50">
          Lab Certified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[#18221B] font-medium">Aroma Intensity</span>
            <span className="text-[#7FA038] font-bold">{aromaScore}/5</span>
          </div>
          {renderPips(aromaScore, 5, 'leaf')}
          <p className="text-[11px] text-[#727972]">Floral, balsamic terpenes</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[#18221B] font-medium">Sweet Undertone</span>
            <span className="text-[#C8A253] font-bold">{sweetnessScore}/5</span>
          </div>
          {renderPips(sweetnessScore, 5, 'brass')}
          <p className="text-[11px] text-[#727972]">Sun-ripened wood nectar</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[#18221B] font-medium">Warmth & Bite</span>
            <span className="text-[#8C5535] font-bold">{heatScore}/5</span>
          </div>
          {renderPips(heatScore, 5, 'cinnamon')}
          <p className="text-[11px] text-[#727972]">Lingering spicy resonance</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[#18221B] font-medium">Volatile Oil Potency</span>
            <span className="text-[#1B432C] font-bold">{volatileOilPercent}% v/w</span>
          </div>
          {renderPips(oilPotencyScore, 5, 'leaf')}
          <p className="text-[11px] text-[#727972]">Cinnamaldehyde & Eugenol</p>
        </div>
      </div>

      {/* Coumarin Safety Benchmark Bar */}
      <div className="mt-4 pt-3 border-t border-[#1B432C]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7FA038] flex items-center justify-center text-[8px] text-white">✓</div>
          <span className="text-[#414942]">
            Coumarin Content: <strong className="text-[#1B432C]">{coumarinPercent.toFixed(4)}%</strong>
          </span>
        </div>
        <div className="text-[#8C5535] font-medium bg-[#FFF9F2] px-2 py-0.5 rounded border border-[#DFB96C]/30 text-[10px]">
          Ultra Safe (Cassia contains ~1.0%)
        </div>
      </div>
    </div>
  );
};
