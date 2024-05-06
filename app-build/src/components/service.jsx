// ServiceSection.jsx
import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Renovation & Remodeling</h3>
            <p className="text-gray-600">Transform your space with our renovation and remodeling services, 
            tailored to meet your needs and exceed your expectations.</p>
          </div>
          {/* Service Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Interior Design</h3>
            <p className="text-gray-600">Elevate your interiors with our innovative design solutions, 
            creating spaces that are both functional and aesthetically pleasing.</p>
          </div>
          {/* Service Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Management</h3>
            <p className="text-gray-600">Our experienced project managers oversee every detail, ensuring efficient execution and timely 
            delivery of your construction project</p>
          </div>
          {/* Service Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Consultation & Planning</h3>
            <p className="text-gray-600">We offer comprehensive consultation and planning services to ensure the
             success of your project from concept to completion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
