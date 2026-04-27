"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

// --- DATA IMPORT FROM ECOBUNDLE ---
import { CATEGORIES, ecoBundleProducts } from '@/data/ecoBundle';

export default function Towelkit() {
  // Local state for filtering and view mode
  // Default category is set to "HAND TOWEL SET"
  const [activeCategory, setActiveCategory] = useState("HAND TOWEL SET");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter Logic using centralized data
  const filteredProducts = ecoBundleProducts.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white font-sans">
      
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2 uppercase tracking-tight">
          {activeCategory}
        </h1>
        <p className="text-gray-500 italic ">
          Organic Comfort - Sustainable Bamboo Linens
        </p>
      </header>

      {/* Toolbar: Filter & View Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-b border-gray-100 py-6 mb-10 gap-6">
        
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
          <span className="text-sm font-medium text-gray-400">
            {filteredProducts.length} items found
          </span>
        </div>

        {/* Dropdown Filter */}
        <div className="relative w-full md:w-80">
          <label className="text-[10px] uppercase font-bold text-[#009341] absolute -top-2.5 left-3 bg-white px-1 z-10">
            Select Category
          </label>
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#009341] cursor-pointer shadow-sm font-bold text-gray-700"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      {/* Product Display */}
      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12" 
          : "flex flex-col gap-6"
      }>
        {filteredProducts.map((product) => {
          // Dynamic Slug Generation
          const slug = product.name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

          // Dynamic Category URL slug for routing
          const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');

          return (
            <Link 
              href={`/categories/${categorySlug}/${slug}`} 
              key={`${product.id}-${product.name}`} 
              className={`group cursor-pointer transition-all duration-300 ${
                viewMode === 'list' 
                ? "flex flex-row items-center gap-8 border border-gray-100 p-4 rounded-2xl hover:shadow-md" 
                : "block"
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden rounded-xl bg-gray-50 shrink-0 ${
                viewMode === 'list' ? "h-32 w-32 md:h-44 md:w-44" : "aspect-square mb-4 border border-gray-100"
              }`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                {/* <span className="text-[10px] font-bold text-[#009341] uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded">
                  {product.category}
                </span> */}
                <h3 className={`font-bold text-gray-900 mt-2 transition-colors ${
                  viewMode === 'list' ? "text-xl md:text-2xl" : "text-lg"
                }`}>
                  {product.name}
                </h3>
                
                {viewMode === 'list' && (
                  <p className="text-gray-500 mt-2 text-sm line-clamp-2 max-w-xl">
                    {product.description}
                  </p>
                )}

                <button className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest flex items-center gap-1 group-hover:text-[#009341] transition-all">
                  View details 
                  {/* <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    →
                  </span> */}
                </button>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty Result Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-24 border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-400 font-medium">No products found in "{activeCategory}".</p>
        </div>
      )}
    </div>
  );
}