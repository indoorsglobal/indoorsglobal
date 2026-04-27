"use client";

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { productsData } from '@/data/products';

// --- FIXED CATEGORIES LIST ---
// Yeh names exact hone chahiye jo aapne productsData ki "category" field mein likhe hain
const categories = [
  "All", 
  "home-living", 
  "personal-lifestyle", 
  "storage-utility", 
  "eco-bundle", 
  "gifting-corporate",
  "gifting-bulk-&-custom",
  "Eco-Friendly Kits",
  "Rice Husk",
  "Bamboo Essentials",
  "Cane Baskets"
];

// Helper function taaki dropdown mein ugly names (home-living) na dikhein
const formatCategoryName = (name: string) => {
  if (name === "home-living") return "Home & Living";
  if (name === "personal-lifestyle") return "Personal Lifestyle";
  if (name === "storage-utility") return "Storage & Utility";
  if (name === "eco-bundle") return "Eco Bundles";
  if (name === "gifting-corporate") return "Corporate Gifting";
  if (name === "gifting-bulk-&-custom") return "Bulk & Custom";
  return name;
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // --- FILTER LOGIC ---
  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-[#444]">
      
      {/* Header */}
      <div className="mb-10 max-w-5xl">
        <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2">Sustainable Collection</h1>
        <p className="text-gray-600 leading-relaxed">
          Premium eco-friendly products crafted from bamboo, cane, and rice husk.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-b border-gray-100 py-6 mb-8 gap-6">
        
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? "bg-white shadow text-[#009341]" : "text-gray-400"}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? "bg-white shadow text-[#009341]" : "text-gray-400"}`}
            >
              <List size={20} />
            </button>
          </div>
          <span className="text-sm font-medium text-gray-500">
            {filteredProducts.length} items found
          </span>
        </div>

        {/* --- DROPDOWN WITH FORMATTED NAMES --- */}
        <div className="relative w-full md:w-72">
          <label className="text-[10px] uppercase font-bold text-[#009341] absolute -top-2.5 left-3 bg-white px-1 z-10">
            Select Category
          </label>
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#009341] cursor-pointer shadow-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {formatCategoryName(cat)} 
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      {/* Grid Display */}
      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" 
          : "flex flex-col gap-4"
      }>
        {filteredProducts.map((product) => {
          const slug = product.name.toLowerCase().replace(/ /g, '-');
          return (
            <Link href={`/products/${slug}`}
              key={product.id} 
              className={`group border border-gray-50 rounded-2xl p-4 bg-white hover:shadow-2xl transition-all duration-300 ${
                viewMode === 'list' ? "flex flex-row items-center gap-6" : "flex flex-col"
              }`}
            >
              <div className={`relative bg-[#f9f9f7] rounded-xl overflow-hidden shrink-0 ${
                viewMode === 'list' ? "h-32 w-32" : "aspect-square mb-4"
              }`}>
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div> 

              <div className="flex-grow">
                {/* <span className="text-[9px] font-bold text-[#009341] uppercase tracking-tighter bg-green-50 px-2 py-0.5 rounded">
                  {formatCategoryName(product.category)}
                </span> */}
                <h3 className={`font-bold text-gray-900 mt-2 transition-colors ${
                  viewMode === 'list' ? "text-xl" : "text-xl"
                }`}>
                  {product.name}
                </h3>
                 <button className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest flex items-center gap-1 group-hover:text-[#009341] transition-all">
                  View details 
                  {/* <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    →
                  </span> */}
                </button>
              </div>

              {viewMode === 'list' && (
                <div className="hidden md:block px-6 py-2 bg-[#009341] text-white text-xs font-bold rounded-full">
                  View Details
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Empty Result */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-400 font-medium">No products available in this category yet.</p>
        </div>
      )}
    </div>
  );
}