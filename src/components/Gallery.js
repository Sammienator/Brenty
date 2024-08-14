import React from 'react';
import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import { FaLeaf, FaHeart, FaBolt } from 'react-icons/fa'; // Example icons

const teas = [
  { 
    src: lemon, 
    name: 'Herbal Range', 
    benefits: [
      { icon: FaLeaf, description: 'Rich in antioxidants' },
      { icon: FaHeart, description: 'Supports heart health' },
      { icon: FaBolt, description: 'Boosts energy levels' }
    ]
  },
  { 
    src: teajar, 
    name: ' Essential Range', 
    benefits: [
      { icon: FaHeart, description: 'Improves heart health' },
      { icon: FaBolt, description: 'Increases alertness' },
      { icon: FaLeaf, description: 'Contains powerful antioxidants' }
    ]
  },
  { 
    src: pic4, 
    name: 'Nova Range', 
    benefits: [
      { icon: FaLeaf, description: 'Boosts metabolism' },
      { icon: FaHeart, description: 'Promotes heart health' },
      { icon: FaBolt, description: 'Enhances energy levels' }
    ]
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up" data-aos-duration="1000">
          Tea Gallery
        </h2>
        <div className="space-y-16 mt-8">
          {teas.map((tea, index) => (
            <div key={index} className=" rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" data-aos="fade-up" data-aos-duration="1000">
              <div className="flex justify-center">
                <img src={tea.src} alt={tea.name} className="w-full max-w-xs object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{tea.name}</h3>
                <div className="flex justify-center space-x-8">
                  {tea.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <benefit.icon className="text-4xl text-[#DBB5B5] dark:text-[#DBB5B5] mb-2" />
                      <p className="text-gray-600 dark:text-gray-300 text-center">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
