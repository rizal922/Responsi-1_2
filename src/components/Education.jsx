import React from 'react';

const Education = () => {
  return (
    <section id="education" className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Education</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6 last:mb-0">
          <h4 className="text-xl font-semibold mb-2">Technology Information</h4>
          <p className="text-gray-600 mb-1">University Aisyiyah Yogyakarta</p>
          <p className="text-gray-500">2024 - 2025</p>
        </div>
        <div className="mb-6 last:mb-0">
          <h4 className="text-xl font-semibold mb-2">High School</h4>
          <p className="text-gray-600 mb-1">MAN 1 Kota Tangerang</p>
          <p className="text-gray-500">2020 - 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;