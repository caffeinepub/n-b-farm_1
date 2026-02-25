import React from 'react';
import { Leaf, Shield, Truck, Heart, Star } from 'lucide-react';

const highlights = [
  {
    icon: <Star className="w-7 h-7" />,
    emoji: '🌾',
    title: 'Farm Fresh & Pure',
    desc: 'Milk collected fresh every morning. Mangoes picked at peak ripeness. No middlemen, no delays.'
  },
  {
    icon: <Heart className="w-7 h-7" />,
    emoji: '🐄',
    title: 'Ethical & Cruelty-Free',
    desc: 'Our Gir cows are treated with love and respect. Happy cows give the best milk — always.'
  },
  {
    icon: <Shield className="w-7 h-7" />,
    emoji: '🌿',
    title: 'No Chemicals or Preservatives',
    desc: 'Zero artificial additives, hormones, or pesticides. What you get is 100% natural goodness.'
  },
  {
    icon: <Truck className="w-7 h-7" />,
    emoji: '🏠',
    title: 'Direct Farm-to-Home',
    desc: 'We deliver straight from our farm to your doorstep. Fresh, fast, and reliable every time.'
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    emoji: '🪔',
    title: 'Traditional Indian Values',
    desc: 'Rooted in centuries of Indian farming wisdom. We honour the land, the cow, and our community.'
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-mud/5 dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl">Our Promise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            Why Choose N.B. Farm?
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            We don't just sell products — we share a way of life rooted in purity, tradition, and trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`bg-offwhite-cream rounded-2xl p-6 shadow-card border border-border hover:shadow-farm transition-all duration-300 hover:-translate-y-1 group ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-turmeric/20 flex items-center justify-center text-terracotta group-hover:bg-turmeric/30 transition-colors flex-shrink-0">
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="font-serif font-bold text-mud text-lg leading-tight">{item.title}</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
