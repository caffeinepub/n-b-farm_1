import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: '/assets/generated/farm-gallery-1.dim_1200x800.jpg',
    alt: 'Lush mango orchard at N.B. Farm with rows of mango trees in golden light',
    caption: 'Mango Orchard',
    emoji: '🥭'
  },
  {
    src: '/assets/generated/flowering-mangoes.dim_1200x800.jpg',
    alt: 'Flowering mango trees at golden sunset hour at N.B. Farm, Kutch',
    caption: 'Flowering Mangoes',
    emoji: '🌸'
  },
  {
    src: '/assets/generated/farm-gallery-3.dim_800x1200.jpg',
    alt: 'Adorable Gir calf resting peacefully at N.B. Farm',
    caption: 'Our Gir Calf',
    emoji: '🐄'
  },
  {
    src: '/assets/generated/farm-greenery.dim_1200x800.jpg',
    alt: 'Palm tree lined farm path with lush greenery at N.B. Farm, Kutch',
    caption: 'Farm Greenery',
    emoji: '🌴'
  },
  {
    src: '/assets/IMG_3229-1.jpeg',
    alt: 'Farmer harvesting fresh produce in the lush green fields at N.B. Farm',
    caption: 'Harvesting at the Farm',
    emoji: '🌾'
  },
  {
    src: '/assets/IMG_0151.jpeg',
    alt: 'Farmer proudly holding fresh mangoes from the mango orchard at N.B. Farm',
    caption: 'Farmer with Fresh Mangoes',
    emoji: '🥭'
  },
  {
    src: '/assets/IMG_7577.jpeg',
    alt: 'Sunlit sandy farm pathway lined with tall coconut palm trees at N.B. Farm',
    caption: 'Farm Pathway',
    emoji: '🌴'
  },
  {
    src: '/assets/IMG_6349.jpeg',
    alt: 'Beautiful Gir cows grazing peacefully under the shade of trees at N.B. Farm',
    caption: 'Our Gir Cows Grazing',
    emoji: '🐄'
  },
  {
    src: '/assets/IMG_7576.jpeg',
    alt: 'Rows of mango trees in the orchard at N.B. Farm, Kutch',
    caption: 'Mango Orchard',
    emoji: '🥭'
  },
  {
    src: '/assets/generated/lemon-trees.dim_1200x800.jpg',
    alt: 'Fresh lemon trees in the citrus orchard at N.B. Farm, Kutch',
    caption: 'Lemon Trees',
    emoji: '🍋'
  }
];

const FarmGallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
    );
  };

  return (
    <section id="gallery" className="py-20 bg-offwhite-cream jute-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl tracking-wide">From Our Land</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            A Glimpse of Our Farm
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Walk through the fields, meet our Gir cows, and breathe in the freshness of Kutch.
          </p>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative painted-border rounded-2xl overflow-hidden shadow-farm cursor-pointer hover:shadow-farm-lg hover:-translate-y-1 transition-all duration-300"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.caption}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-mud/85 via-mud/40 to-transparent px-5 py-5">
                <p className="font-serif font-bold text-offwhite-cream text-lg flex items-center gap-2 drop-shadow">
                  {image.emoji && <span className="text-xl">{image.emoji}</span>}
                  {image.caption}
                </p>
              </div>
              {/* Hover zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-mud/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-offwhite-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-mud/92 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-offwhite-cream/20 hover:bg-offwhite-cream/40 flex items-center justify-center text-offwhite-cream transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-offwhite-cream/20 hover:bg-offwhite-cream/40 flex items-center justify-center text-offwhite-cream transition-colors text-2xl font-bold z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-farm-lg"
            />
            <p className="text-center font-serif text-offwhite-cream text-xl mt-4 font-bold">
              {galleryImages[lightboxIndex].emoji && (
                <span className="mr-2">{galleryImages[lightboxIndex].emoji}</span>
              )}
              {galleryImages[lightboxIndex].caption}
            </p>
            <p className="text-center font-body text-offwhite-cream/60 text-sm mt-1">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-offwhite-cream/20 hover:bg-offwhite-cream/40 flex items-center justify-center text-offwhite-cream transition-colors text-2xl font-bold z-10"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default FarmGallerySection;
