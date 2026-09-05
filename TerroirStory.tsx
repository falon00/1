import React from 'react';
import { Compass, Leaf, Award, Mountain, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { DividerRibbon } from './DividerRibbon';

export const TerroirStory: React.FC = () => {
  return (
    <section id="terroir-story" className="py-20 bg-[#FBF9F4] text-[#18221B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#DFB96C]/60 text-[11px] uppercase tracking-[0.18em] font-sans font-bold text-[#8C5535]">
            <Compass className="w-3.5 h-3.5 text-[#C8A253]" />
            Ancestral Terroir & Heritage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221B]">
            From the Misted Ridges of Ceylon
          </h2>
          <p className="text-sm sm:text-base text-[#414942] leading-relaxed font-sans">
            In the secluded bio-reserves of central Sri Lanka, ancient spice gardens thrive in harmonious polycultures under towering shade trees, cooled by Indian Ocean trade winds and monsoon mists.
          </p>
        </div>

        <DividerRibbon variant="brass_pip" className="my-6" />

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Visual Showcase: The 40-Layer Hand-Rolled Quill */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-botanical-lg border border-[#1B432C]/15">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                alt="Misty Ceylon tea and spice estate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012D18]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#C0EDCC]">
                  Knuckles & Matale Agroforestry
                </span>
                <h3 className="font-serif text-2xl font-bold">The Rainforest Canopy Sanctuary</h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  Spices cultivated in multi-tier forest gardens where wild pollinators, tropical legumes, and cardamom plants sustain balanced micro-nutrients without artificial fertilizers.
                </p>
              </div>
            </div>

            {/* Floating Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#FFFFFF] p-4 rounded-xl border border-[#DFB96C]/60 shadow-botanical-md max-w-xs space-y-1 hidden sm:block">
              <div className="flex items-center gap-2 text-[#8C5535] text-xs font-bold font-serif">
                <Leaf className="w-4 h-4 text-[#7FA038]" />
                The 40-Ply Inner Bark
              </div>
              <p className="text-[11px] text-[#414942] font-sans">
                True Alba cinnamon is never a rough wood chunk; it consists of concentric rolls of paper-thin inner bark hand-rolled within 6 hours of harvest.
              </p>
            </div>
          </div>

          {/* Narrative Pillar Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B432C]">
                Why Ceylon True Cinnamon Stands Apart
              </h3>
              <p className="text-sm text-[#414942] leading-relaxed">
                90% of spices sold worldwide labeled as &quot;cinnamon&quot; are actually cheap Cassia bark—tough, dark red-brown, hollow tubes loaded with coumarin. Authentic Ceylon Alba (<em>Cinnamomum verum</em>) is hand-peeled exclusively in Sri Lanka, boasting delicate parchment layers, a sweet floral nectar taste, and undetectable trace coumarin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#1B432C]/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#1B432C] text-[#FBF9F4] flex items-center justify-center">
                  <Mountain className="w-4 h-4 text-[#C8A253]" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#18221B]">
                  Highland Elevation
                </h4>
                <p className="text-xs text-[#414942] leading-relaxed">
                  Steep slope plantations between 450m and 1,100m stress the trees naturally, concentrating rare volatile terpenes and sweet cinnamaldehyde esters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#1B432C]/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#8C5535] text-[#FBF9F4] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4 text-[#C8A253]" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#18221B]">
                  Master Peeler Guild
                </h4>
                <p className="text-xs text-[#414942] leading-relaxed">
                  Generational artisans receive 3.5× fair trade living wages, supporting village medical dispensaries and traditional agroforestry conservation.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1B432C]/10">
              <ul className="space-y-2 text-xs font-sans text-[#414942]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7FA038] shrink-0" />
                  <span>100% Monovarietal Single-Estate Harvests (Never blended with Cassia)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7FA038] shrink-0" />
                  <span>Slow shade-drying preserves volatile floral notes and natural pigments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7FA038] shrink-0" />
                  <span>Sealed in UV-resistant apothecary vessels directly at our estate facility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
