// src/components/CvTemplate.jsx
import React from 'react';

const CvTemplate = ({ name, email, phone, skills, experience, education }) => {
  return (
    <div className="p-8 bg-white shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="mb-4">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{exp.role} - {exp.company}</h3>
            <p className="text-gray-600">{exp.period}</p>
            <ul className="list-disc pl-5">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-bold">{edu.degree} - {edu.institution}</h3>
            <p className="text-gray-600">{edu.period}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CvTemplate;