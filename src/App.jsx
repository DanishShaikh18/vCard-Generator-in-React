// src/App.js
import React from 'react';
import Header from './Components/Header';
import TitleContainer from './Components/TitleContainer';
import MainComponent from './Components/MainComponent';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* Container for positioning the styling image */}
      <div className="relative">
        {/* Desktop-only Styling Image */}
        <img
          src="src/assets/style_image.png" // Ensure this path is relative to the public directory
          alt="Styling Decoration"
          className="hidden lg:block absolute w-[100px] h-[540px] top-[190px] left-0 rotate-0 z-[-1]"
        />

        <Header />
        <TitleContainer />
        <MainComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
