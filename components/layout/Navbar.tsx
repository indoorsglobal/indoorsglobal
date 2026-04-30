"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, MapPin, ChevronDown, Search } from "lucide-react";
import logo from "@/public/navbar/logo2.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedButton from "../ui/AnimatedButton";

// 1. Define the Category Structure
interface SubCategory {
  name: string;
  href: string;
}

interface Category {
  name: string;
  href: string;
  subcategories?: SubCategory[];
}

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Fix: Define the ref type as HTMLInputElement
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const categories: Category[] = [
    { name: "Home & Living", href: "/categories/home-living" },
    { name: "Personal Lifestyle", href: "/categories/personal-lifestyle" },
    { name: "Storage & Utility", href: "/categories/storage-utility" },
    {
      name: "Eco Bundle",
      href: "#",
      subcategories: [
        { name: "TOILETRY KIT", href: "/categories/toiletry-kit" },
        { name: "CHILDREN KIT", href: "/categories/children-kit" },
        { name: "HAND TOWEL SET", href: "/categories/towel-kit" },
        { name: "CORPORATE KIT", href: "/categories/corporate-kit" },
        { name: "RICE HUSK DINNER SET", href: "/categories/dinner-set" },
        {
          name: "PLANTABLE STATIONERY KIT",
          href: "/categories/stationery-kit",
        },
      ],
    },
    {
      name: "Gifting",
      href: "#",
      subcategories: [
        { name: "Corporate", href: "/categories/gifting-corporate" },
        { name: "Bulk & Custom", href: "/gifting/gifting-bulk-&-custom" },
      ],
    },
  ];

  // Open search and auto-focus input
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // 3. Fix: Add type to the event parameter
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    setSearchQuery("");
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <NextLink
            href={"/"}
            className="flex items-center flex-col gap-2 shrink-0"
          >
            <div className="w-20 h-20 md:w-32 md:h-24 relative">
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* <p className="text-[10px] md:text-xs text-gray-500 font-light mt-[-4px]">simply, purely, green</p> */}
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-[13px] text-[#009341]">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="relative group py-4"
                onMouseEnter={() => setActiveDropdown(cat.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NextLink
                  href={cat.href}
                  className="hover:text-black transition-colors uppercase tracking-wide font-medium whitespace-nowrap flex items-center gap-1"
                >
                  {cat.name}
                  {cat.subcategories && <ChevronDown size={14} />}
                </NextLink>

                {cat.subcategories && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {cat.subcategories.map((sub) => (
                      <NextLink
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[#009341] text-xs font-bold transition-colors border-b border-gray-50 last:border-0"
                      >
                        {sub.name}
                      </NextLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="max-lg:hidden">
              <AnimatedButton />
            </div>
            <NextLink
              href={
                "https://wa.me/6268223779?text=Hello! I'm interested in your sustainable products."
              }
              className="text-[#009341] max-lg:hidden text-[24px] hover:scale-110 transition-transform p-2"
            >
              <FaWhatsapp />
            </NextLink>

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[#009341] hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search size={22} />
            </button>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-300 overflow-y-auto ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
          }`}
          style={{ height: "calc(100vh - 100%)" }}
        >
          <div className="flex flex-col p-6">
            {categories.map((cat) => (
              <div key={cat.name} className="border-b border-gray-50">
                <div
                  className="flex justify-between items-center py-4 cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === cat.name ? null : cat.name,
                    )
                  }
                >
                  {cat.subcategories ? (
                    <span className="text-base font-semibold uppercase text-gray-800">
                      {cat.name}
                    </span>
                  ) : (
                    <NextLink
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-semibold uppercase text-gray-800 w-full"
                    >
                      {cat.name}
                    </NextLink>
                  )}
                  {cat.subcategories && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${activeDropdown === cat.name ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {cat.subcategories && activeDropdown === cat.name && (
                  <div className="bg-gray-50 px-4 pb-4 rounded-lg mb-2">
                    {cat.subcategories.map((sub) => (
                      <NextLink
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-sm font-medium text-gray-600 uppercase border-b border-gray-100 last:border-0"
                      >
                        {sub.name}
                      </NextLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div onClick={() => setIsOpen(false)} className="">
              <AnimatedButton />
            </div>
            <div className="mt-8 p-5 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#009341]" />
                <div>
                  <h4 className="text-[11px] uppercase font-black text-gray-900 mb-1">
                    Visit Our Store
                  </h4>
                  <p className="text-sm text-gray-600">
                    V1st Floor Shop No. 1 & 2 Royal Arcade Building Near
                    Khamardih Thana, Shankar Nagar Raipur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[80px] px-4"
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-3 px-5 py-4"
            >
              <Search size={22} className="text-[#009341] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search eco products..."
                className="flex-1 text-base text-gray-800 outline-none placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
              <button
                type="submit"
                className="bg-[#009341] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#007a36] transition-colors"
              >
                Search
              </button>
            </form>
            <div className="border-t border-gray-100 px-5 py-3 flex flex-wrap gap-2">
              <span className="text-xs text-gray-400 mr-1 mt-0.5">
                Popular:
              </span>
              {["Bamboo", "Rice Husk", "Cane Basket"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                    router.push(`/search?q=${encodeURIComponent(tag)}`);
                  }}
                  className="text-xs bg-gray-100 hover:bg-[#e8f5ec] hover:text-[#009341] text-gray-600 rounded-full px-3 py-1 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar1;
