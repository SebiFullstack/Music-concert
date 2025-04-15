import React, { useState } from 'react';
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
  const [activeDay, setActiveDay] = useState(1); // Состояние для активного дня

  const days = [
    { day: 'DAY 01', date: '16 AUGUST' },
    { day: 'DAY 02', date: '17 AUGUST' },
    { day: 'DAY 03', date: '18 AUGUST' },
  ];

  return (
    <div className="App">
      <Header />
      <CategorySection />
      <AboutSection />
      <SingersSection />
      <ScheduleSection days={days} activeDay={activeDay} setActiveDay={setActiveDay} />
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