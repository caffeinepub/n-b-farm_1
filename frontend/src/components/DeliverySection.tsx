import React from 'react';
import { MapPin, Clock, Package, Users } from 'lucide-react';

const deliveryPoints = [
  {
    icon: <MapPin className="w-8 h-8" />,
    emoji: '🏘️',
    title: 'Local Doorstep Delivery',
    desc: 'We deliver directly to your home in Anjar, Kutch and surrounding areas. No hassle, no trips to the market.',
    color: 'bg-terracotta/10 text-terracotta border-terracotta/20'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    emoji: '🌅',
    title: 'Fresh Morning Milk Supply',
    desc: 'Milk is collected and delivered fresh every morning so you start your day with pure goodness.',
    color: 'bg-turmeric/10 text-mud border-turmeric/20'
  },
  {
    icon: <Package className="w-8 h-8" />,
    emoji: '📦',
    title: 'Seasonal Mango Shipping',
    desc: 'During mango season, we carefully pack and ship your pre-ordered boxes to ensure they arrive fresh.',
    color: 'bg-leaf/10 text-leaf border-leaf/20'
  },
  {
    icon: <Users className="w-8 h-8" />,
    emoji: '🤝',
    title: 'Bulk Orders Accepted',
    desc: 'Planning a wedding, festival, or event? We accept bulk orders for both milk and mangoes. Contact us!',
    color: 'bg-mud/10 text-mud border-mud/20'
  }
];

const DeliverySection: React.FC = () => {
  return (
    <section id="delivery" className="py-20 bg-offwhite-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl">We Come to You</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            Delivery Information
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            From our farm to your family — we make sure every delivery is fresh, timely, and handled with care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryPoints.map((point, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border-2 ${point.color} shadow-card hover:shadow-farm transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{point.emoji}</div>
              <h3 className="font-serif font-bold text-mud text-lg mb-3 leading-tight">{point.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-mud rounded-2xl p-8 text-center shadow-farm-lg">
          <p className="font-handwritten text-turmeric text-2xl mb-2">Ready to order?</p>
          <h3 className="font-serif text-2xl font-bold text-offwhite mb-4">
            Contact us for delivery details in your area
          </h3>
          <a
            href="https://wa.me/919978510084?text=Hello%2C%20I%20would%20like%20to%20know%20about%20delivery%20options%20from%20N.B.%20Farm."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp px-6 py-3 rounded-full font-body font-bold text-base shadow-farm"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask About Delivery
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
