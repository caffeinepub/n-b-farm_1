import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const milkFeatures = [
  'From pure Gir cows',
  'Rich in A2 protein',
  'Fresh daily supply',
  'No adulteration',
  'Hygienically handled'
];

const mangoFeatures = [
  'Naturally ripened',
  'Authentic Kutch region produce',
  'Sweet, aromatic & chemical-free',
  'Limited seasonal availability'
];

const lemonFeatures = [
  'Freshly harvested',
  'Chemical-free',
  'Sun-ripened on the farm',
  'Rich in Vitamin C',
  'Naturally grown in Kutch'
];

const seasonalProducts = [
  {
    name: 'Pure Cleaned Jiru',
    gujarati: 'શુદ્ધ સાફ જીરૂ',
    emoji: '🌿',
    description: 'Pure stone-ground cumin from our farm — cleaned and naturally processed',
    features: [
      'Stone-ground for full aroma',
      'Pure & natural, no additives',
      'Traditional Kutch recipe',
      'Rich earthy flavour'
    ],
    whatsappMsg: 'Hello, I would like to order Pure Cleaned Jiru from N.B. Farm.'
  },
  {
    name: 'Dhana Powder',
    gujarati: 'ધાણા પાવડર',
    emoji: '🌾',
    description: 'Freshly ground coriander powder, farm-to-kitchen',
    features: [
      'Freshly ground coriander',
      'Pure & natural, no additives',
      'Traditional Kutch recipe',
      'Fragrant & flavourful'
    ],
    whatsappMsg: 'Hello, I would like to order Dhana Powder from N.B. Farm.'
  },
  {
    name: 'Dhana Jiru Powder',
    gujarati: 'ધાણા જીરૂ પાવડર',
    emoji: '✨',
    description: 'Classic blend of coriander & cumin — the heart of Indian cooking',
    features: [
      'Perfect coriander-cumin blend',
      'Stone-ground, no additives',
      'Traditional Kutch recipe',
      'Versatile everyday spice'
    ],
    whatsappMsg: 'Hello, I would like to order Dhana Jiru Powder from N.B. Farm.'
  }
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ProductsSection: React.FC = () => {
  const whatsappMilkUrl =
    'https://wa.me/919978510084?text=Hello%2C%20I%20would%20like%20to%20subscribe%20to%20Gir%20A2%20Cow%20Milk%20from%20N.B.%20Farm.';
  const whatsappLemonUrl =
    'https://wa.me/919978510084?text=Hello%2C%20I%20would%20like%20to%20order%20Farm%20Fresh%20Lemon%20from%20N.B.%20Farm.';

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl tracking-wide">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            Our Products
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Straight from our farm to your doorstep — pure, fresh, and full of goodness.
          </p>
        </div>

        {/* ── Main Products Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Milk Card */}
          <article className="painted-border rounded-2xl overflow-hidden shadow-farm-lg bg-offwhite-cream flex flex-col hover:shadow-[0_12px_48px_oklch(0.38_0.07_42/0.28)] hover:-translate-y-1.5 transition-all duration-300">
            <div className="relative">
              <img
                src="/assets/generated/milk-product.dim_600x600.png"
                alt="Fresh Gir A2 cow milk in a clay pot surrounded by marigold flowers"
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-4 left-4 badge-available px-3 py-1 rounded-full text-xs font-body font-bold shadow">
                ✓ Available Now
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-mud">Gir A2 Cow Milk</h3>
                  <p className="font-handwritten text-terracotta text-sm mt-0.5">Pure & Fresh Daily</p>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-terracotta">₹70</div>
                  <div className="font-body text-xs text-muted-foreground">per litre</div>
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {milkFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-leaf flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappMilkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full btn-whatsapp font-body font-bold text-base shadow-farm"
              >
                <WhatsAppIcon />
                Subscribe / Order Now
              </a>
            </div>
          </article>

          {/* Mango Card */}
          <article className="painted-border rounded-2xl overflow-hidden shadow-farm-lg bg-offwhite-cream flex flex-col hover:shadow-[0_12px_48px_oklch(0.38_0.07_42/0.28)] hover:-translate-y-1.5 transition-all duration-300">
            <div className="relative">
              <img
                src="/assets/generated/mango-product.dim_600x600.png"
                alt="Ripe Kesar and Desi mangoes in a wooden crate with green leaves"
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-4 left-4 badge-preorder px-3 py-1 rounded-full text-xs font-body font-bold shadow">
                🥭 Pre-Order Open
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-mud">Natural Mangoes</h3>
                  <p className="font-handwritten text-terracotta text-sm mt-0.5">Kutch's Finest</p>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl font-bold text-terracotta">₹700</div>
                  <div className="font-body text-xs text-muted-foreground">per 5 kg box</div>
                </div>
              </div>

              {/* Variants */}
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="bg-turmeric/20 text-mud border border-turmeric/40 px-3 py-1 rounded-full text-xs font-body font-semibold">
                  🥭 Desi Mango
                </span>
                <span className="bg-turmeric/20 text-mud border border-turmeric/40 px-3 py-1 rounded-full text-xs font-body font-semibold">
                  🥭 Kesar Mango
                </span>
              </div>

              {/* Packaging */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-leaf/10 text-leaf border border-leaf/30 px-3 py-1 rounded-full text-xs font-body font-semibold">
                  📦 5 kg box
                </span>
                <span className="bg-leaf/10 text-leaf border border-leaf/30 px-3 py-1 rounded-full text-xs font-body font-semibold">
                  📦 10 kg box
                </span>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {mangoFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-turmeric flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => smoothScrollTo('preorder')}
                className="w-full py-3 px-6 rounded-full btn-terracotta font-body font-bold text-base shadow-farm flex items-center justify-center gap-2"
              >
                <span>🥭</span>
                Pre-Order Now
              </button>
            </div>
          </article>

          {/* Lemon Card */}
          <article className="painted-border rounded-2xl overflow-hidden shadow-farm-lg bg-offwhite-cream flex flex-col hover:shadow-[0_12px_48px_oklch(0.38_0.07_42/0.28)] hover:-translate-y-1.5 transition-all duration-300">
            <div className="relative">
              <img
                src="/assets/image.png"
                alt="Fresh lemons hanging on the lemon tree at N.B. Farm"
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-4 left-4 badge-available px-3 py-1 rounded-full text-xs font-body font-bold shadow">
                ✓ Available Now
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-mud">Farm Fresh Lemon</h3>
                  <p className="font-handwritten text-terracotta text-sm mt-0.5">Naturally Grown in Kutch</p>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-terracotta">₹100</div>
                  <div className="font-body text-xs text-muted-foreground">per kg</div>
                </div>
              </div>

              {/* Seasonal price note */}
              <p className="font-body text-xs text-muted-foreground italic mb-3">
                * Prices may vary according to season &amp; availability.
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {lemonFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-leaf flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLemonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full btn-whatsapp font-body font-bold text-base shadow-farm"
              >
                <WhatsAppIcon />
                Order Now
              </a>
            </div>
          </article>
        </div>

        {/* ── Seasonal Products ── */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-seasonal/15 border border-seasonal/30 rounded-full px-5 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-seasonal" />
              <span className="font-handwritten text-seasonal text-lg">Seasonal Specials</span>
              <Sparkles className="w-4 h-4 text-seasonal" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-mud section-heading">
              Farm Spice Powders
            </h3>
            <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Stone-ground spice powders made from our own farm harvest — pure, aromatic, and traditionally prepared.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalProducts.map((product, idx) => (
              <article
                key={idx}
                className="painted-border-seasonal rounded-2xl overflow-hidden shadow-farm bg-offwhite-cream flex flex-col hover:shadow-farm-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Decorative top band */}
                <div className="h-2 bg-gradient-to-r from-seasonal via-turmeric to-seasonal" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + emoji */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-seasonal/15 flex items-center justify-center text-2xl shadow-xs">
                        {product.emoji}
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-mud leading-tight">{product.name}</h4>
                        <p className="font-handwritten text-seasonal text-sm">{product.gujarati}</p>
                      </div>
                    </div>
                    <span className="badge-seasonal px-2.5 py-1 rounded-full text-xs font-body font-bold shadow-xs flex-shrink-0">
                      🌿 Seasonal
                    </span>
                  </div>

                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 flex-1">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 font-body text-sm text-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-seasonal flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4 text-center">
                    <span className="font-body text-xs text-muted-foreground italic">
                      Contact us for pricing &amp; availability
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/919978510084?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full btn-whatsapp font-body font-bold text-sm shadow-farm"
                  >
                    <WhatsAppIcon />
                    Order Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
