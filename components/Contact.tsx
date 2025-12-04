import React from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
  FaMap
} from 'react-icons/fa';

export default function Contact() {
  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM', status: 'open' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM', status: 'open' },
    { day: 'Sunday', time: 'Closed', status: 'closed' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Get in Touch Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your borehole drilling project? Contact us and we’ll respond within 24 hours with a detailed quote.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Left Section */}
          <div className="flex flex-col space-y-10">

            {/* Contact Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-8">Contact Information</h3>

              <div className="space-y-7">

                {/* Phone */}
                <a href="tel:+263784693120" className="flex items-center space-x-4 group">
                  <div className="bg-blue-600 text-white p-3 rounded-xl shadow">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-blue-600">Phone</p>
                    <p className="text-gray-600">+263 123 456 7890</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/26378123456780" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 group"
                >
                  <div className="bg-green-500 text-white p-3 rounded-xl shadow">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-green-600">WhatsApp</p>
                    <p className="text-gray-600">Chat with us instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@orchik.co.zw" className="flex items-center space-x-4 group">
                  <div className="bg-orange-500 text-white p-3 rounded-xl shadow">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-orange-600">Email</p>
                    <p className="text-blue-600">info@orchik.co.zw</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-pink-500 text-white p-3 rounded-xl shadow mt-1">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-pink-600">Address</p>
                    <p className="text-gray-600 leading-relaxed">
                       Harare, Zimbabwe
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-gradient-to-br from-blue-700 to-teal-900 p-8 rounded-2xl shadow-xl text-white">
              <div className="flex items-center mb-6">
                <FaClock className="w-6 h-6 mr-3 text-blue-200" />
                <h3 className="text-xl font-bold">Operating Hours</h3>
              </div>

              <div className="space-y-3">
                {hours.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 border-b border-blue-500 last:border-b-0"
                  >
                    <span className="font-semibold">{item.day}</span>
                    <span
                      className={
                        item.status === 'closed'
                          ? 'text-red-300 font-bold'
                          : 'text-blue-100'
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">

            {/* Map Icon */}
            <div className="bg-blue-600 p-5 rounded-full text-white shadow-lg mb-6">
              <FaMap className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">Find Us on the Map</h3>
            <p className="text-gray-600 text-center max-w-xs mb-6">
              Navigate to our offices using Google Maps.
            </p>

            {/* Directions Button */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=44+Eastcourt+Rd+Belvedere+Harare" 
              target="_blank"
              className="flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <FaDirections className="mr-2" />
              Get Directions
            </a>

            {/* Embedded Google Map Placeholder */}
            <div className="w-full h-64 mt-8 rounded-lg overflow-hidden shadow-inner bg-gray-200">
              <h2 className='text-black'>Placeholder map</h2>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
