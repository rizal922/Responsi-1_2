import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Swal.fire({
      title: 'Sending message...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
      timer: 2000,
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We will get back to you soon.',
        confirmButtonColor: '#3B82F6'
      });
      e.target.reset();
    });
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Contact</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-3 text-gray-600" />
            <span>johndoe@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-3 text-gray-600" />
            <span>+1234567890</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder="Email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <textarea 
            placeholder="Message"
            required
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;