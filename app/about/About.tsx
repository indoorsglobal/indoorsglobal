"use client"; // Important for Next.js App Router
import React, { useState } from 'react';
import vision from "@/public/about/ourvision.png"
import Image from 'next/image';

const AccordionSection = () => {
  // Track which index is currently open. 0 = first one open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const accordionData = [
    {
      title: "Real Impact",
      content: "We solve the gap between sustainable intention and real action. Our products are genuinely usable in daily life—not just trendy—ensuring you don’t have to choose between convenience and responsibility."
    },
    {
      title: "Active Participation",
      content: "We make the customer an active participant in conscious living. We aren’t just pushing products; we are changing mindsets by selling values that fit into a normal Indian household."
    },
    {
      title: "Modern Wisdom",
      content: "Low-waste living isn’t new; our culture already knew how to reuse, refill, and repair. We modernize that wisdom without erasing it, focusing on function first, then aesthetics."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Accordion */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif font-medium leading-tight">
              A Conscious Approach <br /> to Modern Living.
            </h2>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              Founded in 2024 by Ashmeet Kaur Tuteja, Indoors Global replaces 
              everyday plastic with mindful alternatives that actually work.
            </p>
          </div>

          <div className="space-y-2">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center py-4 px-2 text-left transition-all hover:bg-slate-50/50"
                  >
                    <span className={`mr-3 transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className={isOpen ? 'text-[#a68b8b]' : 'text-gray-400'}>
                        <path d="M0 7.33l2.829-2.83 9.171 9.171 9.171-9.171 2.829 2.83-12 12z"/>
                      </svg>
                    </span>
                    <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#8d6e6e]' : 'text-slate-700'}`}>
                      {item.title}
                    </span>
                  </button>
                  
                  {/* Animated Content Area */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="pl-8 pr-4 text-gray-500 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative rounded-lg overflow-hidden bg-sky-100 aspect-square lg:aspect-[4/3] flex items-center justify-center">
           <Image
            src={vision}
            alt="Our Vision" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
