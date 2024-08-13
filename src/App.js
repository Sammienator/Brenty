import React from 'react';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'; // Removed .js extension
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import TeaInfo from './components/TeaInfo';
import Shop from './components/Shop';
import Cutlery from './components/Cutlery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import './App.css'; // Ensure Tailwind CSS is configured properly

function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Gallery />
      <TeaInfo />
      <Shop/>
      <Cutlery />
      <Testimonials />
      <Footer />
      {/* Other components will go here */}
    </div>
    </>
    
  );
}

export default App;
