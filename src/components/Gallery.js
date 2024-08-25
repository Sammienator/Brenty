import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import { FaLeaf, FaHeart, FaBolt } from 'react-icons/fa';

const teas = [
  { 
    image: lemon, // Single image for the carousel
    name: 'Herbal Range', 
    benefits: [
      { icon: FaLeaf, description: 'Rich in antioxidants' },
      { icon: FaHeart, description: 'Supports heart health' },
      { icon: FaBolt, description: 'Boosts energy levels' }
    ],
    description: 'Herbal Range teas are known for their powerful antioxidants and health benefits, including boosting energy and supporting heart health.'
  },
  { 
    image: teajar, // Single image for the carousel
    name: 'Essential Range', 
    benefits: [
      { icon: FaHeart, description: 'Improves heart health' },
      { icon: FaBolt, description: 'Increases alertness' },
      { icon: FaLeaf, description: 'Contains powerful antioxidants' }
    ],
    description: 'Essential Range teas are crafted to enhance alertness and improve heart health with natural antioxidants.'
  },
  { 
    image: pic4, // Single image for the carousel
    name: 'Nova Range', 
    benefits: [
      { icon: FaLeaf, description: 'Boosts metabolism' },
      { icon: FaHeart, description: 'Promotes heart health' },
      { icon: FaBolt, description: 'Enhances energy levels' }
    ],
    description: 'Nova Range teas are formulated to boost metabolism and energy levels, promoting overall well-being.'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up" data-aos-duration="1000">
          Tea Gallery
        </h2>
        <div className="mt-8">
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            useKeyboardArrows 
            autoPlay 
            interval={9000} // Set interval to 7 seconds (7000ms)
            showStatus={false} // Hide the status indicator
          >
            {teas.map((tea, index) => (
              <div key={index} className="relative">
                {/* Full-Width Image */}
                <img src={tea.image} alt={tea.name} className="w-full h-screen object-cover" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white p-8 bg-black bg-opacity-40">
                  <h3 className="text-3xl font-semibold mb-4">{tea.name}</h3>
                  <div className="flex justify-center space-x-4 mb-4">
                    {tea.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <benefit.icon className="text-4xl text-[#FFC300]" />
                        <p className="mt-2">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="max-w-2xl">{tea.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
