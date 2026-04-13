"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, MapPin } from "lucide-react"; // Added MapPin
import logo from "@/public/navbar/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: "TOILETRY KIT", href: "/categories/toiletry-kit" },
    { name: "CHILDREN KIT", href: "/categories/children-kit" },
    { name: "HAND TOWEL SET", href: "/categories/towel-kit" },
    { name: "CORPORATE KIT", href: "/categories/corporate-kit" },
    { name: "RICEHUSK DINNER SET", href: "/categories/dinner-set" },
    { name: "PLANTABLE STATIONERY KIT", href: "/categories/stationery-kit" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Categories",
      href: "#",
      hasDropdown: true,
      subItems: categories,
    },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 font-serif shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-end justify-between px-6 md:px-8 pb-3 pt-1 max-lg:py-2">
        {/* Logo Section */}
        <Link href={"/"} className="flex items-end gap-1 justify-end">
          <div className="w-14 h-14 mb-1 max-lg:w-10 max-lg:h-10 relative">
            <Image
              src={logo}
              alt="Indoors Global Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl md:text-3xl font-medium tracking-tight text-gray-800">
            Indoors Global
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[15px] text-gray-700">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 hover:text-black transition-colors py-2 uppercase tracking-wide"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {link.hasDropdown && (
                <div
                  className={`absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl transition-all duration-300 ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 hover:bg-gray-50 text-gray-600 hover:text-black transition-colors border-b last:border-0 border-gray-50 text-sm font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={"/contact"}
            className="hidden sm:block bg-[#a3a393] hover:bg-[#7cb140] text-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300"
          >
            Shop Patterns
          </Link>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-2 text-gray-700">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-lg font-medium border-b border-gray-50 pb-2 flex justify-between items-center uppercase"
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`${isDropdownOpen ? "rotate-180" : ""} transition-transform`}
                    />
                  </button>
                  <div
                    className={`${isDropdownOpen ? "block" : "hidden"} bg-gray-50 py-2 transition-all`}
                  >
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 text-sm text-gray-600 border-b last:border-0 border-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium border-b border-gray-50 pb-2 flex justify-between items-center uppercase"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Store Address Section (Mobile Only) */}
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

          <Link href={"/contact"} className="flex flex-col "  onClick={() => setIsOpen(!isOpen)}>
          <button className="mt-4 bg-[#a3a393] text-white py-4 text-xs uppercase tracking-widest">
            Shop Patterns
          </button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;