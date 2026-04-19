"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

// --- IMAGE IMPORTS ---
import kits7 from "@/public/Indoor Global Kit/Corporate kit1.jpg"

const productsData = [
  {
    id: 38,
    name: "Corporate kit 1",
    description: "Make your desk a statement of your values. This kit bridges the gap between work and wellness, featuring a plantable notebook, a reusable rice-husk coffee tumbler, a seed pen, and a soft crimson hand towel. It’s the ultimate Welcome or Thank You gift for the modern professional.",
    img: kits7,
    category: "Corporate Kit"
  },
];

export default function CorporateKitDetail() {
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
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-2xl font-bold">Kit Not Found</h1>
        <Link href="/categories/corporate-kit" className="text-[#a3a393] mt-4 underline font-medium">
          Back to Corporate Kits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/corporate-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
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
             <p className="text-lg text-gray-700 font-medium italic">Premium Sustainable Gifting</p>
             <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <p>
              Elevate your corporate gifting with our eco-friendly kit. Each element is carefully chosen to reflect a commitment to the planet without compromising on professional elegance. Perfect for employees, clients, or event giveaways.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#009341] hover:bg-[#7cb140] text-white px-8 py-4 rounded  transition-all flex items-center justify-center gap-2 font-medium text-center">
              Request Bulk Quote
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-50">
             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Customization:</span>
             <p className="text-sm text-gray-500 mt-2">
               Company logo branding and custom packaging available for bulk orders (MOQ 50 units).
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}