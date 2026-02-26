import React from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import { Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Why Choose Us', id: 'why-us' },
  { label: 'Delivery', id: 'delivery' },
  { label: 'Location', id: 'location' },
  { label: 'Contact', id: 'contact' }
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'nb-farm');

  return (
    <footer className="bg-mud text-offwhite">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-turmeric via-terracotta to-leaf" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/nb-farm-logo.dim_512x512.png"
                alt="NB Farm — By Dr. Raval"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="font-handwritten text-turmeric text-xl italic mb-4 leading-relaxed">
              "Rooted in Tradition. Delivered with Purity."
            </p>
            <p className="font-body text-offwhite/70 text-sm leading-relaxed mb-5 max-w-sm">
              A family-run farm in the heart of Kutch, bringing you the purest Gir A2 milk and
              naturally grown mangoes — straight from our land to your home.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="N.B. Farm on Instagram"
                className="w-10 h-10 rounded-full bg-offwhite/10 hover:bg-offwhite/20 flex items-center justify-center transition-colors"
              >
                <SiInstagram className="w-4 h-4 text-offwhite" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="N.B. Farm on Facebook"
                className="w-10 h-10 rounded-full bg-offwhite/10 hover:bg-offwhite/20 flex items-center justify-center transition-colors"
              >
                <SiFacebook className="w-4 h-4 text-offwhite" />
              </a>
              <a
                href="https://wa.me/919978510084"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="N.B. Farm on WhatsApp"
                className="w-10 h-10 rounded-full bg-offwhite/10 hover:bg-offwhite/20 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-offwhite" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-turmeric text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => smoothScrollTo(link.id)}
                    className="font-body text-sm text-offwhite/70 hover:text-turmeric transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-turmeric text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-turmeric mt-0.5 flex-shrink-0">📍</span>
                <p className="font-body text-sm text-offwhite/70 leading-relaxed">
                  Khambhra – Ningal Road,<br />
                  Opp. HRCL Pumping Station,<br />
                  Ningal Village, Anjar,<br />
                  Kutch – 370110
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-turmeric flex-shrink-0 mt-0.5">📞</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919978510084" className="font-body text-sm text-offwhite/70 hover:text-turmeric transition-colors">
                    +91 99785 10084
                  </a>
                  <a href="tel:+919375310987" className="font-body text-sm text-offwhite/70 hover:text-turmeric transition-colors">
                    +91 93753 10987
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-turmeric flex-shrink-0">✉️</span>
                <a href="mailto:purvang2006@gmail.com" className="font-body text-sm text-offwhite/70 hover:text-turmeric transition-colors break-all">
                  purvang2006@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-offwhite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-body text-xs text-offwhite/50">
            © {year} N.B. Farm. All rights reserved.
          </p>
          <p className="font-body text-xs text-offwhite/50 flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-terracotta fill-terracotta inline" aria-label="love" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-turmeric hover:text-turmeric/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
