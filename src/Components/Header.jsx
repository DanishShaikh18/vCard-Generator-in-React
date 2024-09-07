// src/Header.jsx
import React from 'react';

function Header() {
    return (
        <header className="bg-yellow-400 w-full h-auto px-4 py-2 flex items-center justify-center">
            <img
                src="src\Images\logo.png" // Ensure the image path is relative to the public directory or correct within Vite's handling of assets.
                alt="Logo"
                className="object-contain max-w-full h-auto"
            />
        </header>
    );
}

export default Header;
