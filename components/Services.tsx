import React from 'react';
import { 
  FaHammer, 
  FaMapMarkedAlt, 
  FaCogs, 
  FaFlask, 
  FaWater, 
  FaTachometerAlt, 
  FaWrench, 
  FaLayerGroup, 
  FaArrowRight 
} from 'react-icons/fa';

export default function Services() {
  const PRIMARY = "#1E6091";
  const LIGHT_BG = "#F2F8FB";

  const services = [
    {
      icon: <FaHammer />,
      title: "Borehole Drilling",
      description: "Professional drilling services using modern equipment to access reliable underground water sources."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Site Survey & Assessment",
      description: "Expert geological surveys to identify optimal drilling locations for maximum water yield."
    },
    {
      icon: <FaCogs />,
      title: "Pump Installation",
      description: "High-quality pump systems installed for long-term, reliable water supply."
    },
    {
      icon: <FaFlask />,
      title: "Water Quality Testing",
      description: "Comprehensive laboratory testing to ensure clean and safe water for all applications."
    },
    {
      icon: <FaWater />,
      title: "Borehole Flushing",
      description: "Cleaning and flushing services to remove sediment and restore optimal water flow."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Capacity Testing",
      description: "Accurate measurement of borehole yield and sustainable pumping rate."
    },
    {
      icon: <FaWrench />,
      title: "Maintenance & Repairs",
      description: "Regular servicing and emergency repairs to ensure your borehole operates efficiently."
    },
    {
      icon: <FaLayerGroup />,
      title: "Casing Installation",
      description: "Durable steel casing installation to protect boreholes and ensure long-term stability."
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1E6091]/10 px-5 py-1.5 rounded-full text-sm font-medium text-[#1E6091]">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E6091] mt-6 mb-4">
            Complete Water Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From geological surveys to full installation and maintenance, we deliver reliable water solutions for homes, farms, and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#F1F7FB] rounded-2xl p-8 border border-[#1E6091]/10 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-[#1E6091] w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-md mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1E6091] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <a 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-[#1E6091] hover:text-[#164e78] transition-colors"
              >
                Learn More
                <FaArrowRight className="ml-2 text-xs" />
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 bg-[#1E6091] text-white font-semibold rounded-lg hover:bg-[#164e78] transition-all duration-300 shadow-lg">
            View All Services 
            <FaArrowRight className="ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
