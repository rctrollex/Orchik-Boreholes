'use client'
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
  ]

  return (
    <nav className="top-0 left-0 z-50 w-full bg-white font-sans border-b border-[#E3F2FD]">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image src="/logo.avif" alt="Logo" width={130} height={100} className="object-contain" />
        </Link>

        {/* Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-2xl text-[#1E6091] transition hover:bg-[#D6EFFF]/60 focus:outline-none focus:ring-2 focus:ring-[#1E6091]"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute w-full left-0 bg-white shadow-xl border-t border-[#E3F2FD] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-2 px-6">

          {/* Nav Links */}
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl text-[#0D1B2A] text-lg font-medium transition hover:text-[#1E6091] hover:bg-[#D6EFFF]/40"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button */}
          <div className="pt-4 w-full">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl font-semibold text-lg text-white bg-[#1E6091] hover:bg-[#165077] shadow-md transition flex justify-center items-center"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}
