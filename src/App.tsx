import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import StorySection from './components/StorySection';
import CarGallery from './components/CarGallery';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <StorySection />
        <CarGallery />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
