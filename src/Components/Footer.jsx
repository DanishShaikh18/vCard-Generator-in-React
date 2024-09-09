// src/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className=" w-full text-center pt-0.5 pb-0.5 bottom-0 left-0">
            {/* Horizontal Line */}
            <hr className="border-t-2 border-gray w-full mb-2" />
            
            {/* Footer Text */}
            <p className="text-black-600 text-lg font-medium font-montserrat ">
                Design by Ashfaque Shaikh & Developed by Danish Shaikh
            </p>
        </footer>
    );
}

export default Footer;
