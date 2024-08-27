import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import worldwide from '../assets/worldwide.svg';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.error('Error sending email:', error.text);
            });
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-10 px-5 bg-gradient-to-r from-white via-[#FAD02E] to-[#FFC300] dark:bg-[#FFC300]">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img alt="Worldwide communication" src={worldwide} className="h-48 w-48" />
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Tea</label>
                        <select
                            name="tea_selection"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            required
                        >
                            <option value="">--Select Tea--</option>
                            {/* Add your tea options here */}
                            <option value="tea1">Tea 1</option>
                            <option value="tea2">Tea 2</option>
                            <option value="tea3">Tea 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Pick-Up Location</label>
                        <select
                            name="location_selection"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            required
                        >
                            <option value="">--Select Location--</option>
                            <option value="saudi_arabia">Saudi Arabia</option>
                            <option value="dubai">Dubai</option>
                            <option value="kuwait">Kuwait</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            name="message"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#FFC300] text-white rounded-md shadow-md hover:bg-[#FAD02E] transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
