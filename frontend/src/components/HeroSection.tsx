import React from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-sunrise.dim_1920x1080.png')" }}
        role="img"
        aria-label="Peaceful Indian farm at sunrise with Gir cows grazing in golden fields"
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mud/60 via-mud/40 to-mud/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-mud/30 via-transparent to-mud/20" />

      {/* Decorative corner motifs */}
      <div className="absolute top-24 left-4 md:left-8 text-turmeric/40 text-6xl font-handwritten select-none pointer-events-none" aria-hidden="true">
        ❋
      </div>
      <div className="absolute top-24 right-4 md:right-8 text-turmeric/40 text-6xl font-handwritten select-none pointer-events-none" aria-hidden="true">
        ❋
      </div>
      <div className="absolute bottom-16 left-4 md:left-8 text-turmeric/30 text-4xl font-handwritten select-none pointer-events-none" aria-hidden="true">
        ✿
      </div>
      <div className="absolute bottom-16 right-4 md:right-8 text-turmeric/30 text-4xl font-handwritten select-none pointer-events-none" aria-hidden="true">
        ✿
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-turmeric/90 text-mud px-4 py-1.5 rounded-full text-sm font-body font-bold mb-6 shadow-farm">
          <span>🌾</span>
          <span>Straight from Kutch, Gujarat</span>
          <span>🌾</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite leading-tight mb-4 drop-shadow-lg">
          Pure Desi Goodness
          <br />
          <span className="text-turmeric italic">from Our Farm</span>
          <br />
          to Your Home
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 my-6" aria-hidden="true">
          <div className="h-px w-16 bg-turmeric/60" />
          <span className="text-turmeric text-2xl">🪔</span>
          <div className="h-px w-16 bg-turmeric/60" />
        </div>

        {/* Subtext */}
        <p className="font-body text-lg sm:text-xl text-offwhite/90 mb-2 drop-shadow">
          Fresh Gir A2 Milk from ethically raised cows.
        </p>
        <p className="font-body text-lg sm:text-xl text-offwhite/90 mb-10 drop-shadow">
          Seasonal mangoes grown with natural care.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => smoothScrollTo('products')}
            className="btn-turmeric px-8 py-4 rounded-full font-body font-bold text-lg shadow-farm-lg flex items-center gap-2 min-w-[200px] justify-center"
          >
            <span>🥛</span>
            Order Milk Today
          </button>
          <button
            onClick={() => smoothScrollTo('preorder')}
            className="btn-terracotta px-8 py-4 rounded-full font-body font-bold text-lg shadow-farm-lg flex items-center gap-2 min-w-[200px] justify-center"
          >
            <span>🥭</span>
            Pre-Order Mangoes
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-offwhite/60 animate-bounce">
          <span className="font-handwritten text-sm">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
