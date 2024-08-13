import React from 'react';
import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import raw from '../assets/raw.jpg';
import masala from '../assets/masala.jpg';

const products = [
  { id: 1, name: 'Green Tea', price: 'Kshs 1000', image: lemon },
  { id: 2, name: 'Black Tea', price: 'Kshs 4000', image: raw },
  { id: 3, name: 'Oolong Tea', price: 'Kshs 5000', image: pic5 },
  { id: 4, name: 'Green Tea', price: 'Kshs 8000', image: masala },
  { id: 5, name: 'Black Tea', price: 'Kshs 12000', image: pic4 },
  { id: 6, name: 'Oolong Tea', price: 'Kshs 15000', image: teajar },
  // Add more products here
];

const Shop = () => {
  return (
    <section id="shop" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Shop Our Teas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{product.price}</p>
                <button className="mt-4 px-6 py-3 bg-green-500 dark:bg-green-600 text-white rounded-full hover:bg-green-600 dark:hover:bg-green-700">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
