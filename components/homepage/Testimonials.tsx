"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sumeet Balwani",
    time: "1 week ago",
    text: "INDOORE GLOBLE is a trusted shop for eco-friendly products, offering quality items that are safe for the environment and daily use. Customers appreciate the good service, reasonable prices, and sustainable product range. A perfect place for those who want environmentally friendly and responsible shopping options.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=karan",
  },
  {
    id: 2,
    name: "Shivangi Gupta",
    time: "10 days ago",
    text: "Attended a small workshop at Indoors Global and had a really nice experience. The workshop was good and I got to learn a new skill. The store itself is very pretty and has many useful nature-friendly products. I personally loved their bamboo baskets. Will definitely visit the store again to get some.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=catherine",
  },
  {
    id: 3,
    name: "CA Shikha Rakhecha",
    time: "2 weeks ago",
    text: "Super cozy collection of sustainable products. Anyone looking for bulk gifting should definately check it out!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=peter",
  },
  {
    id: 4,
    name: "Sarah",
    time: "3 weeks ago",
    text: "The compostable packaging is a game changer. Finally, a brand that actually walks the talk.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
   {
    id: 4,
    name: "Siddharth Dani",
    time: "3 weeks ago",
    text: "Amazing range and varieties of bamboo products, utilities and giftings.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
   {
    id: 4,
    name: "Srishti Ahuja",
    time: "3 weeks ago",
    text: "Beautiful place a must visit for gifting sustainable and biodegradable but at the same time beautiful and in budget things",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // Responsive logic: How many items to move
  const nextSlide = () => {
    setIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Read reviews, <br className="hidden md:block" /> shop with
            confidence.
          </h2>
          {/* <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span className="font-semibold text-gray-900 text-lg">4.8/5</span>
            <div className="flex items-center text-[#00b67a]">
              <Star size={18} fill="currentColor" />
              <span className="ml-1 font-bold text-black uppercase text-xs tracking-tighter">Trustpilot</span>
            </div>
            <span className="ml-2 border-l pl-3 border-gray-300">5,210 reviews</span>
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Info & Nav */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6 lg:mb-0">
              <Quote
                size={40}
                className="text-stone-200 mb-4"
                fill="currentColor"
              />
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                What our <br /> customers are <br /> saying
              </h3>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="p-2 border rounded-full hover:bg-stone-50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="h-[2px] w-12 bg-gray-100 relative overflow-hidden">
                <motion.div
                  className="absolute h-full bg-gray-900 left-0"
                  animate={{
                    width: `${((index + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
              <button
                onClick={nextSlide}
                className="p-2 border rounded-full hover:bg-stone-50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Sliding Area */}
          <div className="lg:col-span-3 relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4 md:gap-6"
                animate={{ x: `-${index * 100}%` }}
                // This makes each index shift by exactly one container width
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(42.333%-16px)] flex-shrink-0 flex flex-col"
                  >
                    {/* Review Bubble */}
                    <div className="bg-stone-50 rounded-2xl gap-2 p-6 mb-4 flex-1 border border-stone-100 flex flex-col ">
                      <h4 className="text-sm font-bold text-gray-900">
                        {item.name}
                      </h4>
                      <div className="flex gap-1 text-[#8B4513]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.text}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 px-2">
                      <div></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
