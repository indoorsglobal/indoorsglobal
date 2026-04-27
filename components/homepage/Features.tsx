import React from "react";
import Image from "next/image";
import Feature1 from "@/public/homepage/feature1.jpg";
import Feature2 from "@/public/homepage/feature2.jpg";
import Feature3 from "@/public/homepage/feature3.jpg";
import hero3 from "@/public/homepage/hero3.png";
import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import rice_husk11 from "@/public/products/Rice Husk/rice-husk11.jpeg"
import Link from "next/link";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 font-serif">
      <div className="flex justify-center items-center flex-col text-center mb-8">
        <h2 className="text-5xl mb-6 font-medium max-lg:text-3xl tracking-tight">
          Where Sustainability Meets Indoors Global Expression
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-sans">
          Discover a curated collection of eco-conscious decor and handcrafted
          utilities designed to bring mindless beauty into your home while
          honoring the planet.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Large Card: Knitted Utilities */}
        <div className="relative group overflow-hidden rounded-xl bg-[#f8f7f5] flex items-center min-h-[500px]">
          
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={hero3} // Replace with sustainable decor image
              alt="Knitted Cord Coasters"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute w-full h-full bg-black/20"></div>
          <div className="relative z-10 p-12 max-w-md">
            {/* <span className="text-gray-500 uppercase tracking-widest text-sm font-sans mb-3 block">
              Flat Discount 30%
            </span> */}
            <h2 className="text-4xl md:text-5xl text-white leading-tight mb-8">
              Bamboo Essentials 
            </h2>
            <Link href={"/products"} className="bg-[#009341] text-white px-8 py-3 uppercase tracking-widest text-xs font-sans font-bold hover:bg-[#7cb140] transition-colors">
              See More
            </Link>
          </div>
        </div>

        {/* Right Column: Two Smaller Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Small Card: Iconic Decor */}
          <div className="relative group overflow-hidden rounded-xl bg-[#f3f4f6] flex items-center h-full min-h-[240px]">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={rice_husk11} // Replace with sustainable utility image
                alt="Iconic Cloud Decor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
             <div className="absolute w-full h-full bg-black/20"></div>
            <div className="relative z-10 p-10 max-w-[250px]">
              {/* <span className="text-gray-500 text-sm font-sans mb-2 block">
                25% Discount
              </span> */}
              <h3 className="text-3xl text-white mb-6">
                Rice Husk
              </h3>
              <Link href={"/products"} className="bg-[#009341] text-white px-8 py-3 uppercase tracking-widest text-xs font-sans font-bold hover:bg-[#7cb140] transition-colors">
              See More
            </Link>
            </div>
          </div>

          {/* Bottom Small Card: Matte Nordic Utilities */}
          <div className="relative group overflow-hidden rounded-xl bg-[#f0f0f0] flex items-center h-full min-h-[240px]">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={cane_baskets1} // Replace with craft utility image
                alt="Special Matte Nordic"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
             <div className="absolute w-full h-full bg-black/20"></div>
            <div className="relative z-10 p-10 max-w-[250px]">
              {/* <span className="text-gray-500 text-sm font-sans mb-2 block">
                35% Discount
              </span> */}
              <h3 className="text-3xl text-white mb-6">
                Cane Baskets
              </h3>
               <Link href={"/products"} className="bg-[#009341] text-white px-8 py-3 uppercase tracking-widest text-xs font-sans font-bold hover:bg-[#7cb140] transition-colors">
              See More
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
