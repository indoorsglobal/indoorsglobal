import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- IMAGE IMPORTS ---
import kits6 from "@/public/Indoor Global Kit/Plantable Stationery kit2.jpg"
import kits8 from "@/public/Indoor Global Kit/Plantable Stationery kit1.jpg"

const products = [
  {
    id: 39,
    name: 'Plantable Stationery kit 1',
    description: 'Complete eco-friendly writing set featuring an open notebook and plantable pens.',
    image: kits8,
  },
  {
    id: 37,
    name: 'Plantable Stationery kit 2',
    description: 'Premium grow-it-yourself kit with a coffee-husk mug and seed diary.',
    image: kits6,
  },
];

export default function Stationerykit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stationery Kit</h1>
        <p className="text-gray-500 italic">Sustainable Writing Essentials - Grow Your Ideas</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => {
          const slug = product.name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

          return (
            <Link 
              href={`/categories/stationery-kit/${slug}`} 
              key={product.id} 
              className="group cursor-pointer block"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4 border border-gray-100 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {product.name}
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