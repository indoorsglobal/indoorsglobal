import { ShieldCheck, Sparkles, Globe, History } from 'lucide-react'; 

const features = [
  {
    title: "PRACTICAL ECOLOGY",
    icon: <Sparkles className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Eco-friendly shouldn’t be complicated or elite. If it can’t fit into a normal Indian household, it doesn’t belong in our store. Function first, then aesthetics."
  },
  {
    title: "RADICAL HONESTY",
    icon: <Globe className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "No green-washing. No shortcuts. We value transparency in sourcing and pricing. If something isn’t perfect, we say it. Trust is more important than trends."
  },
  {
    title: "COLLECTIVE IMPACT",
    icon: <ShieldCheck className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "Sustainability is collective, not individual heroism. We grow with schools, local vendors, families, and artisans to replace single-use plastic at scale."
  },
  {
    title: "EDUCATION DRIVEN",
    icon: <History className="w-16 h-16 text-[#4CAF50]" strokeWidth={1.5} />,
    description: "We don't just sell products; we change mindsets. Through workshops and kids' programs, we teach why mindful alternatives matter to end the disposable culture."
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
