import Image from 'next/image';
import bamboo from "@/public/about/bamboo2.jpg"

export default function Quote() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bamboo}
          alt="Sustainable Living Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* --- CENTERED CONTENT CARD --- */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm p-8 md:p-16 shadow-2xl text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-gray-900 mb-10 uppercase">
          Conscious Living Starts at Home
        </h2>

        {/* Text Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
          
          <p>
            At Indoors Global, we believe sustainability should not feel complicated 
            or out of reach. It should fit naturally into everyday life. That’s why 
            we focus on practical alternatives that replace daily plastic without 
            disrupting your routine.
          </p>

          <p>
            Inspired by traditional low-waste living and adapted for modern Indian 
            homes, our approach is simple — make conscious choices easy, accessible, 
            and real. Because change doesn’t come from big gestures, it comes from 
            everyday habits.
          </p>

          <p>
            We’re not just building a brand — we’re building awareness, community, 
            and a shift toward mindful living. One home, one habit, one choice at a time.
          </p>

        </div>
      </div>
    </section>
  );
}
