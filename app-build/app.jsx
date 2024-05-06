// App.jsx
import React from 'react';
import Header from './src/components/header'; 
import HeroSection from './src/components/hero';
import ServiceSection from './src/components/service';
import Footer from './src/components/footer'
import './src/index.css'
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection/>
      <Footer/>
      
    </div>
  );
}

export default App;

