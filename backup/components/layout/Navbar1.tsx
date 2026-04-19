"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin } from "lucide-react";
import logo from "@/public/navbar/logo.png";
import Image from "next/image";

const Navbar1 = () => {
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 py-1">
        {/* Logo Section */}
        <Link href={"/"} className="flex items-center gap-2 flex-col">
          <div className="w-10 h-10 md:w-20 md:h-20 relative">
            <Image
              src={logo}
              alt="Indoors Global Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-500">simply, purely, green</p>
          {/* <span className="text-xl md:text-2xl font-medium tracking-tight text-gray-800">
            Indoors Global
          </span> */}
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
        <div className="flex items-center gap-4">
          <Link
            href={"/contact"}
            className="hidden sm:block bg-[#009341] hover:bg-[#7cb140] text-white px-5 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-300"
          >
             Send a Message
          </Link>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-2 text-gray-700">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Categories</p>
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium border-b border-gray-50 pb-2 flex justify-between items-center uppercase"
            >
              {cat.name}
            </Link>
          ))}

          {/* Store Address Section */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-[#a3a393] mt-1 shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-900 mb-1">Our Store</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  V1st Floor Shop No. 1 & 2 Royal Arcade Building Near Khamardih Thana, Shankar Nagar Raipur
                </p>
              </div>
            </div>
          </div>

          <Link href={"/contact"} className="mt-4" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#a3a393] text-white py-4 text-xs uppercase tracking-widest">
              Send a Message
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;