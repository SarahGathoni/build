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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Service 1</h3>
            <p className="text-gray-600">Description of Service 1 goes here...</p>
          </div>
          {/* Service Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Service 2</h3>
            <p className="text-gray-600">Description of Service 2 goes here...</p>
          </div>
          {/* Service Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Service 3</h3>
            <p className="text-gray-600">Description of Service 3 goes here...</p>
          </div>
          {/* Service Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Service 4</h3>
            <p className="text-gray-600">Description of Service 4 goes here...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
