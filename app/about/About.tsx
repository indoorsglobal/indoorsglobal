"use client"; // Important for Next.js App Router
import React, { useState } from 'react';
import vision from "@/public/about/ourvision.png"
import Image from 'next/image';

const AccordionSection = () => {
  // Track which index is currently open. 0 = first one open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const accordionData = [
    {
      title: "Global Design Vision",
      content: "Our vision is to become the ultimate destination for global interior inspiration. We aim to transform every home into a curated masterpiece by sourcing unique, high-quality pieces that tell a story of craftsmanship and worldly elegance."
    },
    {
      title: "Our Commitment to Quality",
      content: "We don't just sell products; we deliver enduring quality. Our mission is to ensure that every item in the Indoors Global collection meets rigorous standards of durability, sustainability, and aesthetic excellence, ensuring your investment lasts a lifetime."
    },
    {
      title: "Personalized Client Support",
      content: "Building your dream home is a journey, and we are here to guide you. From expert styling advice to seamless post-purchase support, our team is dedicated to providing a premium experience that prioritizes your comfort and satisfaction."
    }
  ];

  const toggleAccordion = (index: number) => {
    // If you click the one that's already open, it closes. 
    // Otherwise, it opens the new one and closes the previous one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Accordion */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl text-[#8d6e6e] font-serif font-medium">
              Inspiration, Innovation,<br /> And Opportunities.
            </h2>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              Discover how Indoors Global redefines interior spaces through 
              world-class curation and an unwavering focus on modern lifestyle.
            </p>
          </div>

          <div className="space-y-2">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center py-4 px-2 text-left transition-all hover:bg-white"
                  >
                    <span className={`mr-3 transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 7.33l2.829-2.83 9.171 9.171 9.171-9.171 2.829 2.83-12 12z"/>
                      </svg>
                    </span>
                    <span className={`text-lg font-medium ${isOpen ? 'text-[#4CAF50]' : 'text-slate-700'}`}>
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

        {/* Right Side: Image Placeholder */}
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
