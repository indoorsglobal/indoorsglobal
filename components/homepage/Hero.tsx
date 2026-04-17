"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MoveLeft, MoveRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import hero1 from "@/public/homepage/hero21.jpg";
import hero2 from "@/public/homepage/hero22.jpg";

const SLIDES = [
  {
    id: 1,
    subtitle: "Top Trending Products",
    title: "Best Modern Wood Collection",
    description: "Discover the perfect blend of contemporary design and timeless craftsmanship for your living space.",
    image: hero1,
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    subtitle: "Best Wooden Products",
    title: "Conscious Living, Beautifully Crafted",
    description: "From bamboo hydration to artisanal dinnerware, bring home ethically sourced pieces designed for a modern, eco-conscious home.",
    image: hero2,
    buttonText: "HOME & LIVING ESSENTIALS",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    // Outer padding to create space around the image (as seen in screenshot)
    <div className="w-full bg-white p-4 md:p-6 lg:p-8">
      
      {/* Main Hero Card with large rounding */}
      <section 
        className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-sm" 
        ref={emblaRef}
      >
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Image Layer */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-[0.9]"
                priority
              />
              
              {/* Content Overlay - Restored text content and button placement */}
              <div className="absolute inset-0 flex items-center md:items-end pb-20 md:pb-32 bg-black/5">
                <div className="container mx-auto px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                  
                  {/* Left Side: Subtitle, Title, and Description */}
                  <div className="text-white">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 font-semibold opacity-90">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg max-w-md opacity-90 leading-relaxed font-light hidden md:block">
                      {slide.description}
                    </p>
                      {/* Right Side: Button Placement (as per screenshot) */}
                  <div className="flex justify-start mt-4">
                    <button className="flex items-center gap-4 bg-[#2D3E33] hover:bg-[#1a261f] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm group shadow-xl">
                      {slide.buttonText}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  </div>

                
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot Style Navigation - Bottom Left */}
        <div className="absolute bottom-10 left-10 md:left-20 flex items-center gap-10 z-20 text-white">
          <button onClick={scrollPrev} className="hover:opacity-60 transition-opacity">
            <MoveLeft size={30} strokeWidth={1} />
          </button>
          <button onClick={scrollNext} className="hover:opacity-60 transition-opacity">
            <MoveRight size={30} strokeWidth={1} />
          </button>
        </div>

        {/* Screenshot Style Pagination - Bottom Center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full border border-white/50 ${
                selectedIndex === index 
                  ? "w-2.5 h-2.5 bg-white scale-125" 
                  : "w-2 h-2 bg-transparent opacity-50"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
