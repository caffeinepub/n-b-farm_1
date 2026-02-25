import React from 'react';
import { Heart, Leaf, Sun } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Family-Run Traditional Farm',
    desc: 'Three generations of farming wisdom, passed down with love and dedication to the land.'
  },
  {
    icon: <span className="text-2xl">🐄</span>,
    title: 'Ethical Cow Care & Natural Feeding',
    desc: 'Our Gir cows roam freely, fed on natural grass and traditional fodder — no hormones, ever.'
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Sustainable & Chemical-Free',
    desc: 'We farm the way our ancestors did — in harmony with nature, without chemicals or pesticides.'
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Rooted in Indian Traditions',
    desc: 'Every drop of milk and every mango carries the soul of Kutch — pure, authentic, and desi.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-offwhite-cream jute-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl">Our Story</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            About N.B. Farm
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Nestled in the heart of Kutch, Gujarat, N.B. Farm is where tradition meets purity.
            We believe in farming the old way — with patience, care, and deep respect for nature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="relative">
            <div className="painted-border rounded-2xl overflow-hidden shadow-farm-lg">
              <img
                src="/assets/generated/gir-cow-illustration.dim_800x600.png"
                alt="Gir cow in a lush green Indian farm setting, traditional folk art illustration"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-turmeric text-mud px-4 py-3 rounded-2xl shadow-farm font-body font-bold text-sm text-center">
              <div className="font-serif text-2xl font-bold">3</div>
              <div>Generations</div>
              <div>of Farming</div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-offwhite-cream border border-border rounded-xl p-5 shadow-card hover:shadow-farm transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-turmeric/20 flex items-center justify-center text-terracotta mb-3 group-hover:bg-turmeric/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold text-mud text-base mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-14 text-center">
          <blockquote className="font-handwritten text-2xl md:text-3xl text-terracotta italic">
            "जहाँ गाय है, वहाँ समृद्धि है।"
          </blockquote>
          <p className="font-body text-muted-foreground mt-2 text-sm">
            Where there is a cow, there is prosperity. — Ancient Indian wisdom
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
