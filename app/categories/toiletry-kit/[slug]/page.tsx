"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Sparkles, CheckCircle } from 'lucide-react';

// --- IMAGE IMPORTS ---
import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg"
import kits2 from "@/public/Indoor Global Kit/Toiletry kit3.jpg"
import kits3 from "@/public/Indoor Global Kit/Toiletry kit4.jpg"
import kits4 from "@/public/Indoor Global Kit/Toiletry kit2.jpg"

const productsData = [
  { id: 32, name: "Toiletry kit1", description: "This kit is for the eco-conscious traveler. Featuring a hand-carved wooden comb, a bamboo toothbrush, and a classic metal razor, all tucked into a breathable jute drawstring bag. It’s everything you need for a zero-waste grooming routine, whether you're in a hotel or a hiking trail.", img: kits1, category: "Toiletry Kit" },
  { id: 33, name: "Toiletry kit3", description: "Why go to a spa when the spa can come to you? This premium kit is housed in a luxury floral-accented wicker basket. It features natural cotton buds, a biodegradable loofah, a bamboo brush, and a safety razor. It’s the perfect gift for someone who deserves a bathroom upgrade that feels as good as it looks.", img: kits2, category: "Toiletry Kit" },
  { id: 34, name: "Toiletry kit4", description: "Strip back the plastic and elevate your morning ritual. This set features a hand-carved wooden comb for a static-free hair day, a bamboo tongue cleaner, and a biodegradable toothbrush. Paired with a sleek safety razor and a textured jute pouch, it’s the ultimate kit for the modern man or woman who believes that style shouldn't cost the Earth.", img: kits3, category: "Toiletry Kit" },
  { id: 35, name: "Toiletry kit2", description: "Transform your bathroom into a tranquil sanctuary. This comprehensive kit includes bamboo cotton buds, an exfoliating natural loofah, and a bamboo-handle razor. Presented in a hand-woven seagrass basket with a floral-printed base, it’s a beautiful reminder that self-care feels better when it’s sustainable.", img: kits4, category: "Toiletry Kit" }
];

export default function ToiletryDetail() {
  const { slug } = useParams();

  const product = productsData.find((p) => {
    const generatedSlug = p.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') 
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return generatedSlug === slug;
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Kit Not Found</h1>
        <Link href="/categories/toiletry-kit" className="text-[#a3a393] mt-4 underline font-medium">
          Back to Toiletry Kits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/toiletry-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image src={product.img} alt={product.name} fill priority className="object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">{product.name}</h1>
          
          <div className="flex items-center gap-2 text-[#a3a393] mb-6 font-medium italic">
            <Sparkles size={18} /> Travel-friendly & Plastic-free
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <p>{product.description}</p>
            <p className="mt-4">
              Our {product.name.toLowerCase()} is curated for those who dont want to compromise on their sustainability values while traveling. Every item is plastic-free, compostable, and made from premium bamboo or jute.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#a3a393] text-white px-8 py-4 rounded hover:bg-[#8e8e7f] transition-all flex items-center justify-center gap-2 font-medium">
              Inquire for Bulk Orders
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-50 pt-6">
             <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold">
                <CheckCircle size={16} className="text-green-600" /> 100% Organic
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold">
                <CheckCircle size={16} className="text-green-600" /> Travel Approved
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}