import { FaCheckCircle, FaArrowRight, FaUserTie } from "react-icons/fa";

export default function About() {
  const info = [
    {
      header: "Licensed & Certified",
      desc: "Fully licensed drilling contractors with all required certifications.",
    },
    {
      header: "Quality Guaranteed",
      desc: "Every project is backed by our commitment to excellence and customer satisfaction.",
    },
    {
      header: "Expert Team",
      desc: "Experienced specialists who understand Zimbabwe's geological and water systems.",
    },
  ];

  return (
    <div className="w-full py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE – IMAGE BLOCK */}
        <div className="relative">
          
          {/* Soft Blue Background Accent */}
          <div className="absolute -top-4 -left-4 w-3/4 h-full bg-[#1E6091] rounded-3xl opacity-10 -z-10 -rotate-2"></div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/pic1.jpg"
              alt="Drilling Work"
              className="w-full h-auto object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-0 right-0 bg-[#1E6091] text-white p-6 rounded-tl-3xl shadow-xl">
              <span className="block text-4xl font-extrabold">15+</span>
              <span className="text-xs font-semibold uppercase tracking-wider">
                Years Serving Zimbabwe
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – TEXT CONTENT */}
        <div className="flex flex-col items-start">
          
          {/* Tag */}
          <div className="inline-flex items-center bg-[#D6EFFF] text-[#1E6091] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <FaUserTie className="mr-2" />
            About Us
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] mb-6 leading-tight">
            Zimbabwe’s Trusted Water Solutions Partner
          </h2>

          {/* Description */}
          <p className="text-[#4B5563] mb-6 leading-relaxed">
            Orchik Boreholes Company has delivered reliable water
            solutions across Zimbabwe for over 15 years. We specialize in
            professional borehole drilling, pump installation, water testing,
            surveying, and full water system maintenance for homes, farms, and
            commercial operations.
          </p>

          <p className="text-[#4B5563] mb-10 leading-relaxed">
            With hundreds of successful projects completed, we understand
            Zimbabwe’s unique geological conditions and know how to locate and
            access water efficiently using modern equipment and expert methods.
          </p>

          {/* Check List */}
          <div className="space-y-5 mb-12 w-full">
            {info.map((item, i) => (
              <div key={i} className="flex items-start">
                <FaCheckCircle className="text-[#1E6091] mr-4 text-xl mt-1" />
                <div>
                  <span className="block text-lg font-semibold text-[#0D1B2A]">
                    {item.header}
                  </span>
                  <span className="block text-[#6B7280] text-base">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button className="flex items-center bg-[#1E6091] hover:bg-[#165077] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all">
              Learn More About Us
              <FaArrowRight className="ml-2" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
