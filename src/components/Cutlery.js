import React from 'react';


import teajar from '../assets/teajar.png';
import cut1 from '../assets/cut1.png';
import cut2 from '../assets/cut2.png';

const cutleryItems = [
  { id: 1, name: 'Tea Infuser', price: 'Kshs 10000', image: teajar },
  { id: 2, name: 'Tea Cup Set', price: 'Kshs 16000', image: cut1 },
  { id: 1, name: 'Tea Infuser', price: 'Kshs 18000', image: cut2 },
  { id: 2, name: 'Tea Cup Set', price: 'Kshs 25000', image: cut2 },
  { id: 1, name: 'Tea Infuser', price: 'Kshs 35000', image: cut1 },
  { id: 2, name: 'Tea Cup Set', price: 'Kshs 45000', image: teajar },
  // Add more cutlery items here
];

const Cutlery = () => {
  return (
    <section id="cutlery" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Tea Cutlery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cutleryItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.price}</p>
                <button className="mt-4 px-6 py-3 bg-green-500 dark:bg-green-600 text-white rounded-full hover:bg-green-600 dark:hover:bg-green-700">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cutlery;
