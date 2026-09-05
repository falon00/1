import React, { useState } from 'react';
import { SPICES_DATA } from './data/spices';
import { SpiceItem, CartItem, PackagingType, GrindType, CategoryFilter } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { SensoryOverview } from './components/SensoryOverview';
import { TerroirStory } from './components/TerroirStory';
import { CulinaryPairingLab } from './components/CulinaryPairingLab';
import { CartDrawer } from './components/CartDrawer';
import { HarvestProvenanceModal } from './components/HarvestProvenanceModal';
import { LotCertificateModal } from './components/LotCertificateModal';
import { Footer } from './components/Footer';
import { DividerRibbon } from './components/DividerRibbon';
import { Filter, Search, Sparkles, Check, ArrowDown } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      spice: SPICES_DATA[0], // Pre-populate with Alba Cinnamon for instant delight
      quantity: 1,
      packaging: 'wax_sealed_vial',
      grind: 'whole_quill',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSpiceForModal, setSelectedSpiceForModal] = useState<SpiceItem | null>(null);
  const [isLotVerifierOpen, setIsLotVerifierOpen] = useState(false);
  const [lotVerifierId, setLotVerifierId] = useState<string>('ZH-ALBA-2026-08');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCartSimple = (spice: SpiceItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.spice.id === spice.id);
      if (existing) {
        return prev.map((item) =>
          item.spice.id === spice.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          spice,
          quantity: 1,
          packaging: 'wax_sealed_vial',
          grind: 'whole_quill',
        },
      ];
    });
    showToast(`Added 1x ${spice.name} to reserve basket`);
  };

  const handleAddToCartDetailed = (
    spice: SpiceItem,
    packaging: PackagingType,
    grind: GrindType,
    quantity: number
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.spice.id === spice.id && item.packaging === packaging && item.grind === grind
      );
      if (existing) {
        return prev.map((item) =>
          item.spice.id === spice.id && item.packaging === packaging && item.grind === grind
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          spice,
          quantity,
          packaging,
          grind,
        },
      ];
    });
    showToast(`Reserved ${quantity}x ${spice.name}`);
    setSelectedSpiceForModal(null);
  };

  const handleUpdateQuantity = (spiceId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.spice.id === spiceId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (spiceId: string) => {
    setCart((prev) => prev.filter((item) => item.spice.id !== spiceId));
    showToast('Item removed from basket');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Navigation smoothly to anchor
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter spices by category & search query
  const filteredSpices = SPICES_DATA.filter((spice) => {
    const matchesSearch =
      spice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spice.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spice.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spice.tastingNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeCategory === 'all') return true;
    if (activeCategory === 'cinnamon') return spice.id.includes('cinnamon');
    if (activeCategory === 'vanilla') return spice.id.includes('vanilla');
    if (activeCategory === 'pepper') return spice.id.includes('pepper');
    if (activeCategory === 'cardamom') return spice.id.includes('cardamom');
    if (activeCategory === 'reserve') return spice.id.includes('chest') || spice.featured;
    return true;
  });

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#18221B] flex flex-col antialiased selection:bg-[#C0EDCC] selection:text-[#002110]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1B432C] text-[#FBF9F4] px-5 py-3 rounded-xl shadow-botanical-lg flex items-center gap-3 border border-[#DFB96C]/40 animate-slideUp text-xs font-sans">
          <div className="w-5 h-5 rounded-full bg-[#7FA038] flex items-center justify-center text-white shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main App Navigation Bar */}
      <Navbar
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLotVerifier={() => setIsLotVerifierOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="grow">
        {/* Editorial Hero Showcase */}
        <Hero
          onExploreClick={() => handleNavigate('catalog')}
          onStoryClick={() => handleNavigate('terroir-story')}
          onSelectHeroSpice={(spiceId) => {
            const item = SPICES_DATA.find((s) => s.id === spiceId);
            if (item) setSelectedSpiceForModal(item);
          }}
        />

        <DividerRibbon variant="monogram" className="my-2" />

        {/* Harvest Catalog Section */}
        <section id="catalog" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1B432C]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#DFB96C]/60 text-[10px] uppercase tracking-[0.16em] font-sans font-bold text-[#8C5535] mb-2">
                <Sparkles className="w-3 h-3 text-[#C8A253]" />
                Single-Estate Allocations
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18221B]">
                Curated Harvest Catalog
              </h2>
              <p className="text-sm text-[#414942] font-sans mt-1">
                Hand-picked, lot-certified Ceylon spices and whole natural cured vanilla pods.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search tasting notes or spices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#1B432C]/15 text-xs text-[#18221B] placeholder-[#727972] focus:outline-none focus:border-[#1B432C] focus:ring-1 focus:ring-[#7FA038]"
              />
              <Search className="w-4 h-4 text-[#727972] absolute left-3 top-3" />
            </div>
          </div>

          {/* Filter Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
            {(
              [
                { id: 'all', label: 'All Terroirs' },
                { id: 'cinnamon', label: 'Alba Cinnamon' },
                { id: 'vanilla', label: 'Heirloom Vanilla' },
                { id: 'pepper', label: 'Tellicherry Pepper' },
                { id: 'cardamom', label: 'Jade Cardamom' },
                { id: 'reserve', label: "Sommelier's Reserve" },
              ] as const
            ).map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wider whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-[#1B432C] text-[#FBF9F4] shadow-botanical-sm'
                      : 'bg-[#F4EFE6] text-[#414942] hover:bg-[#EAE8E3] border border-[#1B432C]/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          {filteredSpices.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-[#F4EFE6] rounded-2xl p-8 border border-[#1B432C]/10">
              <p className="font-serif text-lg font-semibold text-[#18221B]">
                No matching botanical harvest found
              </p>
              <p className="text-xs text-[#727972] font-sans">
                Try searching for &quot;Alba&quot;, &quot;Vanilla&quot;, &quot;Pepper&quot;, or reset your filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-[#1B432C] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpices.map((spice) => (
                <ProductCard
                  key={spice.id}
                  spice={spice}
                  onOpenDetails={(s) => setSelectedSpiceForModal(s)}
                  onAddToCart={handleAddToCartSimple}
                />
              ))}
            </div>
          )}
        </section>

        {/* Sensory Tasting Matrix Lab Section */}
        <SensoryOverview
          onOpenDetails={(s) => setSelectedSpiceForModal(s)}
        />

        {/* Ancestral Terroir & Peeling Craft Story */}
        <TerroirStory />

        {/* Culinary Pairing & Infusion Lab */}
        <CulinaryPairingLab
          onAddToCart={handleAddToCartSimple}
        />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenLotVerifier={() => setIsLotVerifierOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Slide-over Reserve Basket Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Detailed Harvest Provenance & Sensory Dossier Modal */}
      <HarvestProvenanceModal
        spice={selectedSpiceForModal}
        onClose={() => setSelectedSpiceForModal(null)}
        onAddToCart={handleAddToCartDetailed}
      />

      {/* Official Lot Certificate Verifier Modal */}
      <LotCertificateModal
        isOpen={isLotVerifierOpen}
        onClose={() => setIsLotVerifierOpen(false)}
        initialLot={lotVerifierId}
      />
    </div>
  );
}
