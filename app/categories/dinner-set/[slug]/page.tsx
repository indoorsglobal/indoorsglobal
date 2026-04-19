"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShieldCheck, Leaf } from 'lucide-react';

// --- IMAGE IMPORTS ---
import kits11 from "@/public/Indoor Global Kit/Ricehusk Dinner Set2.jpg"
import kits12 from "@/public/Indoor Global Kit/Ricehusk Dinner Set1.jpg"

const productsData = [
  {
    id: 43,
    name: "Ricehusk Dinner Set 1",
    description: "Upgrade your kitchen with the beauty of the harvest. This full dining set is made from recycled rice husks, giving every piece a natural, speckled finish. With multiple plate sizes, bowls, and tumblers, it’s a lightweight, non-toxic, and sustainable alternative to plastic or heavy ceramic.",
    img: kits12,
    category: "Dinner Set"
  },
  {
    id: 42,
    name: "Ricehusk Dinner Set 2",
    description: "Bring the calming colors of the sea to your dining table. Made from upcycled rice husks, this set features a beautiful seafoam green and speckled beige palette. With indented plates, deep tumblers, and ergonomic spoons, it’s lightweight, shatter-proof, and 100% non-toxic. Perfect for outdoor picnics or eco-conscious dinner parties.",
    img: kits11,
    category: "Dinner Set"
  },
];

export default function DinnerSetDetail() {
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
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/categories/dinner-set" className="text-[#a3a393] mt-4 underline">
          Back to Dinner Sets
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/dinner-set" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image
            src={product.img}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
            {product.name}
          </h1>
          
          <div className="space-y-4 mb-8">
             <div className="flex items-center gap-2 text-green-700 font-medium">
                <Leaf size={18} /> 100% Biodegradable Rice Husk
             </div>
             <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <h4 className="font-bold text-gray-900 mb-2">Why choose Rice Husk?</h4>
            <p>
              Our dinner sets are made from natural agricultural waste (rice husk), making them heat-resistant, dishwasher safe, and completely toxin-free. Unlike plastic, these do not leach chemicals into your food.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#009341] hover:bg-[#7cb140] text-white px-8 py-4 rounded  transition-all flex items-center justify-center gap-2 font-medium text-center">
              Enquire for Pricing
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
             <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold">
                <ShieldCheck size={16} className="text-green-600" /> BPA Free
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-500 uppercase font-bold">
                <ShieldCheck size={16} className="text-green-600" /> Microwave Safe
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}