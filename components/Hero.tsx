import { FaBoreHole } from "react-icons/fa6";
import { BsCalendarCheckFill, BsCheckCircleFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

const image1 = "/pic1.jpg";

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[650px] w-full overflow-hidden font-sans">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Premium Deep Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#1E6091]/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start">
        
        {/* Highlight Tag */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2 rounded-full 
            text-sm font-medium text-white shadow-lg mb-8 border border-white/20">
          <FaBoreHole className="mr-2 text-lg text-[#D6EFFF]" />
          Trusted by 1,500+ Borehole Clients Nationwide
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl max-w-3xl">
          Reliable Borehole Drilling & Water Solutions Across Zimbabwe 
        </h1>

        {/* Sub Text */}
        <p className="text-base md:text-xl text-[#D6EFFF] max-w-2xl mb-10 leading-relaxed">
          Professional drilling, pump installation, water testing, and maintenance for homes, farms, and businesses. Get consistent water supply with certified experts you can trust. 
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-5 mb-16">

          {/* Primary CTA */}
          <button className="flex items-center bg-[#1E6091] hover:bg-[#165077] text-white 
              py-3 px-8 rounded-xl font-semibold text-lg shadow-lg transition-all">
            <BsCalendarCheckFill className="mr-3 text-xl" />
            Get Your Free Quote
          </button>

          {/* Secondary CTA */}
          <button className="flex items-center bg-white/90 hover:bg-white text-[#0D1B2A] 
              py-3 px-8 rounded-xl font-semibold text-lg shadow-md transition-all">
            <IoCallOutline className="mr-3 text-xl" />
            Call Now
          </button>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-10 text-white font-medium">
          {[
            "Certified Drillers ",
            "Advanced Equipment",
            "Fast Turnaround",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <BsCheckCircleFill className="text-[#D6EFFF]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
