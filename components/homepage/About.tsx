import React from "react";
import Image from "next/image";
import about from "@/public/products/Cane Baskets/cane-baskets5.jpeg";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] w-full">
      {/* Left Column: Image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
        <Image
          src={about} // Replace with your image path
          alt="Embroidery art meets needle and thread"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 bg-[#ece3d9] flex flex-col justify-center px-8 md:px-16 py-16 font-serif">
        <div className="max-w-xl">
          <span className="text-[12px] tracking-[0.2em] text-gray-500 uppercase block mb-4 font-sans">
            Welcome!
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#8d6e6e] leading-tight mb-8">
            Superior Quality Essentials Crafted
            <br /> for
            <span className="italic font-light"> Long Lasting </span>
            Use
          </h2>

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed mb-10 font-sans max-w-md">
            We specialize in high-performance essentials engineered for maximum
            longevity. By combining superior craftsmanship with premium
            materials, we provide reliable products that deliver consistent
            value and withstand the demands of time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={"/"}
              className="bg-[#5D4037] hover:bg-[#8e8e7e] text-white px-10 py-3 text-sm tracking-widest uppercase font-sans transition-colors"
            >
              Shop
            </Link>
            <Link
              href={"/about"}
              className="bg-[#009341] hover:bg-[#7cb140] text-white px-8 py-3 text-sm tracking-widest uppercase font-sans  transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
