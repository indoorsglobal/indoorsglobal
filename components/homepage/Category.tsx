"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Imports unchanged
import bamboo_essentials1 from "@/public/products/Rice Husk/rice-husk13.jpeg";
import cane_baskets1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg";
import rice_husk1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg";
import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg";
import kits2 from "@/public/products/Rice Husk/rice-husk12.jpeg";

const categories = [
  { name: "Home & Living", slug: "categories/home-living", image: bamboo_essentials1, description: "Sustainable products to enhance your home." },
  { name: "Personal Lifestyle", slug: "categories/personal-lifestyle", image: cane_baskets1, description: "Eco-conscious daily essentials." },
  { name: "Storage & Utility", slug: "categories/storage-utility", image: rice_husk1, description: "Smart natural storage solutions." },
  { name: "Eco Bundle", slug: "categories/dinner-set", image: kits1, description: "Curated eco-friendly combos." },
  { name: "Gifting", slug: "gifting/gifting-bulk-&-custom", image: kits2, description: "Thoughtful sustainable gifts." },
];

const Category = () => {
  // 1. Added HTMLDivElement type to the ref
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Defined direction as a literal union type ("left" or "right")
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; 
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 font-serif relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl text-gray-800 font-medium max-sm:text-2xl">
            Shop By Category
          </h2>
          <p className="text-gray-500 text-sm mt-1">Explore our sustainable collections</p>
        </div>

        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category, index) => (
          <Link
            href={`/${category.slug}`}
            key={index}
            className="flex-shrink-0 basis-[75%] md:basis-[23%] group cursor-pointer snap-start"
          >
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 75vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-1">
                {category.description}
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold text-gray-600 uppercase border-b border-gray-900 pb-0.5">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
