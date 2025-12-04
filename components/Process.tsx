import React from 'react';
import { 
  FaMapMarkedAlt, 
  FaHammer, 
  FaLayerGroup, 
  FaCogs, 
  FaCheckCircle, 
  FaArrowRight,
  FaCalendarAlt
} from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      id: 1,
      icon: <FaMapMarkedAlt />,
      title: "Site Assessment",
      description: "Professional geological survey to determine optimal drilling location and depth."
    },
    {
      id: 2,
      icon: <FaHammer />,
      title: "Drilling",
      description: "Expert drilling using modern equipment to reach underground water aquifers safely."
    },
    {
      id: 3,
      icon: <FaLayerGroup />,
      title: "Casing Installation",
      description: "Steel casing installed to protect the borehole structure and ensure longevity."
    },
    {
      id: 4,
      icon: <FaCogs />,
      title: "Pump Setup",
      description: "Professional installation of pumps and water delivery systems tailored to your needs."
    },
    {
      id: 5,
      icon: <FaCheckCircle />,
      title: "Testing & Handover",
      description: "Comprehensive testing for capacity and water quality before final handover to you."
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4c75] mb-4">
            Our Proven Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From initial consultation to water flowing, we handle every step with precision and professionalism.
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-start justify-between relative gap-8 md:gap-4 mb-24">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="relative flex-1 w-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-2 w-8 h-8 bg-[#2c7bb6] text-white rounded-full flex items-center justify-center font-bold shadow-md z-10">
                  {step.id}
                </div>
                {/* Card Content */}
                <div className="bg-[#eef7fc] rounded-xl p-6 pt-10 text-center h-full border border-blue-100/50 shadow-sm">
                  <div className="text-4xl text-[#2c7bb6] mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4c75] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow Separator (hidden on mobile, not after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex self-center text-[#2c7bb6] text-2xl">
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#eef7fc] rounded-2xl p-12 text-center shadow-sm border border-blue-100/50">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a4c75] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Get a detailed quote and timeline for your borehole drilling project today.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-[#1a4c75] text-white font-semibold rounded-md hover:bg-[#153d5e] transition-colors duration-300 shadow-md">
            <FaCalendarAlt className="mr-2" />
            Schedule Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}