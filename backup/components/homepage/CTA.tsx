import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden font-serif">
      {/* 1. The Background Image Tag */}
      <img 
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
        alt="Office Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. The Overlay (To make text readable) */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* 3. The Content (Must be relative to sit on top) */}
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight font-bold">
         Refine Your Living Space.
        </h2>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
         Discover curated pieces that blend global sophistication with the comfort of home. Limited collections arriving monthly.
        </p>

        {/* Input/Button Group */}
     <div className="flex justify-center items-center gap-4">
       <Link href={"/contact"} className="bg-white px-8 py-3 transition-all">
            Shop Now
          </Link>
           <Link href={"/about"} className="bg-[#a3a393] hover:bg-[#7cb140] text-white px-8 py-3 transition-all">
            About Us
          </Link>
     </div>
      </div>
    </section>
  );
};

export default CTA;
