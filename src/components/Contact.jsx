// src/components/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, FileUp, FileDown } from 'lucide-react';

const Contact = () => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleDownloadCV = () => {
    if (cvFile) {
      const url = URL.createObjectURL(cvFile);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_ATS.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Contact & CV</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-3 text-gray-600" />
            <span>johndoe@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-3 text-gray-600" />
            <span>+1234567890</span>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <FileUp className="w-6 h-6 mr-3 text-blue-600" />
            <span>{cvFile ? cvFile.name : 'Upload ATS CV'}</span>
          </div>
          <input 
            type="file" 
            accept=".pdf"
            className="hidden" 
            id="cv-upload"
            onChange={handleFileUpload}
          />
          <label 
            htmlFor="cv-upload" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Upload
          </label>
        </div>

        {cvFile && (
          <div className="bg-green-100 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <FileDown className="w-6 h-6 mr-3 text-green-600" />
              <span>ATS CV Ready for Download</span>
            </div>
            <button 
              onClick={handleDownloadCV}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download CV
            </button>
          </div>
        )}

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <textarea 
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;