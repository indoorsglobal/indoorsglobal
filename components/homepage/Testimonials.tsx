"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"; // ExternalLink icon add kiya
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sumeet Balwani",
    time: "1 week ago",
    text: "INDOORS GLOBAL is a trusted shop for eco-friendly products, offering quality items that are safe for the environment and daily use. Customers appreciate the good service, reasonable prices, and sustainable product range. A perfect place for those who want environmentally friendly and responsible shopping options.",
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
    id: 5,
    name: "Siddharth Dani",
    time: "3 weeks ago",
    text: "Amazing range and varieties of bamboo products, utilities and giftings.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=siddharth",
  },
  {
    id: 6,
    name: "Srishti Ahuja",
    time: "3 weeks ago",
    text: "Beautiful place a must visit for gifting sustainable and biodegradable but at the same time beautiful and in budget things",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=srishti",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));
  };

  // Google Review Link (Replace with your actual business link)
  const googleReviewUrl = "https://www.google.com/search?q=Indoors+Global+Raipur+reviews#lrd=0x3a28dde9d049a57f:0x5b744bc1715f6da3,1,,,,";

  return (
    <section className="bg-[#009341] py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Read Reviews, <br className="hidden md:block" /> Shop With Confidence.
          </h2>
          {/* <div className="flex items-center justify-center gap-2">
             <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
             </div>
             <span className="font-medium text-gray-700">Trusted by our local community</span>
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Info & Nav */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <Quote
                size={40}
                className="text-stone-200 mb-4"
                fill="currentColor"
              />
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight mb-6">
                What our <br /> customers are <br /> saying
              </h3>
              
              {/* Google Review Button */}
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-900 text-gray-900 px-5 py-2.5 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm mb-8"
              >
                Write a Google Review
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4 lg:mt-0">
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
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(42.333%-16px)] flex-shrink-0 flex flex-col"
                  >
                    <div className="bg-stone-50 rounded-2xl gap-2 p-6 mb-4 flex-1 border border-stone-100 flex flex-col ">
                      <h4 className="text-sm font-bold text-gray-900">
                        {item.name}
                      </h4>
                      <div className="flex gap-1 text-[#8B4513]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        "{item.text}"
                      </p>
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
