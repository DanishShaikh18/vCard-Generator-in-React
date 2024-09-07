// src/MainComponent.jsx
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import QRCodeBox from './QRCodeBox';

function MainComponent() {
    // State to store form data
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        organization: '',
        email: ''
    });

    // Handle form data change
    const handleFormChange = (data) => {
        setFormData(data);
    };

    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-start lg:ml-40 w-full max-w-[90%] mx-auto">
            {/* Form Component */}
            <FormComponent onFormChange={handleFormChange} />

            {/* QR Code Box */}
            <div className="lg:flex lg:justify-end w-full lg:w-auto pt-10">
                <QRCodeBox formData={formData} />
            </div>
        </div>
    );
}

export default MainComponent;
