"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { Search, X, SlidersHorizontal, Leaf } from "lucide-react";
import { useRouter } from "next/navigation";

// ─── Mock product data ────────────────────────────────────────────────────────
// Replace this with your actual API / Sanity / DB call
const ALL_PRODUCTS = [
  { id: 1, name: "Bamboo Toothbrush", category: "Personal Lifestyle", price: 149, image: "/products/bamboo-toothbrush.jpg", tags: ["bamboo", "personal", "eco"] },
  { id: 2, name: "Bamboo Cutting Board", category: "Home & Living", price: 599, image: "/products/bamboo-board.jpg", tags: ["bamboo", "kitchen", "home"] },
  { id: 3, name: "Rice Husk Dinner Set", category: "Eco Bundle", price: 1299, image: "/products/dinner-set.jpg", tags: ["rice husk", "dinner", "bundle"] },
  { id: 4, name: "Jute Shopping Bag", category: "Storage & Utility", price: 249, image: "/products/jute-bag.jpg", tags: ["jute", "bag", "storage"] },
  { id: 5, name: "Plantable Seed Pen", category: "Personal Lifestyle", price: 99, image: "/products/seed-pen.jpg", tags: ["plantable", "stationery", "eco"] },
  { id: 6, name: "Eco Toiletry Kit", category: "Eco Bundle", price: 799, image: "/products/toiletry-kit.jpg", tags: ["toiletry", "kit", "bundle"] },
  { id: 7, name: "Bamboo Lunch Box", category: "Home & Living", price: 449, image: "/products/lunch-box.jpg", tags: ["bamboo", "lunch", "home"] },
  { id: 8, name: "Corporate Eco Kit", category: "Gifting", price: 1899, image: "/products/corporate-kit.jpg", tags: ["corporate", "gift", "eco"] },
  { id: 9, name: "Children Eco Kit", category: "Eco Bundle", price: 699, image: "/products/children-kit.jpg", tags: ["children", "kit", "bundle"] },
  { id: 10, name: "Hand Towel Set", category: "Eco Bundle", price: 499, image: "/products/towel-set.jpg", tags: ["towel", "bundle", "home"] },
  { id: 11, name: "Rice Husk Coffee Mug", category: "Home & Living", price: 299, image: "/products/rice-mug.jpg", tags: ["rice husk", "mug", "home"] },
  { id: 12, name: "Bamboo Phone Stand", category: "Personal Lifestyle", price: 349, image: "/products/phone-stand.jpg", tags: ["bamboo", "personal", "desk"] },
];

// ─── Search logic ─────────────────────────────────────────────────────────────
function searchProducts(query) {
  if (!query) return ALL_PRODUCTS;
  const q = query.toLowerCase();
  return ALL_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
  return (
    <NextLink
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-[#009341]/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image placeholder */}
      <div className="relative bg-[#f0faf3] h-48 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf size={48} className="text-[#009341]/20" />
        </div>
        {/* If you have real images: */}
        {/* <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
        <span className="absolute top-3 left-3 bg-white text-[#009341] text-[10px] font-bold uppercase px-2 py-1 rounded-full border border-[#009341]/20">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#009341] transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-base font-bold text-[#009341]">₹{product.price}</span>
          <button className="text-xs bg-[#009341] text-white px-3 py-1.5 rounded-lg hover:bg-[#007a36] transition-colors">
            View
          </button>
        </div>
      </div>
    </NextLink>
  );
}

// ─── Main page (wrapped in Suspense for useSearchParams) ──────────────────────
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
    // Simulate async fetch; replace with real API call
    const timer = setTimeout(() => {
      setResults(searchProducts(query));
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = inputValue.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Search bar at top of page */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm max-w-2xl">
            <Search size={20} className="text-[#009341] shrink-0" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search eco products..."
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

        {/* Results header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {query ? (
              <h1 className="text-xl font-bold text-gray-800">
                {loading ? "Searching..." : (
                  <>
                    {results.length > 0
                      ? <><span className="text-[#009341]">{results.length}</span> results for "<span className="italic">{query}</span>"</>
                      : <>No results for "<span className="italic">{query}</span>"</>
                    }
                  </>
                )}
              </h1>
            ) : (
              <h1 className="text-xl font-bold text-gray-800">All Products</h1>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filter</span>
          </div>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                <div className="h-48 bg-gray-100" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results grid */}
        {!loading && results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No results */}
        {!loading && results.length === 0 && query && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-[#f0faf3] flex items-center justify-center mb-4">
              <Search size={36} className="text-[#009341]/40" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">No products found</h2>
            <p className="text-gray-400 text-sm mb-6">Try searching with different keywords</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Bamboo", "Rice Husk", "Jute Bag", "Eco Bundle"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => router.push(`/search?q=${encodeURIComponent(tag)}`)}
                  className="text-sm bg-[#e8f5ec] text-[#009341] rounded-full px-4 py-2 hover:bg-[#009341] hover:text-white transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Empty state (no query) */}
        {!loading && !query && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ALL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
