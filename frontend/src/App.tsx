import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import FarmGallerySection from './components/FarmGallerySection';
import PreOrderForm from './components/PreOrderForm';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import DeliverySection from './components/DeliverySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RangoliDivider from './components/RangoliDivider';

const App: React.FC = () => {
  return (
    <>
      {/* Sticky Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Rangoli divider */}
        <RangoliDivider />

        {/* About */}
        <AboutSection />

        {/* Rangoli divider */}
        <RangoliDivider flip />

        {/* Products */}
        <ProductsSection />

        {/* Rangoli divider */}
        <RangoliDivider />

        {/* Farm Gallery */}
        <FarmGallerySection />

        {/* Rangoli divider */}
        <RangoliDivider flip />

        {/* Pre-Order Form */}
        <PreOrderForm />

        {/* Rangoli divider */}
        <RangoliDivider />

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Rangoli divider */}
        <RangoliDivider flip />

        {/* Delivery */}
        <DeliverySection />

        {/* Rangoli divider */}
        <RangoliDivider />

        {/* Location */}
        <LocationSection />

        {/* Rangoli divider */}
        <RangoliDivider flip />

        {/* Contact */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;
