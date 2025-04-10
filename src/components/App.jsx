import React from 'react';
import './App.css';
import AboutSection from './AboutSection/AboutSection';
import CategorySection from './CategorySection/CategorySection';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';
import GallerySection from './GallerySection/GallerySection';
import Header from './Header/Header';
import PriceSection from './PriceSection/PriceSection';
import ScheduleSection from './ScheduleSection/ScheduleSection';
import SingersSection from './SingersSection/SingersSection';
import SponsorsSection from './SponsorsSection/Sponsors';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';

function App() {
  return (
    <div className="App">
    <Header />
    <CategorySection />
    <AboutSection />
    <SingersSection />
    <ScheduleSection />
    <PriceSection />
    <SponsorsSection />
    <TestimonialsSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
  );
}

export default App;
