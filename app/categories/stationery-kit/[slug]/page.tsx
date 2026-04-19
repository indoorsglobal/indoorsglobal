"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, PenTool, Sprout } from 'lucide-react';

// --- IMAGE IMPORTS ---
import kits6 from "@/public/Indoor Global Kit/Plantable Stationery kit2.jpg"
import kits8 from "@/public/Indoor Global Kit/Plantable Stationery kit1.jpg"

const productsData = [
  {
    id: 39,
    name: "Plantable Stationery kit 1",
    description: "Stop throwing away your old notebooks! This set features a plantable seed-paper journal that can be buried in soil once filled. Accompanied by pencils and pens with seed capsules, this kit turns your old sketches and notes into a garden of flowers and herbs.",
    img: kits8,
    category: "Stationery Kit"
  },
{
  id: 37,
  name: "Plantable Stationery Kit 2",
  description: "Ideas that literally bloom. Sketch your dreams in a seed-embedded diary and sip sustainably from a textured coffee-husk mug.",
  img: kits6,
  category: "Stationery Kit"
},
];

export default function StationeryDetail() {
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
        <Link href="/categories/stationery-kit" className="text-[#a3a393] mt-4 underline">
          Back to Stationery Kits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/stationery-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
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
                <Sprout size={18} /> Contains Live Seeds
             </div>
             <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <PenTool size={18} /> Sustainability Impact
            </h4>
            <p>
              This kit isnt just for writing; its for growing. The pens and paper contain seeds that can be planted after use. Made from recycled materials and natural fibers to ensure zero waste.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#009341] hover:bg-[#7cb140] text-white px-8 py-4 rounded  transition-all flex items-center justify-center gap-2 font-medium text-center">
              Enquire for Bulk Orders
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-50">
             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">How to use:</span>
             <p className="text-sm text-gray-500 mt-2">
               Once your pen or pencil is too short to write, plant it in a pot of soil, add water, and watch it bloom into herbs or flowers.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}