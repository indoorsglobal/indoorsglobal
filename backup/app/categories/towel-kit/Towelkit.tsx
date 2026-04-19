import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- IMAGE IMPORTS ---
import kits5 from "@/public/Indoor Global Kit/Hand Towel Set1.jpg"
import kits15 from "@/public/Indoor Global Kit/Hand Towel Set2.jpg"
import kits16 from "@/public/Indoor Global Kit/Hand Towel Set3.jpg"
import kits17 from "@/public/Indoor Global Kit/Hand Towel Set4.jpg"
import kits18 from "@/public/Indoor Global Kit/Hand Towel Set5.jpg"
// import kits19 from "@/public/Indoor Global Kit/Hand Towel Set6.jpg"
import kits20 from "@/public/Indoor Global Kit/Hand Towel Set7.jpg"
import kits21 from "@/public/Indoor Global Kit/Hand Towel Set8.jpg"
import kits22 from "@/public/Indoor Global Kit/Hand Towel Set9.jpg"
import kits23 from "@/public/Indoor Global Kit/Hand Towel Set10.jpg"
import kits24 from "@/public/Indoor Global Kit/Hand Towel Set11.jpg"

const products = [
  { id: 36, name: 'Hand Towel Set 1', description: 'Premium towel set with a decorative star detail in a jute basket.', image: kits5 },
  { id: 46, name: 'Hand Towel Set 2', description: 'Deep blue ultra-soft absorbent towel for daily use.', image: kits15 },
  { id: 47, name: 'Hand Towel Set 3', description: 'Bright red soft-touch towel made from organic fibers.', image: kits16 },
  { id: 48, name: 'Hand Towel Set 4', description: 'Double set of plush red hand towels.', image: kits17 },
  { id: 49, name: 'Hand Towel Set 5', description: 'Light teal fresh bamboo-blend hand towel.', image: kits18 },
  // { 
  //   id: 50, 
  //   name: "Hand Towel Set 6", 
  //   description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
  //   image: kits19, 
  //   category: "Towel Kit" 
  // },
  { 
    id: 51, 
    name: "Hand Towel Set 7", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    image: kits20, // Changed from img to image
    category: "Towel Kit" 
  },
  { 
    id: 52, 
    name: "Hand Towel Set 8", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    image: kits21, // Changed from img to image
    category: "Towel Kit" 
  },
  { 
    id: 53, 
    name: "Hand Towel Set 9", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    image: kits22, // Changed from img to image
    category: "Towel Kit" 
  },
  { 
    id: 54, 
    name: "Hand Towel Set 10", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    image: kits23, // Changed from img to image
    category: "Towel Kit" 
  },
  { 
    id: 55, 
    name: "Hand Towel Set 11", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    image: kits24, // Changed from img to image
    category: "Towel Kit" 
  }
];

export default function Towelkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Towel Kit</h1>
        <p className="text-gray-500 italic">Organic Comfort - Sustainable Bamboo Linens</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => {
          // This generates the URL-friendly slug but keeps product.name intact for display
          const slug = product.name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

          return (
            <Link 
              href={`/categories/towel-kit/${slug}`} 
              key={product.id} 
              className="group cursor-pointer block"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4 border border-gray-100 relative">
                <Image
                  src={product.image} // Now works for all items
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {product.name} {/* Correctly displays as "Hand Towel Set X" */}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {product.description}
              </p>
              <button className="text-xs font-semibold text-[#a3a393] mt-2 uppercase tracking-wider group-hover:text-black transition-colors">
                View details
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}