"use client";

import { useState, useMemo, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { 
  LayoutGrid, 
  List, 
  ChevronDown, 
  MessageCircle, 
  Clock, 
  Package, 
  CheckCircle, 
  Truck 
} from 'lucide-react';
import { useParams } from 'next/navigation';
import CTA from "@/components/homepage/CTA";
import bulkImg from "@/public/products/Cane Baskets/cane-baskets6.jpeg"; 

// --- IMAGE IMPORTS ---
import bamboo_essentials1 from "@/public/products/Bamboo Essentials/bamboo-essentials1.jpeg"
import bamboo_essentials2 from "@/public/products/Bamboo Essentials/bamboo-essentials2.jpeg"
import bamboo_essentials3 from "@/public/products/Bamboo Essentials/bamboo-essentials3.jpeg"
import bamboo_essentials4 from "@/public/products/Bamboo Essentials/bamboo-essentials4.jpeg"
import bamboo_essentials5 from "@/public/products/Bamboo Essentials/bamboo-essentials5.jpeg"
import bamboo_essentials6 from "@/public/products/Bamboo Essentials/bamboo-essentials6.jpeg"
import bamboo_essentials7 from "@/public/products/Bamboo Essentials/bamboo-essentials7.jpeg"
import bamboo_essentials8 from "@/public/products/Bamboo Essentials/bamboo-essentials8.jpeg"
import bamboo_essentials9 from "@/public/products/Bamboo Essentials/bamboo-essentials9.jpeg"

import cane_baskets1 from "@/public/products/Cane Baskets/cane-baskets1.jpeg"
import cane_baskets2 from "@/public/products/Cane Baskets/cane-baskets2.jpeg"
import cane_baskets3 from "@/public/products/Cane Baskets/cane-baskets3.jpeg"
import cane_baskets4 from "@/public/products/Cane Baskets/cane-baskets4.jpeg"
import cane_baskets5 from "@/public/products/Cane Baskets/cane-baskets5.jpeg"
import cane_baskets6 from "@/public/products/Cane Baskets/cane-baskets6.jpeg"
import cane_baskets7 from "@/public/products/Cane Baskets/cane-baskets7.jpeg"
import cane_baskets8 from "@/public/products/Cane Baskets/cane-baskets8.jpeg"
import cane_baskets9 from "@/public/products/Cane Baskets/cane-baskets9.jpeg"

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

// --- TYPES & DATA ---
interface Product {
  id: number;
  name: string;
  category: string;
  img: string | StaticImageData;
}

const productsData: Product[] = [
  { id: 1, name: "Bamboo Bottle 450ml", img: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", img: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Lice Comb", img: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush", img: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", img: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Beard Comb", img: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", img: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Rice Husk Bottle", img: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", img: bamboo_essentials9, category: "Bamboo Essentials" },
  { id: 10, name: "Boat Bag", img: cane_baskets1, category: "Cane Baskets" },
  { id: 11, name: "Storage Lid Box", img: cane_baskets2, category: "Cane Baskets" },
  { id: 12, name: "Beach Bag", img: cane_baskets3, category: "Cane Baskets" },
  { id: 13, name: "Shelf Basket", img: cane_baskets4, category: "Cane Baskets" },
  { id: 14, name: "Fruit Basket", img: cane_baskets5, category: "Cane Baskets" },
  { id: 15, name: "Hamper Bag", img: cane_baskets6, category: "Cane Baskets" },
  { id: 16, name: "Tiffin Bag", img: cane_baskets7, category: "Cane Baskets" },
  { id: 17, name: "Designer Jaali Bag", img: cane_baskets8, category: "Cane Baskets" },
  { id: 18, name: "Designer Boat Bag", img: cane_baskets9, category: "Cane Baskets" },
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

const categories = [
  "All",
  "Bamboo Essentials",
  "Cane Baskets",
  "Rice Husk",
  "Eco-Friendly Kits"
];

// Helper to create URL slug from product name
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

export default function BulkPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // --- STATE ---
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // URL aware category setting
  useEffect(() => {
    if (slug) {
      const matchedCat = categories.find(c => c.toLowerCase().replace(/ /g, '-') === slug);
      if (matchedCat) setActiveCategory(matchedCat);
    }
  }, [slug]);

  // --- FILTER LOGIC ---
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return productsData;
    return productsData.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <main className="w-full bg-white pt-32 pb-20 font-sans text-[#2d3748]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a202c]">
            {activeCategory === "All" ? "Our Collection" : activeCategory}
          </h1>
          <p className="text-gray-500 italic mt-3 text-lg">
            Curated Sustainable Collection - Organic & Eco-Friendly
          </p>
        </header>

        {/* --- Toolbar / Filter Section --- */}
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

          {/* First Code Style Dropdown Filter */}
          <div className="relative w-full md:w-72">
            <label className="text-[10px] uppercase font-bold text-[#009341] absolute -top-2.5 left-3 bg-white px-1 z-10">
              Change Category
            </label>
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#009341] cursor-pointer shadow-sm"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* --- Products Display --- */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12" 
            : "flex flex-col gap-6"
        }>
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${createSlug(product.name)}`}
              className={`group transition-all border border-transparent hover:border-gray-100 rounded-2xl p-2 ${
                viewMode === 'list' 
                ? "flex flex-row items-center gap-8 border-gray-100 p-4" 
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

              <div className="flex-grow">
                {/* <p className="text-[10px] text-[#009341] uppercase tracking-[0.2em] font-bold">
                  {product.category}
                </p> */}
                <h3 className={`font-bold mt-1 text-[#1a202c] group-hover:text-[#009341] transition-colors ${
                  viewMode === 'list' ? "text-xl md:text-2xl" : "text-sm"
                }`}>
                  {product.name}
                </h3>
                {viewMode === 'list' && (
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2 max-w-xl">
                    Premium handcrafted {product.name} designed for an eco-conscious lifestyle.
                  </p>
                )}
                <p className="text-[12px] font-bold text-gray-400 group-hover:text-[#009341] mt-3 tracking-widest uppercase">
                  VIEW DETAILS
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No products found in this category.</p>
          </div>
        )}

        <hr className="my-24 border-gray-100" />

        {/* --- Hero Section (Custom Solutions) --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[#009341] font-bold tracking-widest uppercase text-sm">Custom Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] mt-4 leading-tight">
              Not looking for standard options?
            </h2>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Let’s create something that fits your exact requirement. From unique combinations to personalized branding, we design kits that resonate with your audience.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="bg-[#009341] hover:bg-[#007a36] text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg">
                Start Your Design
              </Link>
              <a href="https://wa.me/916268223779" className="border-2 border-[#25D366] text-[#25D366] px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle size={20} /> Share Your Idea
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-8 ring-gray-50">
            <Image 
              src={bulkImg} 
              alt="Custom Gifting Indoors Global" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* --- Features Section --- */}
      <div className="bg-[#f7f8fa] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Can Be Customized?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Product Combinations", desc: "Mix and match our eco-essentials to create your own unique kit." },
              { title: "Custom Packaging", desc: "Choose from Canvas/Jute bags, Baskets, or premium Boxes." },
              { title: "Branding", desc: "Logo placement on selected products for a professional branded feel." },
              { title: "Budget-Based Curation", desc: "We design high-quality combinations within your specific price range." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="text-[#009341] mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Logistics Section --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-b border-gray-100">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <Package className="mx-auto text-[#009341]" size={40} />
            <h3 className="text-xl font-bold">Minimum Order</h3>
            <p className="text-gray-600 font-medium">30–50 Units</p>
            <p className="text-gray-500 text-sm italic">Depends on requirement</p>
          </div>
          <div className="space-y-4">
            <Clock className="mx-auto text-[#009341]" size={40} />
            <h3 className="text-xl font-bold">Timeline</h3>
            <p className="text-gray-600 font-medium">Usually 7–15 Days</p>
            <p className="text-gray-500 text-sm italic">Depends on customization level</p>
          </div>
          <div className="space-y-4">
            <Truck className="mx-auto text-[#009341]" size={40} />
            <h3 className="text-xl font-bold">Safe Delivery</h3>
            <p className="text-gray-600 font-medium italic text-sm">We handle production and ensure safe doorstep delivery across regions.</p>
          </div>
        </div>
      </div>

      <CTA />
    </main>
  );
}
