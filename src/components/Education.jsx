import React from 'react';

const Education = () => {
  return (
    <section id="education" className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Education</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6 last:mb-0">
          <h4 className="text-xl font-semibold mb-2">Bachelor of Computer Science</h4>
          <p className="text-gray-600 mb-1">University Name</p>
          <p className="text-gray-500">2019 - 2023</p>
        </div>
        <div className="mb-6 last:mb-0">
          <h4 className="text-xl font-semibold mb-2">High School Diploma</h4>
          <p className="text-gray-600 mb-1">High School Name</p>
          <p className="text-gray-500">2016 - 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;