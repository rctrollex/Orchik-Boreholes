import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const PRIMARY_BLUE = "#1E6091";

  return (
    <footer className="bg-gradient-to-br from-black to-gray-800 text-gray-300 pt-20 pb-10 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logo.avif" alt="Logo" width={200} height={80} />
          </Link>
          <p className="text-gray-300 leading-relaxed text-sm">
            Zimbabwe's trusted partner for professional borehole drilling, pump installation, and complete water solutions. 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact Us", href: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Get In Touch</h3>

          <div className="space-y-4 text-sm">
            {/* Address */}
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white text-xl flex-shrink-0 mt-1" />
              Harare, Zimbabwe
            </p>

            <p className="flex item-start gap-3">
                <CiClock2 className="text-white text-xl flex-shrink-0 mt-1"  />
                Mon-Fri: 9:00 AM - 6:00 PM<br/>
                Sat: 10:00 AM - 2:00 PM

            </p>

            {/* Email */}
            <Link href="mailto:info@orchik.co.zw" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
              <FaEnvelope className="text-white text-xl flex-shrink-0" />
                info@orchik.co.zw
            </Link>

            {/* Phone */}
            <Link href="tel:+263771234567" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
              <FaPhoneAlt className="text-white text-xl flex-shrink-0" />
              +263 72 345 678
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Connect</h3>
          <div className="flex items-center gap-3">
            {[
              { icon: FaFacebookF, url: "https://www.facebook.com/" },
              { icon: FaInstagram, url: "https://www.instagram.com/" },
              { icon: FaWhatsapp, url: "https://wa.me/263771234567" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.url}
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:text-blue-400 transition duration-200"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p className="order-2 md:order-1 mt-4 md:mt-0">
          © {new Date().getFullYear()} Orchik Boreholes. All rights reserved.
        </p>
        <div className="flex gap-6 order-1 md:order-2">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}
