"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MoveLeft, MoveRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import hero1 from "@/public/homepage/hero42.png";
import hero2 from "@/public/homepage/hero41.png";

const SLIDES = [
  {
    id: 1,
    subtitle: "Top Trending Products",
    title: "Best Modern Bamboo Collection",
    description: "Discover the perfect blend of contemporary design and timeless craftsmanship for your living space.",
    image: hero1,
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    subtitle: "Best Bamboo Products",
    title: "Conscious Living, Beautifully Crafted",
    description: "From bamboo hydration to artisanal dinnerware, bring home ethically sourced pieces designed for a modern, eco-conscious home.",
    image: hero2,
    buttonText: "HOME & LIVING ESSENTIALS",
  },
];

export default function Hero1() {
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
    <div className="w-full bg-white p-3 md:p-6 lg:p-8">
      
      {/* Main Hero Card */}
      <section 
        className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-sm" 
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
                className="object-cover brightness-[0.85] md:brightness-[0.9]"
                priority
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex  items-center md:items-center pb-24 md:pb-32 bg-black/10">
                <div className="container mx-auto px-6 md:px-20">
                  <div className="max-w-3xl  text-white">
                    <p className="text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3 md:mb-4 font-semibold opacity-90">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl xl:text-[90px] font-serif leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg max-w-md opacity-90 leading-relaxed font-light mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
                      {slide.description}
                    </p>
                    
                    <div className="flex justify-start">
                      <button className="flex items-center gap-3 md:gap-4 bg-[#009341] hover:bg-[#1a261f] text-white px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm group shadow-xl">
                        {slide.buttonText}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation - Hidden on very small screens, or scaled down */}
        <div className="absolute bottom-8 left-6 md:bottom-10 md:left-20 flex items-center gap-6 md:gap-10 z-20 text-white">
          <button onClick={scrollPrev} className="hover:opacity-60 transition-opacity p-2">
            <MoveLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
          </button>
          <button onClick={scrollNext} className="hover:opacity-60 transition-opacity p-2">
            <MoveRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2.5 md:gap-3 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full border border-white/50 ${
                selectedIndex === index 
                  ? "w-2 md:w-2.5 h-2 md:h-2.5 bg-white scale-110" 
                  : "w-1.5 md:w-2 h-1.5 md:h-2 bg-transparent opacity-50"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
