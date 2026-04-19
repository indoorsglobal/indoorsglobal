"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

// --- IMAGE IMPORTS ---
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import rice_husk5 from "@/public/products/Rice Husk/rice-husk5.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk9 from "@/public/products/Rice Husk/rice-husk9.jpeg"

const productsData = [
  { 
    id: 1, 
    name: "Bamboo Bottle", 
    description: "Nature’s own insulation. A sleek, earth-born companion to keep you hydrated without the plastic footprint.", 
    img: bamboo_essentials1, 
    category: "Self-Care Kit" 
  },
  { 
    id: 27, 
    name: "Dinner Set", 
    description: "From harvest to home. A sophisticated dining experience crafted from upcycled rice husks for the conscious host.", 
    img: rice_husk9, 
    category: "Self-Care Kit" 
  },
  { 
    id: 7, 
    name: "Ricehusk Spoon", 
    description: "Small change, big impact. An ergonomically designed, compostable alternative to single-use plastic cutlery.", 
    img: bamboo_essentials7, 
    category: "Self-Care Kit" 
  },
  { 
    id: 25, 
    name: "Snack Plate", 
    description: "Serve with a soul. Lightweight, durable, and naturally textured—perfect for guilt-free appetizers and treats.", 
    img: rice_husk7, 
    category: "Self-Care Kit" 
  },
  { 
    id: 23, 
    name: "Classic Mug", 
    description: "Your morning ritual, redefined. A textured, heat-resistant vessel that brings an earthy warmth to every sip.", 
    img: rice_husk5, 
    category: "Self-Care Kit" 
  },
  { 
    id: 10, 
    name: "Boat Bag", 
    description: "Carry the future. A heavy-duty, artisanal jute tote designed to replace a thousand plastic bags with style.", 
    img: cane_baskets1, 
    category: "Self-Care Kit" 
  }
];

export default function SelfCareDetail() {
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
        <h1 className="text-2xl font-bold">Item Not Found</h1>
        <Link href="/categories/self-care-kit" className="text-[#a3a393] mt-4 underline">
          Back to Self-Care Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/self-care-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image src={product.img} alt={product.name} fill priority className="object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">{product.name}</h1>
          
          <div className="flex items-center gap-2 text-[#a3a393] mb-6">
            <Sparkles size={18} />
            <span className="text-sm font-medium italic">Handpicked for your wellness routine</span>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <p>{product.description}</p>
            <p className="mt-4">
              Part of our exclusive Self-Care range, this {product.name.toLowerCase()} is designed 
              to bring mindfulness to your daily habits. Made with ethically sourced materials that 
              are as kind to the earth as they are to you.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#a3a393] text-white px-8 py-4 rounded hover:bg-[#8e8e7f] transition-all flex items-center justify-center gap-2 font-medium">
              Enquire Now
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}