"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

// --- IMAGE IMPORTS (Listing page wale hi use karein) ---
import kits10 from "@/public/Indoor Global Kit/Children's kit1.jpg"
import kits13 from "@/public/Indoor Global Kit/Children's kit3.jpg"
import kits14 from "@/public/Indoor Global Kit/Children's kit2.jpg"

// Products Data: Iska name wahi rakhein jo listing page mein hai 
// taaki slug match ho sake.
const productsData = [
  {
    id: 1,
    name: "Children's kit 1",
    description: 'Mealtime becomes an adventure! This adorable set features a blush-pink rice-husk tumbler, a bamboo straw, and wooden cutlery (spoon, fork, and serrated knife) all packed into a charming mini wicker basket. Designed for tiny hands and a healthy planet.',
    image: kits10,
    category: "Children Kit"
  },
  {
    id: 2,
    name: "Children's kit 2",
    description: 'Add some pop to the dinner table with this vibrant dusty-rose set. Crafted from durable rice-husk composite, it includes a square plate, a bowl, a tumbler, and a sleek bamboo-wrapped thermos flask. It’s shatter-proof, eco-friendly, and stylish enough for kids and adults alike.',
    image: kits14,
    category: "Children Kit"
  },
  {
    id: 3,
    name: "Children's kit 3",
    description: 'For those who prefer a modern, neutral aesthetic. This kit features a sleek grey rice-husk plate and mug paired with a bamboo-insulated bottle. Everything fits into a sturdy jute tote bag, making it the perfect companion for school lunches or weekend outings.',
    image: kits13,
    category: "Children Kit"
  },
];

export default function ChildrenKitDetail() {
  const { slug } = useParams();

  // Slug matching logic
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
        <Link href="/categories/children-kit" className="text-[#a3a393] mt-4 underline">
          Back to Children Kit
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      {/* Back Button - Ab ye listing page par wapas jayega */}
      <Link href="/categories/children-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
            {product.name}
          </h1>
          
          <div className="space-y-1 mb-8">
             <p className="text-lg text-gray-700 font-medium italic">Sustainable & Safe</p>
             <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <p>
              This {product.name.toLowerCase()} is designed specifically for children, 
              using 100% safe and eco-friendly materials. Its durable, practical, 
              and perfect for parents who want to introduce sustainability to their kids early on.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#a3a393] text-white px-8 py-4 rounded hover:bg-[#8e8e7f] transition-all flex items-center justify-center gap-2 font-medium">
              Contact for Inquiry
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-50">
             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Material & Care:</span>
             <p className="text-sm text-gray-500 mt-2">
               Hand-wash recommended. Made with natural bamboo, cane, or high-quality jute. BPA-free and non-toxic.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}