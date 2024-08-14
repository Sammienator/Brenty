import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'

const carouselImages = [
  { src: pic1, caption: 'Discover teas,in the Middle East!' },
  { src:  pic2, caption: 'A journey in every sip, Simplicitea?' },
  { src:  pic3, caption: 'Tradition and qualitea!' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <div className="relative h-screen">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50 dark:opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white dark:text-gray-300">
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">{image.caption}</h1>
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="600">
              <button className="px-6 py-3 bg-[#DBB5B5] dark:bg-[#DBB5B5] rounded-full hover:bg-green-700 dark:hover:bg-green-800 text-black">Shop Now</button>
              <button className="px-6 py-3 bg-transparent border border-white dark:border-gray-300 rounded-full hover:bg-[#DBB5B5] dark:hover:bg-[#DBB5B5] hover:text-black  text-white dark:hover:text-gray-800">Learn More</button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white dark:text-gray-300 text-2xl">‹</button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white dark:text-gray-300 text-2xl">›</button>
    </div>
  );
};

export default HeroSection;
