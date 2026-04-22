"use client"
import Image from "next/image";
import { Phone, MessageCircle, Clock, Package, CheckCircle, Truck, LayoutGrid, List } from "lucide-react";
import bulkImg from "@/public/products/Cane Baskets/cane-baskets6.jpeg"; 
import CTA from "@/components/homepage/CTA";
import { useState } from "react";
import Link from "next/link";

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

const productsData = [
  // Bamboo Essentials
  { id: 1, name: "Bamboo Bottle 450ml", img: bamboo_essentials1, category: "Bamboo Essentials" },
  { id: 2, name: "Pocket Comb", img: bamboo_essentials2, category: "Bamboo Essentials" },
  { id: 3, name: "Lice Comb", img: bamboo_essentials3, category: "Bamboo Essentials" },
  { id: 4, name: "Bamboo Toothbrush", img: bamboo_essentials4, category: "Bamboo Essentials" },
  { id: 5, name: "Bamboo Razor D", img: bamboo_essentials5, category: "Bamboo Essentials" },
  { id: 6, name: "Beard Comb", img: bamboo_essentials6, category: "Bamboo Essentials" },
  { id: 7, name: "Bamboo Cutlery Kit", img: bamboo_essentials7, category: "Bamboo Essentials" },
  { id: 8, name: "Rice Husk Bottle", img: bamboo_essentials8, category: "Bamboo Essentials" },
  { id: 9, name: "Bamboo Non-Terry Towel", img: bamboo_essentials9, category: "Bamboo Essentials" },

  // Cane Baskets
  { id: 10, name: "Boat Bag", img: cane_baskets1, category: "Cane Baskets" },
  { id: 11, name: "Storage Lid Box", img: cane_baskets2, category: "Cane Baskets" },
  { id: 12, name: "Beach Bag", img: cane_baskets3, category: "Cane Baskets" },
  { id: 13, name: "Shelf Basket", img: cane_baskets4, category: "Cane Baskets" },
  { id: 14, name: "Fruit Basket", img: cane_baskets5, category: "Cane Baskets" },
  { id: 15, name: "Hamper Bag", img: cane_baskets6, category: "Cane Baskets" },
  { id: 16, name: "Tiffin Bag", img: cane_baskets7, category: "Cane Baskets" },
  { id: 17, name: "Designer Jaali Bag", img: cane_baskets8, category: "Cane Baskets" },
  { id: 18, name: "Designer Boat Bag", img: cane_baskets9, category: "Cane Baskets" },

  // Rice Husk
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

  // ECO KITS
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

export default function BulkPage() {
  // Default category set to "Bamboo Essentials"
  const [activeCategory, setActiveCategory] = useState("Bamboo Essentials");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ["Bamboo Essentials", "Cane Baskets", "Rice Husk", "Eco-Friendly Kits", "All"];

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 font-sans text-[#2d3748]">

      {/* --- Filter & View Switcher Section --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b pb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? "bg-[#009341] text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? "bg-white shadow-sm text-[#009341]" : "text-gray-400"}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? "bg-white shadow-sm text-[#009341]" : "text-gray-400"}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Product Display Section --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
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
                className={`group border border-gray-100 rounded-xl p-4 bg-white hover:shadow-xl transition-all duration-300 ${
                  viewMode === 'list' ? "flex flex-row items-center gap-6" : "flex flex-col"
                }`}
              >
                <div className={`relative bg-gray-50 rounded-lg shrink-0 overflow-hidden ${
                  viewMode === 'list' ? "h-32 w-32" : "aspect-square mb-4"
                }`}>
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <p className="text-[10px] text-[#009341] uppercase tracking-[0.2em] mb-1 font-bold">
                    {product.category}
                  </p>
                  <h3 className={`font-bold text-gray-800 group-hover:text-[#009341] transition-colors ${
                    viewMode === 'list' ? "text-xl" : "text-sm mb-2"
                  }`}>
                    {product.name}
                  </h3>
                  
                  {viewMode === 'list' && (
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 max-w-xl">
                      Premium {product.name} crafted for sustainability and daily utility. Part of our eco-conscious collection.
                    </p>
                  )}
                </div>

                {viewMode === 'list' && (
                  <div className="ml-auto px-6 py-2 bg-[#009341] text-white text-sm font-bold rounded-lg hover:bg-[#007a36] transition-colors">
                    View Details
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* --- Hero Section (Custom Solutions) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span className="text-[#009341] font-bold tracking-widest uppercase text-sm">Custom Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] mt-4 leading-tight">
            Not looking for standard options?
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Let’s create something that fits your exact requirement. From unique combinations to personalized branding, we design kits that resonate with your audience.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/contact" className="bg-[#009341] hover:bg-[#007a36] text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg">
              Start Your Design
            </a>
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

      {/* --- Rest of the page components (Customization, Timeline, How it works) --- */}
      {/* (Code remains same for these sections as per your original file) */}
      
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
            <h3 className="text-xl font-bold">Why Go Custom?</h3>
            <p className="text-gray-600 font-medium italic text-sm">More personal & memorable. Fits your exact audience. No random products—only useful items.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 bg-[#009341] rounded-3xl text-white text-center my-20 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Occasion-Based Kits</h2>
        <p className=" mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Perfect for corporate events, team gifting, or personal celebrations. Create a better brand recall with gifts that people actually use every day.
        </p>
        <div className="flex justify-center gap-6 text-sm font-bold tracking-widest uppercase">
          <span className="border-b border-white pb-1">Memorable</span>
          <span className="border-b border-white pb-1">Practical</span>
          <span className="border-b border-white pb-1">Personal</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 mb-20">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {[
            { step: "01", title: "Share Idea", desc: "Share your idea or specific requirement with us." },
            { step: "02", title: "Suggestions", desc: "We suggest product combinations and pricing." },
            { step: "03", title: "Finalize", desc: "We finalize the design, branding, and quantity." },
            { step: "04", title: "Delivery", desc: "We handle production and ensure safe delivery." }
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <span className="text-7xl font-black text-gray-100 absolute -top-12 left-1/2 -translate-x-1/2 -z-10">{item.step}</span>
              <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <CTA/>
    </div>
  );
}
