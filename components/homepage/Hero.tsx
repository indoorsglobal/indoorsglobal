"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import hero1 from "@/public/homepage/hero3.png";
import hero2 from "@/public/homepage/hero4.png";

const SLIDES = [
  {
    id: 1,
    subtitle: "Top Trending Products",
    title: "Best Modern Wood Collection",
    // --- Added Description ---
    description: "Discover the perfect blend of contemporary design and timeless craftsmanship for your living space.",
    image: hero1,
    buttonText: "Shop Now",
  },
  {
    id: 2,
    subtitle: "Best Wooden Products",
    // title: "New Sell Handmade \nCollection",
    title:"Conscious Living, Beautifully Crafted",
    // --- Added Description ---
    description: "From bamboo hydration to artisanal dinnerware, bring home ethically sourced pieces designed for a modern, eco-conscious home.",
    image: hero2,
    buttonText: "Shop Now",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative h-screen md:h-[650px] w-full bg-[#f9f9f9] overflow-hidden group">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full flex max-lg:items-start items-center">
              
              {/* Content Layer */}
              <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center z-10">
                <div className="max-w-2xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:pt-10 max-lg:items-center">
                  <p className="text-[#8b8b8b] text-sm md:text-base mb-4 font-medium italic tracking-wide">
                    {slide.subtitle}
                  </p>
                  
                  <h1 className="text-4xl max-lg:text-center md:text-7xl font-serif text-[#333] leading-[1.1] whitespace-pre-line mb-6">
                    {slide.title}
                  </h1>

                  {/* --- New Description Text --- */}
                  <p className="text-[#666] text-base md:text-lg mb-10 max-w-md max-lg:text-center leading-relaxed">
                    {slide.description}
                  </p>

                  <button className="bg-[#5D4037] hover:bg-[#8e8e7e] text-white px-10 py-4 max-lg:px-8 text-sm max-lg:text-xs uppercase tracking-widest transition-all duration-300 shadow-sm">
                    {slide.buttonText}
                  </button>
                </div>
              </div>

              {/* Image Layer */}
              <div className="absolute inset-0 z-0 flex justify-end max-lg:pt-30 items-end pointer-events-none">
                <div className="relative w-full h-[80%] md:w-1/2 md:h-full md:mr-20">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm hover:bg-[#a3a393] hover:text-white flex items-center justify-center transition-all z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm hover:bg-[#a3a393] hover:text-white flex items-center justify-center transition-all z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>
      
      {/* Visual Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, index) => (
          <div key={index} className="w-8 h-[2px] bg-black/10 overflow-hidden">
            <div className="h-full bg-[#a3a393] w-0 animate-progress" />
          </div>
        ))}
      </div>
    </section>
  );
}