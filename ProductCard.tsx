import React from 'react';
import { SpiceItem } from '../types';
import { SensoryMatrix } from './SensoryMatrix';
import { ShoppingBag, Eye, Award, Sparkles } from 'lucide-react';

interface ProductCardProps {
  spice: SpiceItem;
  onOpenDetails: (spice: SpiceItem) => void;
  onAddToCart: (spice: SpiceItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  spice,
  onOpenDetails,
  onAddToCart,
}) => {
  return (
    <div
      id={`spice-card-${spice.id}`}
      className="group relative flex flex-col bg-[#F4EFE6] rounded-2xl overflow-hidden border border-[#1B432C]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-botanical-md"
    >
      {/* Visual Image Showcase */}
      <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-[#EAE8E3]">
        <img
          src={spice.imageUrl}
          alt={spice.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18221B]/60 via-transparent to-black/10 opacity-70 group-hover:opacity-85 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF9F4]/95 backdrop-blur-xs text-[10px] uppercase tracking-[0.14em] font-sans font-bold text-[#1B432C] shadow-xs border border-[#DFB96C]/60">
            <Sparkles className="w-3 h-3 text-[#C8A253]" />
            {spice.grade}
          </span>
          
          <span className="px-2.5 py-0.5 rounded-full bg-[#1B432C]/85 text-[#FBF9F4] text-[10px] font-sans tracking-wider">
            {spice.elevation}
          </span>
        </div>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <button
            id={`btn-quick-view-${spice.id}`}
            onClick={() => onOpenDetails(spice)}
            className="flex items-center gap-2 px-4 py-2 bg-[#FBF9F4] hover:bg-[#FFFFFF] text-[#1B432C] rounded-full text-xs font-semibold tracking-wider uppercase font-sans shadow-botanical-sm transition-transform duration-200 active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-[#8C5535]" />
            Inspect Terroir Dossier
          </button>
        </div>

        {/* Bottom Estate Tag within Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#FBF9F4]">
          <span className="text-xs font-sans tracking-wide drop-shadow-sm font-medium">
            {spice.estate}
          </span>
          <span className="text-[11px] text-[#C0EDCC] font-mono tracking-tighter">
            Lot {spice.batchNumber}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col grow p-5 sm:p-6 justify-between gap-4">
        <div>
          {/* Botanical Nomenclature */}
          <p className="text-[11px] italic font-serif text-[#8C5535] tracking-wide mb-1">
            {spice.botanicalName}
          </p>

          <h3 className="font-serif text-xl font-semibold text-[#18221B] leading-tight group-hover:text-[#1B432C] transition-colors">
            {spice.name}
          </h3>

          <p className="text-xs text-[#414942] line-clamp-2 mt-2 leading-relaxed">
            {spice.tagline}
          </p>

          {/* Tasting Note Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {spice.tastingNotes.slice(0, 3).map((note, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-sm bg-[#FFFFFF] border border-[#1B432C]/10 text-[10px] text-[#414942] font-sans"
              >
                {note}
              </span>
            ))}
            {spice.tastingNotes.length > 3 && (
              <span className="px-1.5 py-0.5 text-[10px] text-[#8C5535] font-sans">
                +{spice.tastingNotes.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Sensory Matrix Preview */}
        <div className="bg-[#FFFFFF]/70 rounded-lg p-3 border border-[#1B432C]/5">
          <SensoryMatrix
            aromaScore={spice.aromaScore}
            heatScore={spice.heatScore}
            sweetnessScore={spice.sweetnessScore}
            oilPotencyScore={spice.oilPotencyScore}
            volatileOilPercent={spice.volatileOilPercent}
            coumarinPercent={spice.coumarinPercent}
            compact={true}
          />
        </div>

        {/* Pricing & Interactive Action */}
        <div className="pt-3 border-t border-[#1B432C]/10 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold text-[#1B432C]">
                ${spice.pricePerUnit}
              </span>
              <span className="text-[11px] text-[#727972] font-sans">USD</span>
            </div>
            <span className="text-[10px] text-[#8C5535] uppercase tracking-wider block">
              {spice.unit}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id={`btn-add-cart-${spice.id}`}
              onClick={() => onAddToCart(spice)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4] rounded-lg text-xs font-semibold tracking-wider font-sans transition-all duration-200 active:scale-95 shadow-botanical-sm hover:shadow-botanical-md"
              title="Add to Reserve Tasting Basket"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C8A253]" />
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
