import React, { useState } from 'react';
import { Logo } from './Logo';
import { DividerRibbon } from './DividerRibbon';
import { Send, ShieldCheck, Mail, MapPin, Sparkles, Check } from 'lucide-react';

interface FooterProps {
  onOpenLotVerifier: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLotVerifier, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#143422] text-[#FBF9F4] pt-16 pb-12 border-t border-[#DFB96C]/30 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#7FA038]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Newsletter / Allocation Dispatch Banner */}
        <div className="bg-[#1B432C] rounded-2xl p-6 sm:p-10 border border-[#DFB96C]/30 shadow-botanical-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143422] text-[#C0EDCC] text-[10px] uppercase tracking-widest font-sans font-semibold border border-[#7FA038]/40">
              <Sparkles className="w-3 h-3 text-[#DFB96C]" />
              Rare Micro-Lot Allocation Registry
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Receive First Notice of Solstice Harvests
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              Our single-estate Grade Alba quills and grand noir vanilla beans are harvested in strictly limited seasonal batches. Patrons on the registry receive priority allocation prior to public release.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#143422] border border-[#7FA038] text-[#C0EDCC] flex items-center gap-3 text-xs font-sans">
                <Check className="w-5 h-5 text-[#7FA038] shrink-0" />
                <span>You have been registered for upcoming 2026 winter micro-lot allocations.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@sommelier.com"
                  className="grow px-4 py-3 rounded-lg bg-[#143422] border border-[#DFB96C]/40 text-white placeholder-white/40 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#DFB96C]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#C8A253] hover:bg-[#DFB96C] text-[#002110] text-xs font-bold font-sans uppercase tracking-wider transition-colors shrink-0 shadow-xs"
                >
                  Join Registry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pt-6">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size={48} showText={true} className="brightness-150" />
            <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm">
              Dedicated to the preservation of heirloom single-origin Sri Lankan spices. Uncompromised botanical integrity, regeneratively farmed under biodiversity rainforest canopies.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#C0EDCC] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#DFB96C]" />
              <span>Matale, Kandy & Knuckles Ranges, Sri Lanka</span>
            </div>
          </div>

          {/* Col 2: The Harvests */}
          <div className="lg:col-span-3 space-y-3 text-xs font-sans">
            <h4 className="font-serif text-sm font-bold text-[#DFB96C] uppercase tracking-wider">
              Curated Harvests
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Grade Alba Cinnamon Quills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Bourbon-Type Heirloon Vanilla Beans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Tellicherry Reserve Black Pepper
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Wild Jade Green Cardamom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  The Grand Cru Collector Tasting Chest
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Gastronomy & Terroir */}
          <div className="lg:col-span-3 space-y-3 text-xs font-sans">
            <h4 className="font-serif text-sm font-bold text-[#DFB96C] uppercase tracking-wider">
              Terroir & Science
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('sensory-overview')}
                  className="hover:text-white transition-colors"
                >
                  Organoleptic Sensory Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terroir-story')}
                  className="hover:text-white transition-colors"
                >
                  True Ceylon vs Cassia Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('culinary-lab')}
                  className="hover:text-white transition-colors"
                >
                  Culinary Temperature & Infusion Lab
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLotVerifier}
                  className="hover:text-[#DFB96C] transition-colors flex items-center gap-1 text-[#C0EDCC]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DFB96C]" />
                  Lot Authenticity Verifier
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantees */}
          <div className="lg:col-span-2 space-y-3 text-xs font-sans">
            <h4 className="font-serif text-sm font-bold text-[#DFB96C] uppercase tracking-wider">
              Estate Standards
            </h4>
            <div className="p-3 bg-[#1B432C]/60 rounded-xl border border-[#DFB96C]/20 space-y-1.5 text-[11px] text-white/80">
              <p className="font-bold text-[#C0EDCC]">Zero Adulteration Guarantee</p>
              <p className="text-white/60">
                100% whole quills and pods, ground exclusively on demand in small granite batches.
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>© {new Date().getFullYear()} Zeylon Harmony Ltd. All Rights Reserved. Protected Ceylon Origin.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Coumarin Lab Certified</span>
            <span>·</span>
            <span>Direct Fair Trade Living Wage</span>
            <span>·</span>
            <span>Climate Neutral Packaging</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
