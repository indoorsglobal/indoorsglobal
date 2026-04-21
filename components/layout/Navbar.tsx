"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin } from "lucide-react";
import logo from "@/public/navbar/logo.png";
import Image from "next/image";
import { GrWorkshop } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "TOILETRY KIT", href: "/categories/toiletry-kit" },
    { name: "CHILDREN KIT", href: "/categories/children-kit" },
    { name: "HAND TOWEL SET", href: "/categories/towel-kit" },
    { name: "CORPORATE KIT", href: "/categories/corporate-kit" },
    { name: "RICEHUSK DINNER SET", href: "/categories/dinner-set" },
    { name: "PLANTABLE STATIONERY KIT", href: "/categories/stationery-kit" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 py-2">
        
        {/* Logo Section */}
        <Link href={"/"} className="flex items-center flex-col gap-2 shrink-0">
          <div className="w-12 h-12 md:w-16 md:h-16 relative">
            <Image
              src={logo}
              alt="Indoors Global Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-[10px] md:text-xs text-gray-500 font-light mt-[-4px]">
            simply, purely, green
          </p>
        </Link>

        {/* Desktop Categories Row */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] text-[#009341]">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="hover:text-black transition-colors py-2 uppercase tracking-wide font-medium whitespace-nowrap"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href={"/blog"}
            className="hidden sm:flex hover:bg-gray-50 border border-transparent hover:border-gray-200 rounded-md px-3 md:px-5 py-2 text-[13px] uppercase tracking-wider transition-all items-center gap-2"
          >
            <GrWorkshop size={18} /> 
            <span className="hidden xl:inline">Workshop</span>
          </Link>
          
          <Link
            href={"https://wa.me/6268223779?text=Hello!%20I%27m%20interested%20in%20your%20sustainable%20products."}
            className="text-[#009341] max-lg:hidden text-[24px] md:text-[28px] hover:scale-110 transition-transform p-2"
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp />
          </Link>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
        style={{ height: 'calc(100vh - 100%)' }}
      >
        <div className="flex flex-col p-6 gap-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-bold">
            Product Categories
          </p>
          
          <div className="grid grid-cols-1 gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold py-4 border-b border-gray-50 flex justify-between items-center uppercase text-gray-800 hover:text-[#009341] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Workshop Link for Mobile (since it's hidden in header) */}
          <Link 
            href="/blog" 
            onClick={() => setIsOpen(false)}
            className="sm:hidden flex items-center gap-3 py-4 text-gray-800 font-semibold border-b border-gray-50 uppercase"
          >
            <GrWorkshop size={20} /> Workshop
          </Link>

          {/* Store Address Section */}
          <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-[#009341] shrink-0" />
              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-black text-gray-900 mb-2">
                  Visit Our Store
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  1st Floor, Shop No. 1 & 2, Royal Arcade Building,<br />
                  Near Khamardih Thana, Shankar Nagar, Raipur
                </p>
              </div>
            </div>
          </div>

          <Link href={"/contact"} className="mt-6 mb-10" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#009341] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest shadow-lg active:scale-[0.98] transition-transform">
              Send a Message
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
