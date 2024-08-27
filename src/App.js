import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import Location from './components/Location';
import Form from './components/Form';

function App() {

  AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
  });

  return (
    <>
    <div className="App">
      <Navbar />
      <HeroSection />
      <Location/>
      {/* this is for testing */}
      <Gallery />
      <TeaInfo />
      <Shop/>
      <Cutlery />
      <AboutUs />
      <Testimonials />
      <Form/>
      <Footer />
      {/* Other components will go here */}
    </div>
    </>
    
  );
}

export default App;
