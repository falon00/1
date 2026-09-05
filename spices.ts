import { SpiceItem } from '../types';

export const SPICES_DATA: SpiceItem[] = [
  {
    id: 'ceylon-alba-cinnamon',
    name: 'Alba Grade Ceylon Cinnamon Quills',
    botanicalName: 'Cinnamomum verum (Zeylanicum)',
    grade: 'GRADE ALBA (C-10)',
    terroir: 'Matale Highlands & Central Hill Slopes',
    estate: 'Miriswatta Rainforest Estate',
    elevation: '680m Above Sea Level',
    harvestMoon: 'Waxing Monsoon Flush (July 2026)',
    harvestDate: 'July 2026',
    pricePerUnit: 34,
    unit: '100g Hand-Rolled Quills',
    tagline: 'The pinnacle of true cinnamon: pencil-thin, 40-ply paper bark with delicate woody nectar sweetness.',
    description: 'Harvested exclusively from young shoots of heirloom Cinnamomum verum. The fragile inner bark is peeled with brass knives by master peelers, layered into overlapping concentric leaves, and sun-cured into pristine pencil-slender quills. Distinct from harsh Cassia, Alba yields ultra-low coumarin and a refined floral-citrus warmth.',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop',
    aromaScore: 5,
    heatScore: 2,
    sweetnessScore: 5,
    oilPotencyScore: 4,
    volatileOilPercent: 3.85,
    coumarinPercent: 0.0032,
    tastingNotes: ['Sweet Nectar', 'Sun-Dried Bergamot', 'Woody Amber', 'Wild Blossom', 'Gentle Clove'],
    pairings: [
      {
        name: 'Grand Cru Single-Origin Chocolate (74%)',
        description: 'Brings out floral red fruit notes without bitter astringency.',
        recipeIdea: 'Spiced Alba Hot Chocolate with Fleur de Sel'
      },
      {
        name: 'Heirloom Bosc Pears & Tawny Port',
        description: 'Simmered slowly to release delicate cinnamaldehyde aromatics.',
        recipeIdea: 'Slow-Poached Pears with Alba Quills & Cardamom'
      },
      {
        name: 'Artisan Espresso & Arabica Roast',
        description: 'A pinch of stone-ground quill cuts acidity and adds velvet finish.',
        recipeIdea: 'Highland Cinnamon Crema Macchiato'
      }
    ],
    curingMethod: '14-Day Dual-Phase Slow Shade Curing & Gentle Sun Airing',
    certifications: ['USDA Organic', 'Protected Geographical Indication (PGI) Ceylon', 'Rainforest Alliance'],
    batchNumber: 'ZH-ALBA-2026-08',
    inStock: true,
    featured: true,
  },
  {
    id: 'ceylon-heirloom-vanilla',
    name: 'Single-Origin Cured Ceylon Vanilla Beans',
    botanicalName: 'Vanilla planifolia × tahitensis',
    grade: 'GOURMET NOIR (18-20CM)',
    terroir: 'Kandy Mist Valleys & Knuckles Foothills',
    estate: 'Ranweli Agroforest Sanctuary',
    elevation: '520m Above Sea Level',
    harvestMoon: 'Dry Season Pollination (Autumn Cured)',
    harvestDate: 'August 2026',
    pricePerUnit: 48,
    unit: '5 Whole Plump Beans (Approx. 25g)',
    tagline: 'Oily, supple pods boasting 2.4% natural vanillin with notes of dark rum, fig, and cocoa.',
    description: 'Hand-pollinated flower by flower in the shade of endemic Ceylon trees. These grand noir beans undergo a meticulous 6-month traditional sweating and sun-drying regimen, yielding flexible, oily black skins shimmering with natural vanillin crystals.',
    imageUrl: 'https://images.unsplash.com/photo-1608797178974-15b35a6509e9?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop',
    aromaScore: 5,
    heatScore: 1,
    sweetnessScore: 5,
    oilPotencyScore: 5,
    volatileOilPercent: 4.2,
    coumarinPercent: 0.000,
    tastingNotes: ['Bourbon Molasses', 'Sun-Ripened Fig', 'Floral Smoke', 'Warm Tonka', 'Creamy Toffee'],
    pairings: [
      {
        name: 'Whipped Mascarpone & Clotted Cream',
        description: 'Caviar seeds distribute an intoxicating, genuine floral aroma.',
        recipeIdea: 'Tahitian-Ceylon Vanilla Bean Panna Cotta'
      },
      {
        name: 'Slow Roasted Pastured Butter',
        description: 'Infuses brown butter with nutty vanillin esters.',
        recipeIdea: 'Brown Butter Vanilla Financiers'
      }
    ],
    curingMethod: 'Sweat-Box Fermentation & 90-Day Cedar Box Conditioning',
    certifications: ['Fair Trade Certified', '100% Heirloom Non-GMO', 'Biodynamic Organic'],
    batchNumber: 'ZH-VAN-2026-03',
    inStock: true,
    featured: true,
  },
  {
    id: 'matale-tellicherry-black-pepper',
    name: 'Reserve Tellicherry Black Peppercorns',
    botanicalName: 'Piper nigrum',
    grade: 'BOLD ESTATE EXTRA SPECIAL (TGSEB)',
    terroir: 'Matale Forest Floor & Spice Highlands',
    estate: 'Sudu Ganga Heritage Plantation',
    elevation: '450m Above Sea Level',
    harvestMoon: 'Peak Ripeness Canopy Pick (May 2026)',
    harvestDate: 'May 2026',
    pricePerUnit: 22,
    unit: '120g Whole Correlating Peppercorns',
    tagline: 'Left on the vine until deep garnet before sun-drying on woven coir mats. Piercing piney warmth.',
    description: 'Selected from vines climbing high mahogany and gliricidia shade trees. High in piperine and essential oils, delivering an immediate bright resinous citrus crack followed by deep, lingering forest warmth without harsh scorched bitterness.',
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1200&auto=format&fit=crop',
    aromaScore: 4,
    heatScore: 5,
    sweetnessScore: 1,
    oilPotencyScore: 4,
    volatileOilPercent: 3.4,
    coumarinPercent: 0.000,
    tastingNotes: ['Pine Resin', 'Crushed Cedar', 'Green Citrus', 'Campfire Ember', 'Deep Earth'],
    pairings: [
      {
        name: 'Grass-Fed Dry-Aged Ribeye',
        description: 'Coarse crush creates a fragrant, caramelized savory crust.',
        recipeIdea: 'Au Poivre Reserve with Cognac & Bone Marrow Butter'
      },
      {
        name: 'Aged Pecorino & Cacio e Pepe',
        description: 'Toasted whole in dry bronze skillet before coarse milling.',
        recipeIdea: 'Artisanal Bucatini al Pepe Nero'
      }
    ],
    curingMethod: 'Sun-Drying on Traditional Coconut Coir Racks',
    certifications: ['Demeter Biodynamic', 'Forest Garden Certified'],
    batchNumber: 'ZH-PEP-2026-11',
    inStock: true,
    featured: true,
  },
  {
    id: 'knuckles-wild-cardamom',
    name: 'Knuckles Range Jade Green Cardamom',
    botanicalName: 'Elettaria cardamomum var. major',
    grade: 'EXTRA JUMBO JADE PODS (8-9MM)',
    terroir: 'Knuckles Biosphere Cloud Forest',
    estate: 'Dumbara Mist Wild Reserve',
    elevation: '1,100m Above Sea Level',
    harvestMoon: 'Morning Dew Hand-Pluck (September 2026)',
    harvestDate: 'September 2026',
    pricePerUnit: 28,
    unit: '80g Whole Jumbo Pods',
    tagline: 'Vibrant jade pods containing oily, pitch-black seeds bursting with camphor and eucalyptus sweetness.',
    description: 'Wild harvested under the primary rainforest canopy of the UNESCO Knuckles Biosphere Reserve. Cured in low-temperature closed drying houses to preserve the brilliant emerald shell color and volatile cineole terpene profile.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop',
    aromaScore: 5,
    heatScore: 3,
    sweetnessScore: 4,
    oilPotencyScore: 5,
    volatileOilPercent: 7.2,
    coumarinPercent: 0.000,
    tastingNotes: ['Fresh Eucalyptus', 'Sweet Mint', 'Cardamom Camphor', 'Lemon Verbena', 'Warm Pine'],
    pairings: [
      {
        name: 'Golden Spiced Ghee & Cardamom Chai',
        description: 'Crushed pods infuse deep therapeutic aroma into whole dairy.',
        recipeIdea: 'Highland Karak Chai with Cardamom & Alba Cinnamon'
      },
      {
        name: 'Swedish Sourdough Cardamom Buns (Kardemummabullar)',
        description: 'Coarsely cracked seeds release sweet herbal pop inside buttery laminations.',
        recipeIdea: 'Traditional Scandinavian Spiced Pastry'
      }
    ],
    curingMethod: 'Indirect Biomass Heat Green-Preserve Flue Curing',
    certifications: ['UNESCO Biosphere Ethical Harvest', '100% Wild Forest Flora'],
    batchNumber: 'ZH-CRD-2026-05',
    inStock: true,
    featured: false,
  },
  {
    id: 'miriswatta-mace-nutmeg',
    name: 'Whole Sun-Dried Nutmeg with Crimson Mace Aril',
    botanicalName: 'Myristica fragrans',
    grade: 'GRADE A HAND-STRIPPED LACE',
    terroir: 'Galle Coastal Evergreen Valleys',
    estate: 'Miriswatta Spice Orchards',
    elevation: '320m Above Sea Level',
    harvestMoon: 'Equinox Split Harvest (August 2026)',
    harvestDate: 'August 2026',
    pricePerUnit: 26,
    unit: '65g Whole Nutmegs + Intact Mace Arils',
    tagline: 'Hand-peeled glowing red mace lace encasing dense, butter-rich whole nutmeg kernels.',
    description: 'Harvested only when the ripe yellow apricot-like nutmeg fruit splits open naturally on the branch. The fiery crimson aril (mace) is gently unwrapped by hand and dried into golden ribbons, while the inner seed yields unmatched warm buttery spice.',
    imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop',
    aromaScore: 4,
    heatScore: 3,
    sweetnessScore: 4,
    oilPotencyScore: 4,
    volatileOilPercent: 5.1,
    coumarinPercent: 0.000,
    tastingNotes: ['Nutty Pine', 'Warm Amber', 'Subtle Citrus Pith', 'Savory Clove', 'Buttery Wood'],
    pairings: [
      {
        name: 'Heirloom Potato Gratin Dauphinois',
        description: 'Fresh microplaned nutmeg balances heavy cream and gruyère.',
        recipeIdea: 'Classic Gratin with Wild Mace & Thyme'
      },
      {
        name: 'Slow Roasted Butternut Squash Soup',
        description: 'Enhances natural vegetable sugars with gentle autumnal warmth.',
        recipeIdea: 'Velvety Roasted Squash Bisque'
      }
    ],
    curingMethod: 'Gentle Shade Dehydration of Arils & 6-Week Shell Curing',
    certifications: ['Single Estate Organic', 'Artisanal Guild Verified'],
    batchNumber: 'ZH-MCE-2026-07',
    inStock: true,
    featured: false,
  },
  {
    id: 'master-reserve-chest',
    name: 'The Zeylon Harmony Grand Cru Collection',
    botanicalName: 'Artisanal Estate Selection Box',
    grade: 'MASTER SOMMELIER RESERVE',
    terroir: 'Pan-Highland Single Estates of Sri Lanka',
    estate: 'Curated Heritage Estates Consortium',
    elevation: '320m - 1,100m Micro-Climates',
    harvestMoon: '2026 Master Solstice Collector Release',
    harvestDate: 'Summer 2026',
    pricePerUnit: 145,
    unit: 'Complete Set in Solid Carved Teak Chest',
    tagline: 'The complete treasury: Alba cinnamon, cured vanilla beans, tellicherry pepper, jade cardamom & royal mace with solid brass measuring spoon.',
    description: 'An heirloom wooden chest carved from sustainably felled Sri Lankan teak. Houses five heavy glass apothecary cylinders with wax-sealed cork stoppers, accompanied by a hand-hammered brass tasting spoon and an embossed certificate of origin authenticated by the master estate agronomist.',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1200&auto=format&fit=crop',
    aromaScore: 5,
    heatScore: 4,
    sweetnessScore: 5,
    oilPotencyScore: 5,
    volatileOilPercent: 4.8,
    coumarinPercent: 0.002,
    tastingNotes: ['Complete Ceylon Spectrum', 'Honeyed Bark', 'Exotic Resins', 'Cured Vanilla Floral', 'Highland Citrus'],
    pairings: [
      {
        name: 'Multi-Course Gastronomic Tasting Menu',
        description: 'From aperitif spiced infusions to slow braises and dessert pastry.',
        recipeIdea: 'Chef Tasting Symphony Box'
      }
    ],
    curingMethod: 'Vault-Aged & Individually Wax Sealed',
    certifications: ['Collector Edition #014/500', 'Estate Master Seal', '100% Carbon Neutral'],
    batchNumber: 'ZH-BOX-2026-RES',
    inStock: true,
    featured: true,
  },
];

export const PACKAGING_DETAILS = {
  wax_sealed_vial: {
    name: 'Apothecary Heavy Glass Vial',
    description: 'Ultra-clear UV-blocking glass cylinder with natural Portuguese cork and hand-dipped botanical green beeswax seal.',
    priceAdd: 0,
  },
  hand_carved_teak: {
    name: 'Artisan Solid Teak Presentation Casket',
    description: 'Sustainably sourced Sri Lankan plantation teak with brass pin hinges, engraved botanical leaf motif, and raw linen bedding.',
    priceAdd: 18,
  },
  unbleached_linen: {
    name: 'Unbleached Organic Cotton & Jute Pouch',
    description: 'Handloom-woven raw cotton pouch with cinnamon-dyed twine tie and embossed parchment harvest tag.',
    priceAdd: 0,
  }
};
