"use client"; // Client component is necessary for click events and refs
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";


import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import rice_husk1 from "@/public/products/Rice Husk/rice-husk1.jpeg"
import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg"

const categories = [
  { 
    name: "Bamboo Essentials", 
    slug: "products",
    image: bamboo_essentials1, 
    description: "Eco-friendly essentials for a sustainable morning routine." 
  },
  { 
    name: "Cane Baskets", 
    slug: "products",
    image: cane_baskets1, 
    description: "Gentle and safe bamboo products for your little ones." 
  },
  { 
    name: "Rice Husk", 
    slug: "products",
    image: rice_husk1, 
    description: "Professional and sustainable gifting solutions." 
  },
   { 
    name: "Eco-Friendly Kits", 
    slug: "products",
    image: kits1, 
    description: "Elegant, durable, and plastic-free dining experience." 
  },
];

const Category = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scrolls by half the container width for a smooth feel
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-serif">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl text-gray-800 font-medium max-sm:text-2xl">
          Shop By Category
        </h2>

        {/* <div className="flex gap-3">
             <Link
            href={"/contact"}
            className="hidden sm:block bg-[#a3a393] hover:bg-[#7cb140] text-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300"
          >
            Shop Patterns
          </Link>
        </div> */}
      </div>

      {/* Main Slider Container */}
      <div className="border border-gray-100 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category, index) => (
            <Link 
              href={`/${category.slug}`}
              key={index}
              className="flex-shrink-0 w-[260px] group cursor-pointer snap-start"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  placeholder="blur"
                  sizes="260px"
                  className=" group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-lg text-gray-900 mb-1 font-semibold group-hover:text-green-800 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                {category.description}
              </p>

              <span className="text-[13px] font-medium text-gray-400 underline underline-offset-4 group-hover:text-black transition-colors">
                View More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;