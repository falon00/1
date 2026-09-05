import React, { useState } from 'react';
import { SpiceItem, PackagingType, GrindType } from '../types';
import { SensoryMatrix } from './SensoryMatrix';
import { PACKAGING_DETAILS } from '../data/spices';
import { X, ShieldCheck, MapPin, Calendar, Compass, Award, Sparkles, Check, ShoppingBag, Droplets, Flame } from 'lucide-react';

interface HarvestProvenanceModalProps {
  spice: SpiceItem | null;
  onClose: () => void;
  onAddToCart: (spice: SpiceItem, packaging: PackagingType, grind: GrindType, quantity: number) => void;
}

export const HarvestProvenanceModal: React.FC<HarvestProvenanceModalProps> = ({
  spice,
  onClose,
  onAddToCart,
}) => {
  if (!spice) return null;

  const [selectedPackaging, setSelectedPackaging] = useState<PackagingType>('wax_sealed_vial');
  const [selectedGrind, setSelectedGrind] = useState<GrindType>('whole_quill');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'provenance' | 'sensory' | 'pairings'>('provenance');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const packagingInfo = PACKAGING_DETAILS[selectedPackaging];
  const totalPrice = (spice.pricePerUnit + packagingInfo.priceAdd) * quantity;

  const handleAdd = () => {
    onAddToCart(spice, selectedPackaging, selectedGrind, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div
        id="provenance-modal-content"
        className="relative z-10 w-full max-w-4xl bg-[#FBF9F4] rounded-2xl shadow-botanical-lg border border-[#1B432C]/15 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F4EFE6]/90 backdrop-blur-md border-b border-[#1B432C]/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-[#1B432C] text-[#FBF9F4] text-[10px] font-sans font-bold tracking-widest uppercase">
              Estate Dossier
            </span>
            <span className="text-xs font-mono text-[#8C5535] font-semibold">
              Batch {spice.batchNumber}
            </span>
          </div>

          <button
            id="close-provenance-modal"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAE8E3] text-[#18221B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Section: Photo + Quick Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#1B432C]/15 bg-[#EAE8E3] shadow-botanical-sm">
                <img
                  src={spice.imageUrl}
                  alt={spice.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#1B432C]/90 text-[#FBF9F4] px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-wider font-semibold border border-[#DFB96C]/40">
                  {spice.grade}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 text-[#18221B] px-3 py-1 rounded-md text-[11px] font-mono shadow-xs">
                  {spice.elevation}
                </div>
              </div>

              {/* Lab Quality Assurance Guarantee Seal */}
              <div className="p-3 bg-[#F5F3EE] rounded-lg border border-[#DFB96C]/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A253]/20 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#8C5535]" />
                </div>
                <div className="text-xs font-sans">
                  <p className="font-semibold text-[#18221B]">Authentic Ceylon Verification</p>
                  <p className="text-[#727972] text-[11px]">
                    Non-irradiated, zero synthetic pesticides, lab certified botanical identity.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Spice Narrative & Identity */}
            <div className="space-y-4">
              <div>
                <p className="text-xs italic font-serif text-[#8C5535]">{spice.botanicalName}</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18221B] mt-1">
                  {spice.name}
                </h2>
                <p className="text-sm text-[#414942] mt-2 leading-relaxed">
                  {spice.description}
                </p>
              </div>

              {/* Terroir & Origin Metrics List */}
              <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                <div className="p-2.5 bg-[#F4EFE6] rounded-md border border-[#1B432C]/5">
                  <span className="text-[10px] text-[#727972] uppercase block">Estate Terroir</span>
                  <strong className="text-[#18221B] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#7FA038]" />
                    {spice.estate}
                  </strong>
                </div>
                <div className="p-2.5 bg-[#F4EFE6] rounded-md border border-[#1B432C]/5">
                  <span className="text-[10px] text-[#727972] uppercase block">Harvest Cycle</span>
                  <strong className="text-[#18221B] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3 h-3 text-[#C8A253]" />
                    {spice.harvestMoon}
                  </strong>
                </div>
                <div className="p-2.5 bg-[#F4EFE6] rounded-md border border-[#1B432C]/5">
                  <span className="text-[10px] text-[#727972] uppercase block">Curing Protocol</span>
                  <strong className="text-[#18221B] block mt-0.5 line-clamp-1">
                    {spice.curingMethod}
                  </strong>
                </div>
                <div className="p-2.5 bg-[#F4EFE6] rounded-md border border-[#1B432C]/5">
                  <span className="text-[10px] text-[#727972] uppercase block">Volatile Oil</span>
                  <strong className="text-[#1B432C] flex items-center gap-1 mt-0.5">
                    <Droplets className="w-3 h-3 text-[#7FA038]" />
                    {spice.volatileOilPercent}% Essences
                  </strong>
                </div>
              </div>

              {/* Certifications Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {spice.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 rounded-full bg-[#EAE8E3] text-[10px] text-[#414942] font-sans font-medium flex items-center gap-1"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#7FA038]" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs for Deep Dive */}
          <div className="border-b border-[#1B432C]/15 flex gap-4 text-xs font-sans font-semibold tracking-wider uppercase">
            <button
              onClick={() => setActiveTab('provenance')}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === 'provenance'
                  ? 'border-[#1B432C] text-[#1B432C]'
                  : 'border-transparent text-[#727972] hover:text-[#18221B]'
              }`}
            >
              Organoleptic Matrix & Coumarin
            </button>
            <button
              onClick={() => setActiveTab('sensory')}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === 'sensory'
                  ? 'border-[#1B432C] text-[#1B432C]'
                  : 'border-transparent text-[#727972] hover:text-[#18221B]'
              }`}
            >
              Tasting Profile & Terpenes
            </button>
            <button
              onClick={() => setActiveTab('pairings')}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === 'pairings'
                  ? 'border-[#1B432C] text-[#1B432C]'
                  : 'border-transparent text-[#727972] hover:text-[#18221B]'
              }`}
            >
              Culinary Pairings ({spice.pairings.length})
            </button>
          </div>

          {/* Tab 1: Full Organoleptic Matrix */}
          {activeTab === 'provenance' && (
            <div className="space-y-4 animate-fadeIn">
              <SensoryMatrix
                aromaScore={spice.aromaScore}
                heatScore={spice.heatScore}
                sweetnessScore={spice.sweetnessScore}
                oilPotencyScore={spice.oilPotencyScore}
                volatileOilPercent={spice.volatileOilPercent}
                coumarinPercent={spice.coumarinPercent}
                compact={false}
              />

              {/* Scientific Coumarin Comparison table if Cinnamon */}
              {spice.id.includes('cinnamon') && (
                <div className="p-4 bg-[#F5F3EE] rounded-xl border border-[#DFB96C]/40 text-xs font-sans space-y-2">
                  <h5 className="font-serif text-sm font-semibold text-[#18221B]">
                    Laboratory Coumarin Benchmark: True Ceylon vs Cassia
                  </h5>
                  <p className="text-[#414942] text-[11px] leading-relaxed">
                    Unlike common Cassia (Cinnamomum cassia/burmannii) sold in mass supermarkets which contains elevated coumarin (up to 10,000 mg/kg or 1.0%), authentic Ceylon Alba contains merely 0.0032% (under 40 mg/kg), rendering it completely safe for daily wellness and culinary infusion.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-2.5 bg-[#FFFFFF] rounded border border-[#7FA038]/30">
                      <span className="text-[10px] text-[#7FA038] uppercase font-bold block">Zeylon Harmony Alba</span>
                      <strong className="text-[#1B432C] text-sm">0.0032% Coumarin</strong>
                      <span className="text-[10px] text-[#727972] block">Safe for continuous daily consumption</span>
                    </div>
                    <div className="p-2.5 bg-[#FFFFFF] rounded border border-[#BA1A1A]/30">
                      <span className="text-[10px] text-[#BA1A1A] uppercase font-bold block">Standard Commercial Cassia</span>
                      <strong className="text-[#BA1A1A] text-sm">0.80% - 1.20% Coumarin</strong>
                      <span className="text-[10px] text-[#727972] block">Liver toxicity cautions apply</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Sensory Notes */}
          {activeTab === 'sensory' && (
            <div className="p-5 bg-[#F4EFE6] rounded-xl border border-[#1B432C]/10 space-y-4 animate-fadeIn">
              <h5 className="font-serif text-base font-semibold text-[#1B432C]">
                Tasting Descriptors & Terpene Signature
              </h5>
              <div className="flex flex-wrap gap-2">
                {spice.tastingNotes.map((note, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-[#FBF9F4] border border-[#1B432C]/10 text-xs font-sans text-[#18221B] shadow-xs flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-[#C8A253]" />
                    {note}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#414942] leading-relaxed">
                Evaluated by certified spice masters under controlled 21°C ambient cupping protocols. The aroma unfolds in distinct phases: high citrus notes first, followed by sweet resinous wood, concluding in a gentle, warm finish.
              </p>
            </div>
          )}

          {/* Tab 3: Culinary Pairings */}
          {activeTab === 'pairings' && (
            <div className="space-y-3 animate-fadeIn">
              {spice.pairings.map((p, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#F4EFE6] rounded-xl border border-[#1B432C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans"
                >
                  <div>
                    <h6 className="font-serif text-sm font-bold text-[#1B432C]">{p.name}</h6>
                    <p className="text-[#414942] mt-0.5">{p.description}</p>
                  </div>
                  <div className="shrink-0 px-3 py-1.5 bg-[#FFFFFF] rounded-md border border-[#DFB96C]/40 text-[11px] font-medium text-[#8C5535]">
                    Chef Suggestion: <em>{p.recipeIdea}</em>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Customization & Selection Box */}
          <div className="p-5 bg-[#F0EEE9] rounded-xl border border-[#1B432C]/10 space-y-4">
            <h5 className="font-serif text-base font-semibold text-[#1B432C]">
              Packaging & Grind Customization
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['wax_sealed_vial', 'hand_carved_teak', 'unbleached_linen'] as PackagingType[]).map((pkg) => {
                const info = PACKAGING_DETAILS[pkg];
                const active = selectedPackaging === pkg;
                return (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setSelectedPackaging(pkg)}
                    className={`p-3 text-left rounded-lg border transition-all text-xs font-sans ${
                      active
                        ? 'bg-[#FFFFFF] border-[#1B432C] shadow-botanical-sm ring-1 ring-[#1B432C]'
                        : 'bg-[#FBF9F4] border-[#1B432C]/15 hover:border-[#1B432C]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-[#18221B]">{info.name}</strong>
                      {info.priceAdd > 0 ? (
                        <span className="text-[#8C5535] font-semibold">+${info.priceAdd}</span>
                      ) : (
                        <span className="text-[#7FA038] text-[10px]">Standard</span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#727972] mt-1 leading-snug line-clamp-2">
                      {info.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Grind Choice */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-sans">
              <span className="text-[#414942] font-medium">Estate Preparation:</span>
              {(['whole_quill', 'slow_stone_ground', 'coarse_crush'] as GrindType[]).map((g) => {
                const labels: Record<GrindType, string> = {
                  whole_quill: 'Whole Harvest Quills / Pods',
                  slow_stone_ground: 'Slow Stone Ground (Granite Mill)',
                  coarse_crush: 'Artisan Coarse Crack',
                };
                const active = selectedGrind === g;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGrind(g)}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      active
                        ? 'bg-[#1B432C] text-[#FBF9F4] font-semibold'
                        : 'bg-[#FFFFFF] text-[#414942] border border-[#1B432C]/10 hover:bg-[#F5F3EE]'
                    }`}
                  >
                    {labels[g]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer / Checkout Action */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#F4EFE6] border-t border-[#1B432C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-[#1B432C]/20 rounded-md bg-[#FFFFFF] overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 hover:bg-[#F5F3EE] text-[#18221B] font-bold"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-mono font-bold text-[#1B432C]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 hover:bg-[#F5F3EE] text-[#18221B] font-bold"
              >
                +
              </button>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl font-bold text-[#1B432C]">
                  ${totalPrice}
                </span>
                <span className="text-xs text-[#727972] font-sans">USD Total</span>
              </div>
              <span className="text-[10px] text-[#8C5535] uppercase tracking-wider block">
                {spice.unit} ({quantity}x)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="add-to-reserve-button-modal"
              type="button"
              onClick={handleAdd}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase font-sans transition-all duration-200 shadow-botanical-md active:scale-95 ${
                addedSuccess
                  ? 'bg-[#7FA038] text-white'
                  : 'bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4]'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  Reserved in Basket
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#C8A253]" />
                  Add to Reserve Basket
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
