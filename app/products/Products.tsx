"use client";

import { useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';

// --- BAMBOO ESSENTIALS IMPORTS ---
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import bamboo_essentials2 from "@/public/products/Bamboo Essentials/bamboo-essentials2.jpeg"
import bamboo_essentials3 from "@/public/products/Bamboo Essentials/bamboo-essentials3.jpeg"
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import bamboo_essentials5 from "@/public/products/Bamboo Essentials/bamboo-essentials5.jpeg"
import bamboo_essentials6 from "@/public/products/Bamboo Essentials/bamboo-essentials6.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import bamboo_essentials8 from "@/public/products/Bamboo Essentials/bamboo-essentials8.jpeg"
import bamboo_essentials9 from "@/public/products/Bamboo Essentials/bamboo-essentials9.jpeg"
import bamboo_essentials10 from "@/public/products/Bamboo Essentials/bamboo-essentials10.jpeg"

// --- CANE BASKETS IMPORTS ---
import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import cane_baskets2 from "@/public/products/Cane Baskets/cane-baskets2.jpeg"
import cane_baskets3 from "@/public/products/Cane Baskets/cane-baskets3.jpeg"
import cane_baskets4 from "@/public/products/Cane Baskets/cane-baskets4.jpeg"
import cane_baskets5 from "@/public/products/Cane Baskets/cane-baskets5.jpeg"
import cane_baskets6 from "@/public/products/Cane Baskets/cane-baskets6.jpeg"
import cane_baskets7 from "@/public/products/Cane Baskets/cane-baskets7.jpeg"
import cane_baskets8 from "@/public/products/Cane Baskets/cane-baskets8.jpeg"
import cane_baskets9 from "@/public/products/Cane Baskets/cane-baskets9.jpeg"

// --- RICE HUSK IMPORTS ---
import rice_husk1 from "@/public/products/Rice Husk/rice-husk1.jpeg"
import rice_husk2 from "@/public/products/Rice Husk/rice-husk2.jpeg"
import rice_husk3 from "@/public/products/Rice Husk/rice-husk3.jpeg"
import rice_husk4 from "@/public/products/Rice Husk/rice-husk4.jpeg"
import rice_husk5 from "@/public/products/Rice Husk/rice-husk5.jpeg"
import rice_husk6 from "@/public/products/Rice Husk/rice-husk6.jpeg"
import rice_husk7 from "@/public/products/Rice Husk/rice-husk7.jpeg"
import rice_husk8 from "@/public/products/Rice Husk/rice-husk8.jpeg"
import rice_husk9 from "@/public/products/Rice Husk/rice-husk9.jpeg"
import rice_husk11 from "@/public/products/Rice Husk/rice-husk11.jpeg"
import rice_husk12 from "@/public/products/Rice Husk/rice-husk12.jpeg"
import rice_husk13 from "@/public/products/Rice Husk/rice-husk13.jpeg"

// --- NEW ECO KITS IMPORTS (Corrected Duplicates) ---
// --- ECO KITS IMPORTS (Updated with names from Image) ---
import kits1 from "@/public/Indoor Global Kit/Toiletry kit1.jpg"
import kits2 from "@/public/Indoor Global Kit/Toiletry kit3.jpg"
import kits3 from "@/public/Indoor Global Kit/Toiletry kit4.jpg"
import kits4 from "@/public/Indoor Global Kit/Toiletry kit2.jpg"
import kits5 from "@/public/Indoor Global Kit/Hand Towel Set1.jpg"
import kits6 from "@/public/Indoor Global Kit/Plantable Stationery kit2.jpg"
import kits7 from "@/public/Indoor Global Kit/Corporate kit1.jpg"
import kits8 from "@/public/Indoor Global Kit/Plantable Stationery kit1.jpg"
import kits9 from "@/public/Indoor Global Kit/Plantable Stationery kit3.jpg"
import kits10 from "@/public/Indoor Global Kit/Children's kit1.jpg"
import kits11 from "@/public/Indoor Global Kit/Ricehusk Dinner Set2.jpg"
import kits12 from "@/public/Indoor Global Kit/Ricehusk Dinner Set1.jpg"
import kits13 from "@/public/Indoor Global Kit/Children's kit3.jpg"
import kits14 from "@/public/Indoor Global Kit/Children's kit2.jpg"
import kits15 from "@/public/Indoor Global Kit/Hand Towel Set2.jpg"
import kits16 from "@/public/Indoor Global Kit/Hand Towel Set3.jpg"
import kits17 from "@/public/Indoor Global Kit/Hand Towel Set4.jpg"
import kits18 from "@/public/Indoor Global Kit/Hand Towel Set5.jpg"

const productsData = [
  // --- Bamboo Essentials ---
  { id: 1, name: "Bamboo Bottle 450ml", img: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", img: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Lice Comb", img: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush", img: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", img: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Beard Comb", img: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", img: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Rice Husk Bottle", img: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", img: bamboo_essentials9, category: "Bamboo Essentials" },
 { id: 10, name: "Bamboo Tongue Cleaner", img: bamboo_essentials10, category: "Bamboo Essentials" },

  // --- Cane Baskets ---
  { id: 10, name: "Boat Bag", img: cane_baskets1, category: "Cane Baskets" },
  { id: 11, name: "Storage Lid Box", img: cane_baskets2, category: "Cane Baskets" },
  { id: 12, name: "Beach Bag", img: cane_baskets3, category: "Cane Baskets" },
  { id: 13, name: "Shelf Basket", img: cane_baskets4, category: "Cane Baskets" },
  { id: 14, name: "Fruit Basket", img: cane_baskets5, category: "Cane Baskets" },
  { id: 15, name: "Hamper Bag", img: cane_baskets6, category: "Cane Baskets" },
  { id: 16, name: "Tiffin Bag", img: cane_baskets7, category: "Cane Baskets" },
  { id: 17, name: "Designer Jaali Bag", img: cane_baskets8, category: "Cane Baskets" },
  { id: 18, name: "Designer Boat Bag", img: cane_baskets9, category: "Cane Baskets" },

  // --- Rice Husk ---
  { id: 19, name: "Riged guard Loofah", img: rice_husk1, category: "Rice Husk" },
  { id: 20, name: "Bamboo Ear Swabs", img: rice_husk2, category: "Rice Husk" },
  { id: 21, name: "Canister", img: rice_husk3, category: "Rice Husk" },
  { id: 22, name: "Soup Bowl", img: rice_husk4, category: "Rice Husk" },
  { id: 23, name: "Classic Mug", img: rice_husk5, category: "Rice Husk" },
  { id: 24, name: "Canister (Tall)", img: rice_husk6, category: "Rice Husk" },
  { id: 25, name: "Snack plate", img: rice_husk7, category: "Rice Husk" },
  { id: 26, name: "Chai Cup", img: rice_husk8, category: "Rice Husk" },
  { id: 27, name: "Dinner Set", img: rice_husk9, category: "Rice Husk" },
  { id: 29, name: "Retro Cup", img: rice_husk11, category: "Rice Husk" },
  { id: 30, name: "Fusion Cup", img: rice_husk12, category: "Rice Husk" },
  { id: 31, name: "Deco planter", img: rice_husk13, category: "Rice Husk" },

  // --- NEW ECO KITS ---
  { id: 32, name: "Toiletry kit1", img: kits1, category: "Eco-Friendly Kits" },
  { id: 33, name: "Toiletry kit3", img: kits2, category: "Eco-Friendly Kits" },
  { id: 34, name: "Toiletry kit4", img: kits3, category: "Eco-Friendly Kits" },
  { id: 35, name: "Toiletry kit2", img: kits4, category: "Eco-Friendly Kits" },
  { id: 36, name: "Hand Towel Set1", img: kits5, category: "Eco-Friendly Kits" },
  { id: 37, name: "Plantable Stationery kit2", img: kits6, category: "Eco-Friendly Kits" },
  { id: 38, name: "Corporate kit1", img: kits7, category: "Eco-Friendly Kits" },
  { id: 39, name: "Plantable Stationery kit1", img: kits8, category: "Eco-Friendly Kits" },
  { id: 40, name: "Plantable Stationery kit3", img: kits9, category: "Eco-Friendly Kits" },
  { id: 41, name: "Children's kit1", img: kits10, category: "Eco-Friendly Kits" },
  { id: 42, name: "Ricehusk Dinner Set2", img: kits11, category: "Eco-Friendly Kits" },
  { id: 43, name: "Ricehusk Dinner Set1", img: kits12, category: "Eco-Friendly Kits" },
  { id: 44, name: "Children's kit3", img: kits13, category: "Eco-Friendly Kits" },
  { id: 45, name: "Children's kit2", img: kits14, category: "Eco-Friendly Kits" },
  { id: 46, name: "Hand Towel Set2", img: kits15, category: "Eco-Friendly Kits" },
  { id: 47, name: "Hand Towel Set3", img: kits16, category: "Eco-Friendly Kits" },
  { id: 48, name: "Hand Towel Set4", img: kits17, category: "Eco-Friendly Kits" },
  { id: 49, name: "Hand Towel Set5", img: kits18, category: "Eco-Friendly Kits" },
];

const categories = ["All", "Eco-Friendly Kits", "Rice Husk", "Bamboo Essentials", "Cane Baskets"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-[#444]">
      
      {/* Description Section */}
      <div className="mb-10 text-gray-600 leading-relaxed text-[15px] max-w-5xl">
        <p>
          Discover our sustainable collection crafted from natural materials. 
          From curated <strong>Eco-Friendly Kits</strong> and biodegradable Rice Husk kitchenware to 
          handcrafted Cane Baskets and Bamboo Essentials, we bring you products that are kind to the planet.
        </p>
      </div>

      {/* Toolbar Section */}
      <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-4 mb-8">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${viewMode === 'grid' ? "bg-[#009341] hover:bg-[#7baf40] text-white" : "border border-gray-200 text-gray-400 hover:bg-gray-50"}`}
          >
            <LayoutGrid size={18} />
          </button>
          
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded transition-colors ${viewMode === 'list' ? "bg-[#009341] hover:bg-[#7baf40] text-white" : "border border-gray-200 text-gray-400 hover:bg-gray-50"}`}
          >
            <List size={18} />
          </button>

          <span className="ml-4 text-sm text-gray-500 font-medium">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm border rounded-full transition-colors ${
                activeCategory === cat ? "bg-[#009341] hover:bg-[#7baf40] text-white border-[#a3a393]" : "bg-white hover:border-[#a3a393]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Display Section */}
      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          : "flex flex-col gap-4"
      }>
        {filteredProducts.map((product) => {
          const slug = product.name.toLowerCase().replace(/ /g, '-');
          return (
          <Link href={`/products/${slug}`}
            key={product.id} 
            className={`group border border-gray-100 rounded-md p-4 bg-white hover:shadow-lg transition-all ${
              viewMode === 'list' ? "flex flex-row items-center gap-6" : "flex flex-col"
            }`}
          >
            <div className={`relative bg-gray-50 rounded shrink-0 overflow-hidden ${
              viewMode === 'list' ? "h-32 w-32" : "aspect-square mb-4"
            }`}>
              <Image 
                src={product.img} 
                alt={product.name} 
                fill 
                className=" group-hover:scale-110 transition-transform duration-300" 
              />
            </div> 

            <div className="flex flex-col flex-grow">
              <p className="text-[10px] text-[#a3a393] uppercase tracking-widest mb-1 font-bold">
                {product.category}
              </p>
              <h3 className={`font-medium text-gray-800 group-hover:text-amber-700 transition-colors ${
                viewMode === 'list' ? "text-lg" : "text-sm mb-2"
              }`}>
                {product.name}
              </h3>
              
              {viewMode === 'list' && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2 max-w-xl">
                  High-quality {product.name} made from eco-friendly materials, perfect for sustainable living.
                </p>
              )}
            </div>

            {viewMode === 'list' && (
              <button className="ml-auto px-6 py-2 bg-[#009341] hover:bg-[#7baf40] text-white text-sm rounded hover:bg-[#8e8e7f] transition-colors">
                View Details
              </button>
            )}
          </Link>
        );
        })}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
