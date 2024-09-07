// src/FormComponent.jsx
import React, { useState } from 'react';

function FormComponent({ onFormChange }) {
    // State for form fields
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        organization: '',
        email: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        const updatedData = {
            ...formData,
            [id]: value
        };
        setFormData(updatedData);
        onFormChange(updatedData); // Send data to parent
    };

    return (
        <div className="w-full lg:w-[45%] lg:max-w-[45%] pr-4 lg:mr-40 mt-8 px-4 text-black">
            <form className="flex flex-col space-y-4">
                {/* Full Name */}
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="font-sans text-2xl">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="mt-2 p-3 w-full bg-gray-100 border border-yellow-400 rounded"
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                    <label htmlFor="phone" className="font-sans text-2xl">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="mt-2 p-3 w-full bg-gray-100 border border-yellow-400 rounded"
                    />
                </div>

                {/* Organization/Company */}
                <div className="flex flex-col">
                    <label htmlFor="organization" className="font-sans text-2xl">Organization/Company</label>
                    <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Enter your organization/company"
                        className="mt-2 p-3 w-full bg-gray-100 border border-yellow-400 rounded"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-sans text-2xl">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="mt-2 p-3 w-full bg-gray-100 border border-yellow-400 rounded"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormComponent;
