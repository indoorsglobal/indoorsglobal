import { ShieldCheck, Sparkles, Globe, History } from 'lucide-react'; 

const features = [
  {
    title: "EXCEPTIONAL CRAFT",
    icon: <Sparkles className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Every piece is a masterclass in detail. We collaborate with skilled artisans who blend traditional techniques with modern design to create furniture that stands as art."
  },
  {
    title: "GLOBAL SOURCING",
    icon: <Globe className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "We travel the world to bring you unique silhouettes and rare textures. Our collection reflects a global aesthetic, curated specifically for the sophisticated modern home."
  },
  {
    title: "SUSTAINABLE LUXURY",
    icon: <ShieldCheck className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Conscious living without compromise. We prioritize ethically sourced materials and eco-friendly processes to ensure your home beauty doesn't come at the cost of the planet."
  },
  {
    title: "TIMELESS ENDURANCE",
    icon: <History className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Design that transcends trends. Our products are engineered for longevity, using premium materials that age gracefully and remain relevant in your home for decades."
  }
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="mb-6">
              {feature.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-[#8B735B] text-2xl font-bold tracking-widest mb-4 uppercase">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-sm font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
