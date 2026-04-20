import Image from "next/image";
import about from "@/public/about/about2.jpg";

export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] w-full bg-white font-sans overflow-hidden">
      {/* --- LEFT SIDE: IMAGE CONTAINER --- */}
      <div className="relative w-full md:w-1/2 bg-[#F7F7F7] h-[400px] md:h-auto">
        <Image
          src={about}
          alt="Product Showcase"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing optimize karta hai
        />
      </div>

      {/* --- RIGHT SIDE: CONTENT CONTAINER --- */}
      <div className="w-full md:w-1/2 bg-[#e8d7c7] text-white p-10 md:p-20 flex flex-col justify-center">
        <div className="max-w-xl animate-fadeIn">
          {/* Subheading 
          <span className="text-[11px] uppercase tracking-[0.3em] text-black font-medium mb-4 block">
            LOREM IPSUM BRAND
          </span>*/}

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-medium tracking-wider mb-10 leading-tight">
            Eco-Friendly Products for a Better Tomorrow
          </h2>

          {/* Paragraphs with Lorem Text */}
          <div className="space-y-6 text-black text-sm md:text-base leading-relaxed font-light">
            <p>
              At Indoors Global, we believe that your home should be a reflection 
              of the world’s finest craftsmanship. Our mission is to bridge the gap 
              between global design trends and your personal sanctuary, bringing 
              you a curated selection of premium home essentials.
            </p>
            <p>
            Every piece in our collection is handpicked for its quality, 
              aesthetic appeal, and ability to transform a space. We collaborate 
              with artisans and designers worldwide to ensure that sophistication 
              and comfort live in perfect harmony within your four walls.
            </p>
            <p>
             From timeless furniture to contemporary accents, we are committed 
              to helping you create an environment that inspires. Join us in 
              redefining the art of living, one exquisite detail at a time.
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-12">
            <a href={"/contact"} className="bg-[#009341] hover:bg-[#1a261f] text-white px-10 py-3 text-sm tracking-widest uppercase font-sans hover:bg-[#967676] transition-colors">
              Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
