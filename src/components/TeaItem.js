import React from 'react';
import { Link } from 'react-router-dom';

const TeaItem = ({ id, name, description, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-sm">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-700">{description}</p>
                <Link to={`/order/${id}`} className="block mt-4 bg-teal-500 text-white rounded py-2 px-4 hover:bg-teal-600 text-center">
                    Order
                </Link>
            </div>
        </div>
    );
};

export default TeaItem;