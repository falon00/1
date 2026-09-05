import React, { useState } from 'react';
import { CartItem } from '../types';
import { PACKAGING_DETAILS } from '../data/spices';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, Sparkles, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (spiceId: string, delta: number) => void;
  onRemoveItem: (spiceId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [customerName, setCustomerName] = useState('Gourmet Patron');
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => {
    const pkgPrice = PACKAGING_DETAILS[item.packaging].priceAdd;
    return acc + (item.spice.pricePerUnit + pkgPrice) * item.quantity;
  }, 0);

  const freeShippingThreshold = 65;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 9;
  const orderTotal = subtotal + shippingFee;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(false);
    setCheckoutComplete(true);
  };

  const handleReset = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="cart-drawer-panel"
          className="w-screen max-w-md bg-[#FBF9F4] shadow-botanical-lg flex flex-col border-l border-[#1B432C]/15"
        >
          {/* Header */}
          <div className="p-6 bg-[#F4EFE6] border-b border-[#1B432C]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1B432C] text-[#FBF9F4] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#C8A253]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#18221B]">
                  Reserve Tasting Basket
                </h3>
                <span className="text-[11px] text-[#727972] font-sans">
                  {items.length} {items.length === 1 ? 'estate parcel' : 'estate parcels'} selected
                </span>
              </div>
            </div>

            <button
              id="close-cart-drawer"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EAE8E3] text-[#18221B] transition-colors"
              aria-label="Close basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Success screen */}
          {checkoutComplete ? (
            <div className="p-8 flex flex-col items-center justify-center text-center grow space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1B432C] text-[#C0EDCC] flex items-center justify-center shadow-botanical-md">
                <CheckCircle className="w-8 h-8 text-[#7FA038]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#F5F3EE] text-[11px] font-mono text-[#8C5535] border border-[#DFB96C]/40">
                Reservation #ZH-2026-{(Math.random() * 90000 + 10000).toFixed(0)}
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#1B432C]">
                Harvest Allocation Secured
              </h4>
              <p className="text-xs text-[#414942] leading-relaxed max-w-xs font-sans">
                Your heirloom Ceylon spices have been reserved from our climate-controlled vault in Matale. A wax-sealed certificate of origin will be sealed inside your package.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-3 rounded-lg bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4] text-xs font-semibold uppercase tracking-wider font-sans shadow-botanical-sm"
              >
                Return to Harvest Catalog
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form View */
            <form onSubmit={handleCompleteOrder} className="grow p-6 overflow-y-auto space-y-4">
              <div className="border-b border-[#1B432C]/10 pb-3">
                <h4 className="font-serif text-lg font-bold text-[#1B432C]">
                  Allocation Dispatch Details
                </h4>
                <p className="text-xs text-[#727972]">
                  Direct climate-controlled courier from the estate.
                </p>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div>
                  <label className="block font-semibold text-[#18221B] mb-1">
                    Patron Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#1B432C]/20 text-[#18221B] focus:border-[#1B432C] focus:ring-1 focus:ring-[#7FA038]"
                    placeholder="Lady Eleanor Vance"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18221B] mb-1">
                    Contact Email (for Certificate & Tracking)
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#1B432C]/20 text-[#18221B] focus:border-[#1B432C] focus:ring-1 focus:ring-[#7FA038]"
                    placeholder="patron@estate.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18221B] mb-1">
                    Delivery Address & Country
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#1B432C]/20 text-[#18221B] focus:border-[#1B432C] focus:ring-1 focus:ring-[#7FA038]"
                    placeholder="74 Grosvenor Square, London / New York / Tokyo"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18221B] mb-1">
                    Estate Peeler Guild Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={deliveryNote}
                    onChange={(e) => setDeliveryNote(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#FFFFFF] border border-[#1B432C]/20 text-[#18221B] focus:border-[#1B432C] focus:ring-1 focus:ring-[#7FA038]"
                    placeholder="e.g. Please include handwritten tasting card for anniversary gift."
                  />
                </div>
              </div>

              {/* Order summary mini */}
              <div className="p-3 bg-[#F4EFE6] rounded-lg text-xs space-y-1">
                <div className="flex justify-between text-[#414942]">
                  <span>Spices Subtotal</span>
                  <span>${subtotal} USD</span>
                </div>
                <div className="flex justify-between text-[#414942]">
                  <span>Estate Courier</span>
                  <span>{shippingFee === 0 ? 'Complimentary' : `$${shippingFee} USD`}</span>
                </div>
                <div className="flex justify-between font-bold text-[#1B432C] pt-1 border-t border-[#1B432C]/10 text-sm">
                  <span>Total Investment</span>
                  <span>${orderTotal} USD</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-1/3 py-3 rounded-lg border border-[#1B432C]/20 text-xs font-semibold text-[#414942] hover:bg-[#EAE8E3]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-lg bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4] text-xs font-semibold uppercase tracking-wider shadow-botanical-md"
                >
                  Confirm Reservation (${orderTotal})
                </button>
              </div>
            </form>
          ) : (
            /* Standard Items List */
            <>
              <div className="grow overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#F4EFE6] text-[#8C5535] flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <p className="font-serif text-base font-semibold text-[#18221B]">
                      Your reserve basket is empty
                    </p>
                    <p className="text-xs text-[#727972] max-w-xs mx-auto font-sans">
                      Explore our single-estate Alba cinnamon quills and heirloom cured vanilla beans to curate your parcel.
                    </p>
                  </div>
                ) : (
                  <>
                    {items.map((item) => {
                      const pkg = PACKAGING_DETAILS[item.packaging];
                      const itemTotal =
                        (item.spice.pricePerUnit + pkg.priceAdd) * item.quantity;

                      return (
                        <div
                          key={item.spice.id}
                          className="p-4 bg-[#FFFFFF] rounded-xl border border-[#1B432C]/10 shadow-xs space-y-3"
                        >
                          <div className="flex gap-3">
                            <img
                              src={item.spice.imageUrl}
                              alt={item.spice.name}
                              referrerPolicy="no-referrer"
                              className="w-16 h-16 rounded-lg object-cover bg-[#EAE8E3] shrink-0 border border-[#1B432C]/10"
                            />
                            <div className="grow min-w-0">
                              <span className="text-[9px] uppercase font-bold tracking-wider text-[#8C5535] block">
                                {item.spice.grade}
                              </span>
                              <h4 className="font-serif text-sm font-bold text-[#18221B] truncate">
                                {item.spice.name}
                              </h4>
                              <p className="text-[11px] text-[#727972] truncate">
                                {pkg.name}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs font-bold text-[#1B432C]">
                                  ${itemTotal} USD
                                </span>

                                <div className="flex items-center border border-[#1B432C]/15 rounded bg-[#FBF9F4] text-xs">
                                  <button
                                    onClick={() => onUpdateQuantity(item.spice.id, -1)}
                                    className="px-2 py-0.5 hover:bg-[#EAE8E3] text-[#18221B]"
                                  >
                                    -
                                  </button>
                                  <span className="px-2 py-0.5 font-mono font-bold text-[#1B432C]">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(item.spice.id, 1)}
                                    className="px-2 py-0.5 hover:bg-[#EAE8E3] text-[#18221B]"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.spice.id)}
                              className="text-[#727972] hover:text-[#BA1A1A] p-1 self-start transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    {/* Complimentary Estate Gift Callout */}
                    <div className="p-3 bg-[#F0EEE9] rounded-xl border border-[#DFB96C]/40 flex items-center gap-3">
                      <Gift className="w-5 h-5 text-[#8C5535] shrink-0" />
                      <div className="text-xs font-sans">
                        <span className="font-semibold text-[#18221B] block">
                          Complimentary Sommelier Gift
                        </span>
                        <span className="text-[11px] text-[#727972]">
                          Wax-sealed tasting sample of Alba cinnamon sugar dust included.
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Basket Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-[#F4EFE6] border-t border-[#1B432C]/10 space-y-3">
                  <div className="space-y-1.5 text-xs font-sans">
                    <div className="flex justify-between text-[#414942]">
                      <span>Subtotal</span>
                      <span className="font-mono font-medium">${subtotal} USD</span>
                    </div>

                    <div className="flex justify-between text-[#414942]">
                      <span>Climate-Neutral Courier</span>
                      <span className="font-mono">
                        {shippingFee === 0 ? (
                          <span className="text-[#7FA038] font-bold">Complimentary</span>
                        ) : (
                          `$${shippingFee} USD`
                        )}
                      </span>
                    </div>

                    {subtotal < freeShippingThreshold && (
                      <p className="text-[10px] text-[#8C5535]">
                        Add ${(freeShippingThreshold - subtotal).toFixed(0)} more for complimentary estate shipping.
                      </p>
                    )}

                    <div className="flex justify-between text-base font-serif font-bold text-[#1B432C] pt-2 border-t border-[#1B432C]/10">
                      <span>Reserve Total</span>
                      <span>${orderTotal} USD</span>
                    </div>
                  </div>

                  <button
                    id="btn-proceed-to-checkout"
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#1B432C] hover:bg-[#143422] text-[#FBF9F4] text-xs font-semibold uppercase tracking-wider font-sans shadow-botanical-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <span>Proceed to Secure Allocation</span>
                    <ArrowRight className="w-4 h-4 text-[#C8A253]" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#727972]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#7FA038]" />
                    <span>Harvest Certificate & Authenticity Seals Guaranteed</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
