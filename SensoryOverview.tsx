import React, { useState } from 'react';
import { SPICES_DATA } from '../data/spices';
import { SensoryMatrix } from './SensoryMatrix';
import { SpiceItem } from '../types';
import { Sparkles, Sliders, ShieldCheck, Flame, Droplet, Eye } from 'lucide-react';
import { DividerRibbon } from './DividerRibbon';

interface SensoryOverviewProps {
  onOpenDetails: (spice: SpiceItem) => void;
}

export const SensoryOverview: React.FC<SensoryOverviewProps> = ({ onOpenDetails }) => {
  const [activeSpiceId, setActiveSpiceId] = useState<string>(SPICES_DATA[0].id);

  const currentSpice = SPICES_DATA.find((s) => s.id === activeSpiceId) || SPICES_DATA[0];

  return (
    <section id="sensory-overview" className="py-20 bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#DFB96C]/60 text-[11px] uppercase tracking-[0.18em] font-sans font-bold text-[#8C5535]">
            <Sliders className="w-3.5 h-3.5 text-[#C8A253]" />
            Organoleptic Science
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221B]">
            The Sensory Tasting Matrix
          </h2>
          <p className="text-sm sm:text-base text-[#414942] leading-relaxed font-sans">
            Every harvest lot is evaluated for volatile oil density, natural esters, and olfactory nuance. Compare the organoleptic fingerprints of our single-origin harvests.
          </p>
        </div>

        <DividerRibbon variant="leaf" className="my-6" />

        {/* Interactive Matrix Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Left: Spice Picker & Organoleptic Bar */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#18221B] px-1">
              Select Botanical Harvest to Calibrate:
            </h4>
            
            <div className="space-y-2">
              {SPICES_DATA.map((spice) => {
                const isActive = spice.id === activeSpiceId;
                return (
                  <button
                    key={spice.id}
                    onClick={() => setActiveSpiceId(spice.id)}
                    className={`w-full p-4 rounded-xl text-left border transition-all duration-200 flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-[#FFFFFF] border-[#1B432C] shadow-botanical-sm ring-1 ring-[#1B432C]'
                        : 'bg-[#F4EFE6] border-[#1B432C]/10 hover:border-[#1B432C]/30 hover:bg-[#F0EEE9]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={spice.imageUrl}
                        alt={spice.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-lg object-cover bg-[#EAE8E3] shrink-0 border border-[#1B432C]/10"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#8C5535] block">
                          {spice.grade}
                        </span>
                        <h5 className="font-serif text-sm font-semibold text-[#18221B] truncate">
                          {spice.name}
                        </h5>
                        <p className="text-[11px] text-[#727972] truncate">
                          {spice.estate} · {spice.elevation}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs font-bold text-[#1B432C] block">
                        {spice.volatileOilPercent}%
                      </span>
                      <span className="text-[10px] text-[#727972] font-sans">Volatile Oil</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: The Full Matrix Inspection Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#1B432C]/15 shadow-botanical-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1B432C]/10">
                <div>
                  <span className="text-xs font-serif italic text-[#8C5535]">
                    {currentSpice.botanicalName}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#18221B]">
                    {currentSpice.name}
                  </h3>
                </div>

                <button
                  onClick={() => onOpenDetails(currentSpice)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE8E3] text-[#1B432C] text-xs font-sans font-semibold border border-[#1B432C]/10 transition-colors self-start sm:self-auto"
                >
                  <Eye className="w-3.5 h-3.5 text-[#8C5535]" />
                  <span>Inspect Dossier</span>
                </button>
              </div>

              {/* Embed full matrix */}
              <SensoryMatrix
                aromaScore={currentSpice.aromaScore}
                heatScore={currentSpice.heatScore}
                sweetnessScore={currentSpice.sweetnessScore}
                oilPotencyScore={currentSpice.oilPotencyScore}
                volatileOilPercent={currentSpice.volatileOilPercent}
                coumarinPercent={currentSpice.coumarinPercent}
                compact={false}
              />

              {/* Sensory Spectrum Chips & Narrative */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#414942] block">
                  Aromatherapy & Sommelier Cupping Notes
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentSpice.tastingNotes.map((note, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-[#F5F3EE] border border-[#DFB96C]/40 text-xs font-sans font-medium text-[#18221B] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#C8A253]" />
                      {note}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#414942] leading-relaxed pt-2">
                  Cupping method follows certified botanical protocols: powdered sample infused at 85°C in spring water, evaluating initial vapor dispersion, mid-palate sweetness, and lingering finish on the retro-nasal passage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
