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
Ready to Live Sustainably?        </h2>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
      Make the switch to a plastic-free lifestyle today. From rice husk mugs to bamboo linens, discover essentials that are as kind to the planet as they are to your home.
        </p>

        {/* Input/Button Group */}
     <div className="flex justify-center items-center gap-4">
       <Link href={"/contact"} className="bg-white px-8 py-3 transition-all">
Contact Us          </Link>
           <Link href={"/about"} className="bg-[#009341] hover:bg-[#7baf40] text-white px-8 py-3 transition-all">
            About Us
          </Link>
     </div>
      </div>
    </section>
  );
};

export default CTA;
