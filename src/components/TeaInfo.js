import React from 'react';

import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import raw from '../assets/raw.jpg';
import masala from '../assets/masala.jpg';

const teasInfo = [
  {
    imgSrc: pic5,
    title: 'Green Tea',
    description: 'Rich in antioxidants, helps boost metabolism and improve brain function.',
  },
  {
    imgSrc: pic4,
    title: 'Black Tea',
    description: 'Provides a rich flavor and is known to improve heart health and reduce cholesterol.',
  },
  {
    imgSrc: teajar,
    title: 'Oolong Tea',
    description: 'Combines the qualities of green and black tea, beneficial for weight loss and skin health.',
  },
  {
    imgSrc: lemon,
    title: 'Green Tea',
    description: 'Rich in antioxidants, helps boost metabolism and improve brain function.',
  },
  {
    imgSrc: masala,
    title: 'Black Tea',
    description: 'Provides a rich flavor and is known to improve heart health and reduce cholesterol.',
  },
  {
    imgSrc: raw,
    title: 'Oolong Tea',
    description: 'Combines the qualities of green and black tea, beneficial for weight loss and skin health.',
  },
  // Add more tea info here
];

const TeaInfo = () => {
  return (
    <section id="info" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Tea Benefits</h2>
        <div className="mt-8 space-y-8">
          {teasInfo.map((tea, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <img src={tea.imgSrc} alt={tea.title} className="w-full md:w-1/2 h-64 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{tea.title}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{tea.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaInfo;
