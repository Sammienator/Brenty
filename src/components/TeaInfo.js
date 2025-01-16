import React from 'react';
import lemon from '../assets/lemon.png';
import pic5 from '../assets/pic5.png';
import masala from '../assets/masala.jpg';

const teasInfo = [
  {
    imgSrc: pic5,
    title: 'Essential Range',
    description: 'Rich in antioxidants, helps boost metabolism, improves brain function, and promotes fat loss.',
  },
  
  {
    imgSrc: lemon,
    title: 'Herbal Range',
    description: 'Boosts immunity, detoxifies the body, improves digestion, and promotes radiant skin.',
  },
  {
    imgSrc: masala,
    title: 'Nova Range',
    description: 'Enhances digestion, boosts immunity, improves circulation, and has anti-inflammatory properties.',
  },
 
];

const TeaInfo = () => {
  return (
    <section id="info" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Tea Benefits
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {teasInfo.map((tea, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} 
              data-aos-duration="4000"
            >
              <div className="w-64 h-64 mb-6">
                <img 
                  src={tea.imgSrc} 
                  alt={tea.title} 
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-[#C39898] transition duration-1000 ease-in-out">
                  {tea.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-1000 ease-in-out">
                  {tea.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaInfo;
