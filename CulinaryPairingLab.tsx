import React, { useState } from 'react';
import { SPICES_DATA } from '../data/spices';
import { SpiceItem } from '../types';
import { Sparkles, UtensilsCrossed, Thermometer, Clock, ArrowRight, ShoppingBag, Check } from 'lucide-react';

interface CulinaryPairingLabProps {
  onAddToCart: (spice: SpiceItem) => void;
}

export const CulinaryPairingLab: React.FC<CulinaryPairingLabProps> = ({ onAddToCart }) => {
  const [selectedSpiceId, setSelectedSpiceId] = useState<string>(SPICES_DATA[0].id);
  const [activeTempSetting, setActiveTempSetting] = useState<'infusion' | 'baking' | 'braise'>('infusion');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const selectedSpice = SPICES_DATA.find((s) => s.id === selectedSpiceId) || SPICES_DATA[0];

  const thermalProtocols = {
    infusion: {
      title: 'Gentle Liquid Infusion (Syrup, Cream, Broth)',
      temp: '82°C – 88°C (Sub-Boil)',
      duration: '18 – 25 Minutes',
      advice: 'Never boil true Ceylon Alba quills violently. Gentle simmering coaxes delicate cinnamaldehyde without releasing bitter tannins.',
    },
    baking: {
      title: 'High Heat Lamination & Pastry',
      temp: '175°C – 190°C Oven',
      duration: '35 – 45 Minutes',
      advice: 'Stone-ground quills caramelize smoothly into dairy fats and brown sugars, releasing warm sweet woody aromas.',
    },
    braise: {
      title: 'Savory Slow Reduction & Game',
      temp: '95°C Low & Slow',
      duration: '2.5 – 4 Hours',
      advice: 'Tuck whole quills and peppercorns into cheesecloth. Melts with red wine and shallots into a deep velvet finish.',
    },
  };

  const currentProtocol = thermalProtocols[activeTempSetting];

  const handleAddSpice = () => {
    onAddToCart(selectedSpice);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1500);
  };

  return (
    <section id="culinary-lab" className="py-16 sm:py-24 bg-[#F5F3EE] border-y border-[#1B432C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DFB96C]/60 text-[11px] uppercase tracking-[0.18em] font-sans font-bold text-[#8C5535] shadow-xs">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C8A253]" />
            Epicurean Workshop
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221B]">
            Culinary Pairing & Infusion Lab
          </h2>
          <p className="text-sm sm:text-base text-[#414942] leading-relaxed font-sans">
            Single-origin Ceylon spices possess delicate, volatile terpene profiles distinctly different from industrial spices. Select a harvest to explore molecular flavor synergies and precise temperature protocols.
          </p>
        </div>

        {/* Interactive Selector Pill Carousel */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8">
          {SPICES_DATA.map((spice) => {
            const isSelected = spice.id === selectedSpiceId;
            return (
              <button
                key={spice.id}
                onClick={() => setSelectedSpiceId(spice.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#1B432C] text-[#FBF9F4] shadow-botanical-sm scale-105'
                    : 'bg-[#FFFFFF] text-[#414942] border border-[#1B432C]/10 hover:border-[#1B432C]/40 hover:bg-[#FBF9F4]'
                }`}
              >
                {spice.name.split(' ')[0]} {spice.name.split(' ')[1]}
              </button>
            );
          })}
        </div>

        {/* Workshop Dashboard Main Container */}
        <div className="mt-10 bg-[#FFFFFF] rounded-2xl border border-[#1B432C]/15 shadow-botanical-md overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: Featured Spice Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EAE8E3] border border-[#1B432C]/10">
                <img
                  src={selectedSpice.imageUrl}
                  alt={selectedSpice.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#C0EDCC] block">
                    {selectedSpice.grade}
                  </span>
                  <h3 className="font-serif text-xl font-bold">{selectedSpice.name}</h3>
                </div>
              </div>

              {/* Organoleptic Balance Notes */}
              <div className="bg-[#FBF9F4] rounded-xl p-4 border border-[#1B432C]/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[#8C5535] font-semibold uppercase tracking-wider">
                    Terpene Profile
                  </span>
                  <span className="text-[#1B432C] font-mono font-bold">
                    {selectedSpice.volatileOilPercent}% Volatile Oil
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSpice.tastingNotes.map((note, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded bg-[#FFFFFF] border border-[#1B432C]/10 text-xs text-[#18221B] font-sans"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddSpice}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider font-sans transition-all duration-200 shadow-botanical-sm ${
                  addedSuccess
                    ? 'bg-[#7FA038] text-white'
                    : 'bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4]'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Reserve Basket
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#C8A253]" />
                    Reserve This Spice (${selectedSpice.pricePerUnit})
                  </>
                )}
              </button>
            </div>

            {/* Column 2: Culinary Synergies & Temperature Control */}
            <div className="lg:col-span-7 space-y-6">
              {/* Synergies List */}
              <div>
                <h4 className="font-serif text-xl font-bold text-[#18221B] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C8A253]" />
                  Curated Gastronomic Harmonizations
                </h4>
                <p className="text-xs text-[#727972] font-sans mt-1">
                  Tested by our estate sommelier to elevate sweet, savory, and liquid gastronomy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {selectedSpice.pairings.map((pair, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#FBF9F4] border border-[#1B432C]/10 hover:border-[#DFB96C]/60 transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <strong className="font-serif text-sm text-[#1B432C] block">
                          {pair.name}
                        </strong>
                        <p className="text-xs text-[#414942] mt-1 leading-snug">
                          {pair.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#1B432C]/5 text-[11px] font-sans text-[#8C5535] font-medium flex items-center gap-1">
                        <ArrowRight className="w-3 h-3 shrink-0" />
                        <span>{pair.recipeIdea}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermal Extraction Protocols */}
              <div className="p-5 rounded-xl bg-[#F5F3EE] border border-[#DFB96C]/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h5 className="font-serif text-base font-semibold text-[#18221B] flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-[#8C5535]" />
                    Thermal Extraction Calibration
                  </h5>

                  {/* Mode Buttons */}
                  <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-lg border border-[#1B432C]/10 text-xs font-sans">
                    {(['infusion', 'baking', 'braise'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setActiveTempSetting(mode)}
                        className={`px-2.5 py-1 rounded capitalize font-medium transition-colors ${
                          activeTempSetting === mode
                            ? 'bg-[#1B432C] text-[#FBF9F4]'
                            : 'text-[#727972] hover:text-[#18221B]'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-lg p-4 border border-[#1B432C]/5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1B432C]/5 pb-2 text-xs font-sans">
                    <span className="font-bold text-[#1B432C]">{currentProtocol.title}</span>
                    <div className="flex items-center gap-3 text-[#8C5535]">
                      <span className="flex items-center gap-1 font-mono font-semibold">
                        <Thermometer className="w-3 h-3 text-[#7FA038]" />
                        {currentProtocol.temp}
                      </span>
                      <span className="flex items-center gap-1 font-mono font-semibold">
                        <Clock className="w-3 h-3 text-[#C8A253]" />
                        {currentProtocol.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#414942] leading-relaxed">
                    {currentProtocol.advice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
