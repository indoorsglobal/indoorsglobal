"use client";

import { useState, useMemo, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import { LayoutGrid, List, ChevronDown } from 'lucide-react';
import { productsData } from "@/data/products";
import { useParams } from 'next/navigation';

// --- TYPES ---
interface Product {
  id: number;
  name: string;
  category: string;
  img: string | StaticImageData;
  description?: string;
}

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

const formatCategoryName = (name: string) => {
  const mapping: Record<string, string> = {
    "home-living": "Home & Living",
    "personal-lifestyle": "Personal Lifestyle",
    "storage-utility": "Storage & Utility",
    "eco-bundle": "Eco Bundles",
    "gifting-corporate": "Corporate Gifting",
    "gifting-bulk-&-custom": "Bulk & Custom"
  };
  return mapping[name] || name;
};

const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // --- STATE ---
  // Initial category wahi hogi jo URL mein hai (Home Living page par Home Living dikhega)
  const [activeCategory, setActiveCategory] = useState(slug || "All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // URL change hone par agar user category badle toh state update ho
  useEffect(() => {
    if (slug) setActiveCategory(slug);
  }, [slug]);

  // --- FILTER LOGIC ---
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return productsData as Product[];
    return (productsData as Product[]).filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const categoryTitle = formatCategoryName(activeCategory);

  return (
    <main className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 font-sans">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a202c] capitalize">
            {categoryTitle}
          </h1>
          <p className="text-gray-500 italic mt-2">
            Curated Sustainable Collection - Organic & Eco-Friendly
          </p>
        </header>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-b border-gray-100 py-6 mb-12 gap-6">
          
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

          {/* Filter Dropdown */}
          <div className="relative w-full md:w-72">
            <label className="text-[10px] uppercase font-bold text-[#009341] absolute -top-2.5 left-3 bg-white px-1 z-10">
              Change Category
            </label>
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#009341] cursor-pointer"
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

        {/* Products Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12" 
            : "flex flex-col gap-6"
        }>
          {filteredProducts.map((product) => (
            <NextLink
              key={product.id}
              href={`/products/${createSlug(product.name)}`}
              className={`group transition-all ${
                viewMode === 'list' 
                ? "flex flex-row items-center gap-8 border border-gray-100 p-4 rounded-2xl" 
                : "block"
              }`}
            >
              <div className={`relative overflow-hidden rounded-xl bg-[#f7f8fa] shrink-0 ${
                viewMode === 'list' ? "h-32 w-32 md:h-44 md:w-44" : "aspect-square mb-4"
              }`}>
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                {/* <span className="text-[10px] font-bold text-[#009341] bg-green-50 px-2 py-1 rounded uppercase">
                  {formatCategoryName(product.category)}
                </span> */}
                <h3 className={`font-bold mt-2 ${
                  viewMode === 'list' ? "text-xl md:text-2xl" : "text-lg"
                }`}>
                  {product.name}
                </h3>
                <p className="text-[14px] font-semibold group-hover:text-[#009341] text-gray-400 mt-3 tracking-widest uppercase">
                  VIEW DETAILS
                </p>
              </div>
            </NextLink>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No products found.</p>
          </div>
        )}
      </div>
    </main>
  );
}