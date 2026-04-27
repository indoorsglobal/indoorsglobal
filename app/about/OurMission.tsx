import Image from "next/image";
import about from "@/public/about/about2.jpg";

export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] w-full bg-white font-sans overflow-hidden">
      
      {/* --- LEFT SIDE: IMAGE CONTAINER --- */}
      <div className="relative w-full md:w-1/2 bg-[#F7F7F7] h-[400px] md:h-auto">
        <Image
          src={about}
          alt="Sustainable Living"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* --- RIGHT SIDE: CONTENT CONTAINER --- */}
      <div className="w-full md:w-1/2 bg-[#e8d7c7] text-white p-10 md:p-20 flex flex-col justify-center">
        <div className="max-w-xl animate-fadeIn">

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-medium font-serif tracking-wider mb-10 leading-tight">
            Making Conscious Living Simple for Every Home
          </h2>

          {/* Content */}
          <div className="space-y-6 text-black text-sm md:text-base leading-relaxed font-light">
            
            <p>
              Indoors Global was created to bridge the gap between sustainable intention 
              and everyday action. We believe people shouldn’t have to choose between 
              convenience and responsibility. Our products are designed to be practical, 
              usable, and a natural part of daily life — not just trendy alternatives.
            </p>

            <p>
              What started with a simple but powerful moment — seeing animals surrounded 
              by plastic waste — turned into a mission to break the habit of disposable living. 
              We bring together mindful alternatives under one roof, inspired by traditional 
              low-waste practices and adapted for modern Indian homes.
            </p>

            <p>
              We don’t just sell products — we help shift mindsets. Through workshops, 
              community engagement, and honest practices, we make customers active 
              participants in conscious living. Because sustainability isn’t a trend — 
              it’s a way of life.
            </p>

          </div>

          {/* Action Link */}
          <div className="mt-12">
            <a
              href={"/contact"}
              className="bg-[#009341] hover:bg-[#7baf40] text-white px-10 py-3 text-sm tracking-widest uppercase font-sans transition-colors"
            >
              See more
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
