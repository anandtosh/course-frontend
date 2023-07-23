import React, { useState } from 'react';
import Select from 'react-select';

const countryOptions = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'UK' },
    // Add more countries as needed
];

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        country: null,
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCountryChange = (selectedOption) => {
        setFormData({
            ...formData,
            country: selectedOption,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 grid md:grid-cols-2 gap-4">
                <h1 className="col-span-2 text-2xl font-bold mb-6">Register</h1>
                <div className='col-span-1'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block font-medium mb-2">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                                placeholder="Enter your mobile number"
                                value={formData.mobile}
                                onChange={handleInputChange}
                            />
                        </div>


                    </form>
                </div>
                <div className='col-span-1'>
                    <div className="mb-4">
                        <label htmlFor="country" className="block font-medium mb-2">
                            Country
                        </label>
                        <Select
                            id="country"
                            name="country"
                            options={countryOptions}
                            value={formData.country}
                            onChange={handleCountryChange}
                            placeholder="Select your country"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='col-span-2'>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded px-4 py-2 font-medium hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
