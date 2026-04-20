"use client"; // Important for Next.js App Router
import React, { useState } from 'react';
import vision from "@/public/about/ourvision.png"
import Image from 'next/image';

const AccordionSection = () => {
  // Track which index is currently open. 0 = first one open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const accordionData = [
    {
      title: "Sustainable Elegance",
      content: "We believe that luxury shouldn't come at the Earth's expense. Our collection features meticulously crafted pieces made from renewable materials like rice husk and bamboo fibers, blending high-end aesthetics with environmental responsibility."
    },
    {
      title: "Curation with Purpose",
      content: "Every item in the Indoors Global catalog is hand-selected for its story and craftsmanship. From minimalist kitchenware to artisanal decor, we source products that bring a sense of worldly sophistication and timeless quality to your living space."
    },
    {
      title: "A Global Lifestyle Experience",
      content: "Beyond retail, we are your partners in interior transformation. We provide seamless international shipping and personalized support to ensure that bringing eco-chic design into your home is a sophisticated, stress-free journey."
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
              Indoors Global redefines the boundaries of interior design by 
              merging eco-friendly innovation with premium global aesthetics.
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
            alt="Innovation" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
