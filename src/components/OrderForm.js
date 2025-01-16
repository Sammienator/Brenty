import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderForm = ({ teaId }) => {
    const [formData, setFormData] = useState({ name: '', email: '', teaId: teaId });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to your server
        const token = generateToken(); // Simulated token generation
        console.log('Form Submitted:', formData, 'Token:', token);
        // Send an email or store in a database
        navigate('/order-confirmation', { state: { token } });
    };

    // Simple token generation for demonstration
    const generateToken = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Order Tea</h2>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                className="w-full mb-4 p-2 border rounded"
            />
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                className="w-full mb-4 p-2 border rounded"
            />
            <button 
                type="submit" 
                className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
            >
                Submit Order
            </button>
        </form>
    );
};

export default OrderForm;