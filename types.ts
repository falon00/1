export interface SpiceItem {
  id: string;
  name: string;
  botanicalName: string;
  grade: string;
  terroir: string;
  estate: string;
  elevation: string;
  harvestMoon: string;
  harvestDate: string;
  pricePerUnit: number;
  unit: string;
  tagline: string;
  description: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  aromaScore: number; // 1 to 5
  heatScore: number; // 1 to 5
  sweetnessScore: number; // 1 to 5
  oilPotencyScore: number; // 1 to 5
  volatileOilPercent: number; // e.g. 3.8%
  coumarinPercent: number; // e.g. 0.003% (safe vs Cassia 1.0%)
  tastingNotes: string[];
  pairings: {
    name: string;
    description: string;
    recipeIdea: string;
  }[];
  curingMethod: string;
  certifications: string[];
  batchNumber: string;
  inStock: boolean;
  featured?: boolean;
}

export type PackagingType = 'wax_sealed_vial' | 'hand_carved_teak' | 'unbleached_linen';
export type GrindType = 'whole_quill' | 'slow_stone_ground' | 'coarse_crush';

export interface CartItem {
  spice: SpiceItem;
  quantity: number;
  packaging: PackagingType;
  grind: GrindType;
}

export type CategoryFilter = 'all' | 'cinnamon' | 'vanilla' | 'pepper' | 'cardamom' | 'reserve';
