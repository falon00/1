import React, { useState } from 'react';
import { Logo } from './Logo';
import { ShoppingBag, Search, Sparkles, ShieldCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLotVerifier: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenLotVerifier,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#1B432C]/10 transition-colors">
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#1B432C] text-[#FBF9F4] text-[11px] font-sans py-1.5 px-4 text-center tracking-wider flex items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-1 text-[#DFB96C] font-semibold">
          <Sparkles className="w-3 h-3" />
          Autumn 2026 Direct Harvest Allocation
        </span>
        <span className="hidden md:inline text-white/40">|</span>
        <span className="hidden md:inline text-[#C0EDCC]">
          Monsoon Alba Quills Peeling Complete
        </span>
        <span className="hidden lg:inline text-white/40">|</span>
        <span className="hidden lg:inline text-white/90 font-mono">
          Guaranteed Coumarin &lt; 0.004%
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <div
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <Logo size={44} showText={true} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-sans font-semibold tracking-wider uppercase text-[#414942]">
            <button
              onClick={() => handleNavClick('catalog')}
              className="hover:text-[#1B432C] transition-colors"
            >
              Estate Harvest
            </button>
            <button
              onClick={() => handleNavClick('sensory-overview')}
              className="hover:text-[#1B432C] transition-colors"
            >
              Sensory Matrix
            </button>
            <button
              onClick={() => handleNavClick('terroir-story')}
              className="hover:text-[#1B432C] transition-colors"
            >
              Terroir & Craft
            </button>
            <button
              onClick={() => handleNavClick('culinary-lab')}
              className="hover:text-[#1B432C] transition-colors"
            >
              Culinary Lab
            </button>
            <button
              onClick={onOpenLotVerifier}
              className="hover:text-[#8C5535] transition-colors flex items-center gap-1 text-[#8C5535]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A253]" />
              Verify Batch Lot
            </button>
          </nav>

          {/* Right Action Icons & Basket */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenLotVerifier}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4EFE6] hover:bg-[#EAE8E3] text-[#8C5535] text-[11px] font-sans font-bold tracking-wider uppercase border border-[#DFB96C]/50 transition-colors"
              title="Verify Lot Certificate of Authenticity"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A253]" />
              <span>Lot Lookup</span>
            </button>

            <button
              id="navbar-cart-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4] text-xs font-sans font-semibold tracking-wider transition-all duration-200 shadow-botanical-sm active:scale-95"
              aria-label="View Reserve Basket"
            >
              <ShoppingBag className="w-4 h-4 text-[#C8A253]" />
              <span className="hidden sm:inline">Reserve Basket</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C8A253] text-[#002110] font-bold text-[10px] ml-1">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#18221B] hover:bg-[#F4EFE6]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F4] border-b border-[#1B432C]/10 px-6 py-5 space-y-3 font-sans text-sm font-semibold tracking-wider uppercase">
          <button
            onClick={() => handleNavClick('catalog')}
            className="block w-full text-left py-2 text-[#414942] hover:text-[#1B432C]"
          >
            Estate Harvest Catalog
          </button>
          <button
            onClick={() => handleNavClick('sensory-overview')}
            className="block w-full text-left py-2 text-[#414942] hover:text-[#1B432C]"
          >
            Organoleptic Sensory Matrix
          </button>
          <button
            onClick={() => handleNavClick('terroir-story')}
            className="block w-full text-left py-2 text-[#414942] hover:text-[#1B432C]"
          >
            Terroir & Ancestral Craft
          </button>
          <button
            onClick={() => handleNavClick('culinary-lab')}
            className="block w-full text-left py-2 text-[#414942] hover:text-[#1B432C]"
          >
            Culinary Infusion Lab
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLotVerifier();
            }}
            className="flex items-center gap-2 py-2 text-[#8C5535]"
          >
            <ShieldCheck className="w-4 h-4 text-[#C8A253]" />
            Verify Batch Certificate
          </button>
        </div>
      )}
    </header>
  );
};
