import React from 'react';
import Link from 'next/link'; // Link import karna zaruri hai
import Image from 'next/image'; // Next.js Image optimization ke liye

// --- IMAGE IMPORTS ---
import kits10 from "@/public/Indoor Global Kit/Children's kit1.jpg"
import kits13 from "@/public/Indoor Global Kit/Children's kit3.jpg"
import kits14 from "@/public/Indoor Global Kit/Children's kit2.jpg"

const products = [
  {
    id: 1,
    name: "Children's kit 1",
    description: 'Eco-friendly mealtime set with a bamboo cup and handcrafted cane basket.',
    image: kits10,
  },
  {
    id: 2,
    name: "Children's kit 2",
    description: 'Sustainable dining kit with a pastel bowl, spoon, and bamboo bottle in a jute bag.',
    image: kits14,
  },
  {
    id: 3,
    name: "Children's kit 3",
    description: 'Premium kids adventure kit featuring a durable plate, bottle, and carrying bag.',
    image: kits13,
  },
];

export default function Childrenkit() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Children Kit</h1>
        <p className="text-gray-500 italic">Sustainable & Safe Products for Kids</p>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => {
          // Slug generate karein jo detail page ke params se match ho
          const slug = product.name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

          return (
            /* Wrap the entire card with Link to the dynamic route */
            <Link 
              href={`/categories/children-kit/${slug}`} 
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