"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Droplets, Wind } from 'lucide-react';

// --- IMAGE IMPORTS ---
import kits5 from "@/public/Indoor Global Kit/Hand Towel Set1.jpg"
import kits15 from "@/public/Indoor Global Kit/Hand Towel Set2.jpg"
import kits16 from "@/public/Indoor Global Kit/Hand Towel Set3.jpg"
import kits17 from "@/public/Indoor Global Kit/Hand Towel Set4.jpg"
import kits18 from "@/public/Indoor Global Kit/Hand Towel Set5.jpg"
// import kits19 from "@/public/Indoor Global Kit/Hand Towel Set6.jpg"
import kits20 from "@/public/Indoor Global Kit/Hand Towel Set7.jpg"
import kits21 from "@/public/Indoor Global Kit/Hand Towel Set8.jpg"
import kits22 from "@/public/Indoor Global Kit/Hand Towel Set9.jpg"
import kits23 from "@/public/Indoor Global Kit/Hand Towel Set10.jpg"
import kits24 from "@/public/Indoor Global Kit/Hand Towel Set11.jpg"

const productsData = [
  { 
    id: 36, 
    name: "Hand Towel Set 1", 
    description: "The Artisanal Collection. Two plush berry-red towels nested in a hand-coiled jute basket, blooming with a handcrafted burlap flower.", 
    img: kits5, 
    category: "Towel Kit" 
  },
  { 
    id: 46, 
    name: "Hand Towel Set 2", 
    description: "Oceanic comfort. A deep royal blue towel engineered for high-absorbency and a sophisticated, spa-like feel in your own home.", 
    img: kits15, 
    category: "Towel Kit" 
  },
  { 
    id: 47, 
    name: "Hand Towel Set 3", 
    description: "The Crimson Duo. A rolled set of vibrant red towels made from eco-conscious fibers that stay cloud-soft wash after wash.", 
    img: kits16, 
    category: "Towel Kit" 
  },
  { 
    id: 48, 
    name: "Hand Towel Set 4", 
    description: "Bold & Bright. A premium stack of berry-red cotton towels designed to add a pop of energy and artisanal warmth to your vanity.", 
    img: kits17, 
    category: "Towel Kit" 
  },
  { 
    id: 49, 
    name: "Hand Towel Set 5", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    img: kits18, 
    category: "Towel Kit" 
  },
  // { 
  //   id: 50, 
  //   name: "Hand Towel Set 6", 
  //   description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
  //   img: kits19, 
  //   category: "Towel Kit" 
  // },
  { 
    id: 51, 
    name: "Hand Towel Set 7", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    img: kits20, 
    category: "Towel Kit" 
  },
  { 
    id: 52, 
    name: "Hand Towel Set 8", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    img: kits21, 
    category: "Towel Kit" 
  },
  { 
    id: 53, 
    name: "Hand Towel Set 9", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    img: kits22, 
    category: "Towel Kit" 
  },
  { 
    id: 54, 
    name: "Hand Towel Set 10", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    img: kits23, 
    category: "Towel Kit" 
  },
  { 
    id: 55, 
    name: "Hand Towel Set 11", 
    description: "Tropical Refresh. A light teal, bamboo-blend towel that brings a cooling, coastal breeze to your daily self-care ritual.", 
    img: kits24, 
    category: "Towel Kit" 
  }
  
];

export default function TowelDetail() {
  const { slug } = useParams();

  const product = productsData.find((p) => {
    const generatedSlug = p.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') 
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return generatedSlug === slug;
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/categories/towel-kit" className="text-[#a3a393] mt-4 underline font-medium">
          Back to Towel Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24 font-sans text-[#444]">
      <Link href="/categories/towel-kit" className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition-colors w-fit">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
          <Image src={product.img} alt={product.name} fill priority className="object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-[#a3a393] uppercase tracking-[0.2em] text-xs font-bold mb-3">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">{product.name}</h1>
          
          <div className="flex flex-col gap-3 mb-8">
             <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                <Droplets size={18} /> Ultra Absorbent & Quick Dry
             </div>
             <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                <Wind size={18} /> Breathable Organic Bamboo Fibers
             </div>
             <p className="text-gray-600 leading-relaxed mt-2">{product.description}</p>
          </div>

          <div className="border-t border-b border-gray-100 py-8 mb-8 text-gray-600 leading-relaxed">
            <h4 className="font-bold text-gray-900 mb-2 italic">Product Quality:</h4>
            <p>
              This {product.name.toLowerCase()} is crafted from premium organic bamboo and cotton blends. Naturally anti-bacterial and incredibly soft on the skin, it’s the perfect sustainable upgrade for your bathroom.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex-1 bg-[#009341] hover:bg-[#7cb140] text-white px-8 py-4 rounded  transition-all flex items-center justify-center gap-2 font-medium">
              Request Quote / Order
            </Link>
            <button className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-50">
             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Care Instructions:</span>
             <p className="text-sm text-gray-500 mt-2">
               Machine wash cold with like colors. Avoid bleach to maintain fiber integrity and natural softness.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
