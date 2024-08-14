import React from 'react';
import Slider from 'react-slick';
import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import raw from '../assets/raw.jpg';
import masala from '../assets/masala.jpg';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  { id: 1, name: 'Green Tea', price: 'Kshs 1000', image: lemon, rating: 4.5, soldOut: false },
  { id: 2, name: 'Black Tea', price: 'Kshs 4000', image: raw, rating: 4.8, soldOut: false },
  { id: 3, name: 'Oolong Tea', price: 'Kshs 5000', image: pic5, rating: 5, soldOut: false },
  { id: 4, name: 'Green Tea', price: 'Kshs 8000', image: masala, rating: 4.9, soldOut: false },
  { id: 5, name: 'Black Tea', price: 'Kshs 12000', image: pic4, rating: 4.7, soldOut: true },
  { id: 6, name: 'Oolong Tea', price: 'Kshs 15000', image: teajar, rating: 4.9, soldOut: true },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`text-yellow-400 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    );
  }
  return stars;
};

const Shop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 7 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="shop" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up" data-aos-duration="1000">Shop Our Teas</h2>
        <Slider {...settings} className="mt-8">
          {products.map((product, index) => (
            <div key={product.id} className="px-4">
              <div
                className={`bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transform transition duration-300 ease-in-out ${product.soldOut ? 'opacity-50' : 'hover:scale-105'}`}
                data-aos={index % 3 === 0 ? 'fade-up' : index % 3 === 1 ? 'fade-down' : 'zoom-in'}
                data-aos-duration="1000"
              >
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-green-700 transition duration-300 ease-in-out">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-700 dark:text-gray-300">{product.price}</p>
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      className={`px-6 py-2 bg-green-500 dark:bg-green-600 text-white ${product.soldOut ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-green-600 dark:hover:bg-green-700'} transition duration-300 ease-in-out square`}
                      disabled={product.soldOut}
                    >
                      {product.soldOut ? 'Sold Out' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black hover:bg-black dark:bg-white dark:hover:bg-green-700`}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black hover:bg-black dark:bg-green-600 dark:hover:bg-green-700`}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default Shop;
