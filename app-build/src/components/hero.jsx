import React from 'react'



const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Construction Co.</h1>
          <p className="text-lg text-gray-700 mb-6">We build dreams into reality. With years of experience and dedication, we deliver quality construction services.</p>
        </div>
        <div className="w-1/2">
          <img src="/public/pixer.jpg" alt="Construction" className="rounded-lg shadow-xl"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

