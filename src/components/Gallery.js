import React from 'react';
import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import raw from '../assets/raw.jpg';
import masala from '../assets/masala.jpg';

const teas = [
  { src: lemon, name: 'Green Tea' },
  { src: teajar, name: 'Black Tea' },
  { src: pic4, name: 'Oolong Tea' },
  { src: pic5, name: 'Herbal Tea' },
  { src: raw, name: 'White Tea' },
  { src: masala, name: 'Chai Tea' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Tea Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teas.map((tea, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img src={tea.src} alt={tea.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tea.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
