import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
  ];

  return (
    <nav className="z-50 sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#E3F2FD] shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.avif"
              alt="Logo"
              width={180}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0D1B2A] font-semibold text-[16px] tracking-wide hover:text-[#1E6091] transition"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-[#1E6091] hover:bg-[#165077] transition shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
