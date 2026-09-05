import React from 'react';
import { Sparkles, Shield, ArrowRight, Compass, Award } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
  onSelectHeroSpice: (spiceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onStoryClick,
  onSelectHeroSpice,
}) => {
  return (
    <section id="hero" className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Decorative Warm Ambient Botanical Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B432C]/3 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#DFB96C]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Terroir Stamp Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#DFB96C]/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7FA038] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-sans font-bold text-[#8C5535]">
                Single-Origin Ceylon Terroir · Autumn 2026 Micro-Lots
              </span>
            </div>

            {/* Display Hero Heading */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#18221B] tracking-tight leading-[1.12]">
                The Pure Essence of <span className="italic font-normal text-[#1B432C]">Heirloom</span> Ceylon Spices.
              </h1>
              <p className="text-base sm:text-lg text-[#414942] max-w-2xl font-sans font-normal leading-relaxed pt-2">
                Hand-harvested in misty highland agroforests. From delicate, 40-ply hand-rolled <strong className="font-semibold text-[#1B432C]">Grade Alba Cinnamon</strong> to cured bourbon-type vanilla beans—distinguished by exceptional volatile oils and ultra-low coumarin purity.
              </p>
            </div>

            {/* Core Botanical Authenticity Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-y border-[#1B432C]/10 py-5 max-w-xl">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B432C]">
                  &lt;0.004%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8C5535] font-sans font-semibold mt-0.5">
                  Coumarin Tested
                </div>
                <div className="text-[10px] text-[#727972] font-sans">True Ceylon, Not Cassia</div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B432C]">
                  40-Ply
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8C5535] font-sans font-semibold mt-0.5">
                  Hand-Rolled Quills
                </div>
                <div className="text-[10px] text-[#727972] font-sans">Paper-thin inner bark</div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B432C]">
                  1,100m
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8C5535] font-sans font-semibold mt-0.5">
                  Highland Terroir
                </div>
                <div className="text-[10px] text-[#727972] font-sans">Knuckles cloud forest</div>
              </div>
            </div>

            {/* Action Buttons following Design System */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-explore-button"
                onClick={onExploreClick}
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4] rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans transition-all duration-300 shadow-botanical-md hover:shadow-botanical-lg active:scale-95 group"
              >
                <span>Acquire Estate Harvest</span>
                <ArrowRight className="w-4 h-4 text-[#C8A253] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-terroir-button"
                onClick={onStoryClick}
                className="flex items-center justify-center gap-2 px-6 py-4 border-1.5 border-[#8C5535] text-[#5A3825] hover:bg-[#8C5535] hover:text-[#FBF9F4] rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-[#8C5535] group-hover:text-white" />
                <span>The Terroir Story</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage with Layered Slate & Quills Photography */}
          <div className="lg:col-span-5 relative">
            {/* Primary Visual Slate Showcase (matches Image 2 gourmet spice flatlay on black slate) */}
            <div className="relative rounded-2xl overflow-hidden shadow-botanical-lg border border-[#1B432C]/15 bg-[#EAE8E3]">
              <img
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop"
                alt="Single origin Ceylon spices flatlay on dark slate with cinnamon quills, peppercorn, cardamom, and brass spoon"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18221B]/75 via-transparent to-black/10" />

              {/* In-Image Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#C0EDCC] block">
                    Estate Reserve Flatlay
                  </span>
                  <p className="font-serif text-lg font-bold">The Sommelier Spicery Table</p>
                </div>

                <button
                  onClick={() => onSelectHeroSpice('ceylon-alba-cinnamon')}
                  className="px-3 py-1.5 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#1B432C] text-[11px] font-sans font-bold uppercase tracking-wider rounded-md shadow-xs transition-colors"
                >
                  Inspect Alba Quills
                </button>
              </div>
            </div>

            {/* Overlapping Secondary Card (matches Image 3: close up of Alba quills with dust) */}
            <div className="mt-4 sm:-mt-12 sm:ml-auto sm:mr-4 max-w-xs relative z-10 bg-[#FFFFFF] rounded-xl p-3 border border-[#DFB96C]/60 shadow-botanical-md flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=300&auto=format&fit=crop"
                alt="Macro view of paper-thin Ceylon cinnamon quills"
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-lg object-cover bg-[#EAE8E3] shrink-0 border border-[#1B432C]/10"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[#8C5535] text-[10px] font-bold uppercase tracking-wider font-sans">
                  <Sparkles className="w-3 h-3 text-[#C8A253]" />
                  Grade Alba
                </div>
                <h4 className="font-serif text-xs font-bold text-[#18221B] truncate">
                  Paper-Thin Multi-Layer Quills
                </h4>
                <p className="text-[10px] text-[#727972] font-sans mt-0.5">
                  Naturally sweet, sun-dried on coir.
                </p>
              </div>
            </div>

            {/* Subtle floating leaf monogram seal */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#FBF9F4] p-2 rounded-full border border-[#DFB96C]/70 shadow-botanical-sm hidden sm:block">
              <Logo size={42} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
