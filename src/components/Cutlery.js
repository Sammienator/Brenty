import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaShoppingCart } from 'react-icons/fa';
import teajar from '../assets/teajar.png';
import cut1 from '../assets/cut1.png';
import cut2 from '../assets/cut2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cutleryItems = [
  { id: 1, name: 'Tea Infuser', price: 'Kshs 10000', image: teajar, soldOut: false },
  { id: 2, name: 'Tea Cup Set', price: 'Kshs 16000', image: cut1, soldOut: false },
  { id: 3, name: 'Tea Infuser', price: 'Kshs 18000', image: cut2, soldOut: false },
  { id: 4, name: 'Tea Cup Set', price: 'Kshs 25000', image: cut2, soldOut: false },
  { id: 5, name: 'Tea Infuser', price: 'Kshs 35000', image: cut1, soldOut: false },
  { id: 6, name: 'Tea Cup Set', price: 'Kshs 45000', image: teajar, soldOut: false },
];

const Cutlery = () => {
  const [cart, setCart] = useState([]);
  const [checkoutDetails, setCheckoutDetails] = useState({
    email: '',
    deliveryLocation: ''
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
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

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log('Sending email with:', { cart, checkoutDetails });
    // Placeholder for email sending logic
    setCart([]);
    setCheckoutDetails({ email: '', deliveryLocation: '' });
    setIsPopupOpen(false); // Close the popup after checkout
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
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-1 ${item.soldOut ? 'opacity-50' : ''}`}
                data-aos={index % 3 === 0 ? 'fade-up' : index % 3 === 1 ? 'fade-down' : 'zoom-in'}
                data-aos-duration="1000"
              >
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-green-700 transition duration-300 ease-in-out">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.price}</p>
                  <div className="flex items-center justify-between mt-4">
                    <button 
                      onClick={() => addToCart(item)} 
                      className={`px-6 py-2 bg-[#FFC300] dark:bg-[#FFC300] text-white square hover:bg-green-600 dark:hover:bg-green-700 transition duration-300 ease-in-out flex items-center ${item.soldOut ? 'cursor-not-allowed bg-gray-400' : ''}`}
                      disabled={item.soldOut}
                    >
                      {item.soldOut ? 'Sold Out' : 'Add to Cart'} <FaShoppingCart className="ml-2" />
                    </button>
                    {cart.find(cartItem => cartItem.id === item.id) && (
                      <input 
                        type="number" 
                        min="1" 
                        value={cart.find(cartItem => cartItem.id === item.id)?.quantity || 1}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="mt-2 w-20"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Show 'Checkout' button if there are items in the cart */}
        {cart.length > 0 && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setIsPopupOpen(true)} 
              className="px-6 py-3 bg-green-500 text-white hover:bg-green-700 transition duration-300"
            >
              Checkout
            </button>
          </div>
        )}

        {/* Popup for checkout */}
        {isPopupOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Checkout
                      </h3>
                      <form onSubmit={handleCheckout}>
                        <input 
                          type="email" 
                          value={checkoutDetails.email} 
                          onChange={(e) => setCheckoutDetails({ ...checkoutDetails, email: e.target.value })} 
                          placeholder="Your Email" 
                          required 
                          className="mt-4 w-full p-2 border rounded"
                        />
                        <select 
                          value={checkoutDetails.deliveryLocation} 
                          onChange={(e) => setCheckoutDetails({ ...checkoutDetails, deliveryLocation: e.target.value })} 
                          required 
                          className="mt-4 w-full p-2 border rounded"
                        >
                          <option value="">Select Delivery Location</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Kuwait">Kuwait</option>
                        </select>
                        <button type="submit" className="mt-4 px-6 py-2 bg-green-500 text-white hover:bg-green-700 transition duration-300">Submit Order</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" onClick={() => setIsPopupOpen(false)} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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