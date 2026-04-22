"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { Search, X, SlidersHorizontal, Leaf } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

// --- ECO KITS IMPORTS ---
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

const ALL_PRODUCTS = [
  // --- Bamboo Essentials ---
  { id: 1, name: "Bamboo Bottle 450ml", image: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", image: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Lice Comb", image: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush", image: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", image: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Beard Comb", image: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", image: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Rice Husk Bottle", image: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", image: bamboo_essentials9, category: "Bamboo Essentials" },
  { id: 10, name: "Bamboo Tongue Cleaner", image: bamboo_essentials10, category: "Bamboo Essentials" },

  // --- Cane Baskets ---
  { id: 11, name: "Boat Bag", image: cane_baskets1, category: "Cane Baskets" },
  { id: 12, name: "Storage Lid Box", image: cane_baskets2, category: "Cane Baskets" },
  { id: 13, name: "Beach Bag", image: cane_baskets3, category: "Cane Baskets" },
  { id: 14, name: "Shelf Basket", image: cane_baskets4, category: "Cane Baskets" },
  { id: 15, name: "Fruit Basket", image: cane_baskets5, category: "Cane Baskets" },
  { id: 16, name: "Hamper Bag", image: cane_baskets6, category: "Cane Baskets" },
  { id: 17, name: "Tiffin Bag", image: cane_baskets7, category: "Cane Baskets" },
  { id: 18, name: "Designer Jaali Bag", image: cane_baskets8, category: "Cane Baskets" },
  { id: 19, name: "Designer Boat Bag", image: cane_baskets9, category: "Cane Baskets" },

  // --- Rice Husk ---
  { id: 20, name: "Riged guard Loofah", image: rice_husk1, category: "Rice Husk" },
  { id: 21, name: "Bamboo Ear Swabs", image: rice_husk2, category: "Rice Husk" },
  { id: 22, name: "Canister", image: rice_husk3, category: "Rice Husk" },
  { id: 23, name: "Soup Bowl", image: rice_husk4, category: "Rice Husk" },
  { id: 24, name: "Classic Mug", image: rice_husk5, category: "Rice Husk" },
  { id: 25, name: "Canister (Tall)", image: rice_husk6, category: "Rice Husk" },
  { id: 26, name: "Snack plate", image: rice_husk7, category: "Rice Husk" },
  { id: 27, name: "Chai Cup", image: rice_husk8, category: "Rice Husk" },
  { id: 28, name: "Dinner Set", image: rice_husk9, category: "Rice Husk" },
  { id: 29, name: "Retro Cup", image: rice_husk11, category: "Rice Husk" },
  { id: 30, name: "Fusion Cup", image: rice_husk12, category: "Rice Husk" },
  { id: 31, name: "Deco planter", image: rice_husk13, category: "Rice Husk" },

  // --- ECO KITS ---
  { id: 32, name: "Toiletry kit 1", image: kits1, category: "Eco-Friendly Kits" },
  { id: 33, name: "Toiletry kit 3", image: kits2, category: "Eco-Friendly Kits" },
  { id: 34, name: "Toiletry kit 4", image: kits3, category: "Eco-Friendly Kits" },
  { id: 35, name: "Toiletry kit 2", image: kits4, category: "Eco-Friendly Kits" },
  { id: 36, name: "Hand Towel Set 1", image: kits5, category: "Eco-Friendly Kits" },
  { id: 37, name: "Plantable Stationery kit 2", image: kits6, category: "Eco-Friendly Kits" },
  { id: 38, name: "Corporate kit 1", image: kits7, category: "Eco-Friendly Kits" },
  { id: 39, name: "Plantable Stationery kit 1", image: kits8, category: "Eco-Friendly Kits" },
  { id: 40, name: "Plantable Stationery kit 3", image: kits9, category: "Eco-Friendly Kits" },
  { id: 41, name: "Children's kit 1", image: kits10, category: "Eco-Friendly Kits" },
  { id: 42, name: "Ricehusk Dinner Set 2", image: kits11, category: "Eco-Friendly Kits" },
  { id: 43, name: "Ricehusk Dinner Set 1", image: kits12, category: "Eco-Friendly Kits" },
  { id: 44, name: "Children's kit 3", image: kits13, category: "Eco-Friendly Kits" },
  { id: 45, name: "Children's kit 2", image: kits14, category: "Eco-Friendly Kits" },
  { id: 46, name: "Hand Towel Set 2", image: kits15, category: "Eco-Friendly Kits" },
  { id: 47, name: "Hand Towel Set 3", image: kits16, category: "Eco-Friendly Kits" },
  { id: 48, name: "Hand Towel Set 4", image: kits17, category: "Eco-Friendly Kits" },
  { id: 49, name: "Hand Towel Set 5", image: kits18, category: "Eco-Friendly Kits" },
];

function searchProducts(query) {
  if (!query) return ALL_PRODUCTS;
  const q = query.toLowerCase();
  return ALL_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

function ProductCard({ product }) {
  // Creating a URL slug from the product name
  const productSlug = product.name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");

  return (
    <NextLink
      href={`/products/${productSlug}`}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-[#009341]/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative bg-[#f0faf3] h-52 overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#009341] text-[10px] font-bold uppercase px-2 py-1 rounded-full border border-[#009341]/20">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#009341] transition-colors line-clamp-2">
          {product.name}
        </h3>
        {/* <div className="mt-auto pt-3 flex items-center justify-end">
          <button className="text-xs bg-[#009341] text-white px-4 py-2 rounded-lg hover:bg-[#007a36] transition-colors w-full sm:w-auto">
            View Details
          </button>
        </div> */}
      </div>
    </NextLink>
  );
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInputValue(query);
    setLoading(true);
    const timer = setTimeout(() => {
      setResults(searchProducts(query));
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = inputValue.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <main className="min-h-screen bg-[#fafafa] pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm max-w-2xl">
            <Search size={20} className="text-[#009341] shrink-0" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for eco-friendly products..."
              className="flex-1 text-base text-gray-800 outline-none placeholder:text-gray-400"
            />
            {inputValue && (
              <button type="button" onClick={() => { setInputValue(""); router.push("/search"); }} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            )}
            <button type="submit" className="bg-[#009341] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#007a36] transition-colors shrink-0">
              Search
            </button>
          </form>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            {query ? (
              loading ? "Searching..." : (
                results.length > 0 
                ? <><span className="text-[#009341]">{results.length}</span> results for "{query}"</>
                : `No results for "${query}"`
              )
            ) : "All Eco Products"}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-[#009341]">
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filter</span>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-72 border border-gray-100 animate-pulse" />
            ))}
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Search size={48} className="text-[#009341]/20 mb-4" />
            <h2 className="text-lg font-semibold text-gray-700">No products found</h2>
            <p className="text-gray-400 text-sm mb-6">Try another keyword like "Bamboo" or "Cane"</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafafa] pt-28 flex items-center justify-center text-[#009341]">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
