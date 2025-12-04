import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function FeaturedProjects() {
  const projects = [
    {
      category: "RESIDENTIAL",
      title: "Suburban Home Installation",
      description: "Complete borehole drilling and pump system installation for a family home in Harare North.",
      image: "/image2.jpg"
    },
    {
      category: "AGRICULTURAL",
      title: "Farm Irrigation System",
      description: "High-capacity water supply for large-scale agricultural irrigation needs.",
      image: "/image2.jpg"
    },
    {
      category: "COMMERCIAL",
      title: "Business Complex Water Supply",
      description: "Industrial pumping station for a new building development.",
      image: "/commercial.jpeg"
    },
    {
      category: "MAINTENANCE",
      title: "Pump System Upgrade",
      description: "Upgrading existing infrastructure for better water pressure and efficiency.",
      image: "/image2.jpg"
    },
    {
      category: "TESTING",
      title: "Water Quality Assessment",
      description: "Comprehensive chemical and biological testing for safe drinking water.",
      image: "/testing.jpeg"
    },
    {
      category: "SERVICE",
      title: "Emergency Repair Service",
      description: "Fast response repair for a broken main supply line ensuring minimal downtime.",
      image: "/service.jpeg"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4c75] mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            See the quality of our work across residential, agricultural, and commercial installations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-bold uppercase tracking-wider bg-[#2c7bb6] rounded-md">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
                  {project.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-300 group-hover:text-white transition-colors">
                  View Details <FaArrowRight className="ml-2 text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 bg-[#1a4c75] text-white font-semibold rounded-md hover:bg-[#153d5e] transition-colors duration-300 shadow-md">
            View All Projects <FaArrowRight className="ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}