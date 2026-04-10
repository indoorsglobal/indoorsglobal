import Image from 'next/image';
import bamboo from "@/public/about/bamboo2.jpg"

export default function Quote() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bamboo}// Path to your background image
          alt="Bamboo Forest Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay to help the white box pop */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* --- CENTERED CONTENT CARD --- */}
      <div className="relative z-10 w-full max-w-4xl bg-white/95 backdrop-blur-sm p-8 md:p-16 shadow-2xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-gray-900 mb-10 uppercase">
    Rooted in Nature
        </h2>

        {/* Text Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
          <p>
            At Indoors Global, we are inspired by the resilience and beauty of 
            natural elements. Like the bamboo that frames our vision, we believe 
            in design that is both flexible and enduring. Our curated pieces 
            are chosen for their ability to breathe life into minimalist spaces 
            and bring the serenity of the outdoors, indoors.
          </p>
          <p>
            We invite you to look beyond the ordinary. Every texture, every 
            fiber, and every silhouette in our collection is a testament to 
            our commitment to sustainable elegance and a more conscious way 
            of living.
          </p>
        </div>
      </div>

    
    </section>
  );
}
