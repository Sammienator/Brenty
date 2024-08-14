import React from 'react';
import Slider from 'react-slick';
import { FaShoppingCart } from 'react-icons/fa';
import teajar from '../assets/teajar.png';
import cut1 from '../assets/cut1.png';
import cut2 from '../assets/cut2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cutleryItems = [
  { id: 1, name: 'Tea Infuser', price: 'Kshs 10000', image: teajar },
  { id: 2, name: 'Tea Cup Set', price: 'Kshs 16000', image: cut1 },
  { id: 3, name: 'Tea Infuser', price: 'Kshs 18000', image: cut2 },
  { id: 4, name: 'Tea Cup Set', price: 'Kshs 25000', image: cut2 },
  { id: 5, name: 'Tea Infuser', price: 'Kshs 35000', image: cut1 },
  { id: 6, name: 'Tea Cup Set', price: 'Kshs 45000', image: teajar },
];

const Cutlery = () => {
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
    <section id="cutlery" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up" data-aos-duration="1000">
          Tea Cutlery
        </h2>
        <Slider {...settings} className="mt-8">
          {cutleryItems.map((item, index) => (
            <div key={item.id} className="px-4">
              <div
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-1"
                data-aos={index % 3 === 0 ? 'fade-up' : index % 3 === 1 ? 'fade-down' : 'zoom-in'}
                data-aos-duration="1000"
              >
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-green-700 transition duration-300 ease-in-out">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.price}</p>
                  <button className="mt-4 px-6 py-2 bg-green-500 dark:bg-green-600 text-white square hover:bg-green-600 dark:hover:bg-green-700 transition duration-300 ease-in-out flex items-center">
                    Add to Cart <FaShoppingCart className="ml-2" />
                  </button>
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
      className={`${className} bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700`}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700`}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default Cutlery;
