import React from 'react';
import { FaUserFriends, FaTools, FaHandHoldingUsd, FaClock } from 'react-icons/fa';

export default function WhyUs() {
  const PRIMARY = "#1E6091";

  const features = [
    {
      icon: <FaUserFriends className="text-3xl text-[#1E6091]" />,
      title: "Experienced & Certified Drillers",
      description: "Our team brings years of proven expertise to every project."
    },
    {
      icon: <FaTools className="text-3xl text-[#1E6091]" />,
      title: "Advanced Equipment & Techniques",
      description: "Modern machinery ensures efficient and accurate results."
    },
    {
      icon: <FaHandHoldingUsd className="text-3xl text-[#1E6091]" />,
      title: "Transparent Pricing",
      description: "Clear, upfront quotes with no hidden fees or surprises."
    },
    {
      icon: <FaClock className="text-3xl text-[#1E6091]" />,
      title: "Fast Turnaround",
      description: "Quick and efficient project execution while maintaining the highest quality standards."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Satisfied Clients" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#1E6091] to-[#1a557d] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 px-5 py-1.5 rounded-full text-sm tracking-wide border border-white/20">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
           Why Choose Ochik Boreholes 
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine years of expertise with modern technology to deliver water solutions you can rely on 
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/20 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl font-extrabold mb-2">{stat.number}</span>
              <span className="text-blue-100 uppercase tracking-wide text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
