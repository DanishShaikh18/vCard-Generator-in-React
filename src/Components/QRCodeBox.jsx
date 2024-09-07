// src/QRCodeBox.jsx
import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCodeBox({ formData }) {
    const [qrData, setQrData] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);
    const qrRef = useRef(null);

    const generateQRCodeValue = () => {
        const { fullName, phone, organization, email } = formData;
        // Combine form data into a single string for the QR code
        return `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
TEL:${phone}
ORG:${organization}
EMAIL:${email}
END:VCARD`;
    };

    const handleGenerateQRCode = () => {
        setQrData(generateQRCodeValue());
        setIsGenerated(true);
    };

    const handleDownloadQRCode = () => {
        const svgElement = qrRef.current;

        // Create a new canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = 800;
        canvas.height = 800;

        // Get SVG data
        const svgData = new XMLSerializer().serializeToString(svgElement);

        // Create an image element and load SVG data into it
        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + window.btoa(svgData);

        img.onload = () => {
            // Calculate scaling factor to fit the QR code within the 800x800 canvas
            const scale = 800 / Math.max(img.width, img.height);

            // Clear canvas before drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw SVG image onto canvas with scaling
            ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);

            // Convert canvas to PNG data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create a link element and set the download attribute
            const link = document.createElement('a');
            link.href = dataURL;

            // Generate the filename
            const { fullName } = formData;
            const fileName = `${fullName.split(' ')[0]}_QR.png`;
            link.download = fileName;

            // Trigger the download
            link.click();
        };
    };

    return (
        <div className="flex flex-col-reverse items-center lg:flex-col">
            {/* QR Box */}
            <div className="w-[340px] h-[340px] border-[1px] border-yellow-400 rounded-[13px] bg-white flex items-center justify-center mt-4 lg:mt-0 mb-4 p-4">
                {isGenerated ? (
                    <QRCodeSVG
                        ref={qrRef} // Use ref to access the SVG element
                        value={qrData}
                        size={320} // Adjust the size as needed
                        style={{ height: '100%', width: '100%' }}
                    />
                ) : (
                    <img
                        src="public\images\def_QR.jpg"
                        alt="QR Code"
                        className="object-fill w-full h-full"
                    />
                )}
            </div>

            {/* Generate/Download Button */}
            <button 
                className={`w-[90%] h-16 text-[27px] ${isGenerated ? 'bg-green-600' : 'bg-yellow-400'} text-black font-sans font-bold rounded-[18px] lg:mb-4`}
                style={{ boxShadow: '2.252px 2.252px 9.01px 1.126px rgba(0, 0, 0, 0.25)' }}
                onClick={isGenerated ? handleDownloadQRCode : handleGenerateQRCode}
            >
                {isGenerated ? 'Download' : 'Generate'}
            </button>
        </div>
    );
}

export default QRCodeBox;
