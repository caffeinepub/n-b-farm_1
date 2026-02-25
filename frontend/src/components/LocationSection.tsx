import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-offwhite-warm jute-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl">Find Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            Farm Location
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Visit us at our farm in Ningal Village, Anjar, Kutch — where the milk is fresh and the mangoes are sweeter than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-farm border border-border">
            <iframe
              title="N.B. Farm Location"
              src="https://maps.google.com/maps?q=Ningal+Village,+Anjar,+Kutch,+Gujarat+370110,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address card */}
          <div className="bg-offwhite-cream painted-border rounded-2xl p-7 shadow-farm space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="font-serif text-xl font-bold text-mud">Our Address</h3>
              </div>
              <address className="not-italic font-body text-muted-foreground leading-relaxed pl-13 ml-1">
                <p>Khambhra – Ningal Road,</p>
                <p>Opp. HRCL Pumping Station,</p>
                <p>Ningal Village, Anjar,</p>
                <p className="font-semibold text-mud">Kutch – 370110, Gujarat</p>
              </address>
            </div>

            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-leaf/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-leaf" />
                </div>
                <h3 className="font-serif text-xl font-bold text-mud">Call Us</h3>
              </div>
              <div className="flex flex-col gap-2 ml-1">
                <a
                  href="tel:+919978510084"
                  className="font-body text-muted-foreground hover:text-terracotta transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-leaf flex-shrink-0" />
                  <span className="group-hover:underline">+91 99785 10084</span>
                </a>
                <a
                  href="tel:+919375310987"
                  className="font-body text-muted-foreground hover:text-terracotta transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-leaf flex-shrink-0" />
                  <span className="group-hover:underline">+91 93753 10987</span>
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-5">
              <a
                href="https://maps.app.goo.gl/BNfu3qvxa3uTBePJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full btn-primary font-body font-bold text-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
