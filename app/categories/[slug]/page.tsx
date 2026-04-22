import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import { productsData } from "@/data/products";

// 1. Updated Type Definitions to match your actual data
interface PageProps {
  params: Promise<{ slug: string }>;
}

interface Product {
  id: number;
  name: string;
  category: string;
  img: string | StaticImageData; // Accepts both URLs and Static Imports
  description?: string;          // Optional field
}

// 2. Utility function
const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// 3. Dynamic Metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const title = slug.split("-").join(" ");
  return {
    title: `${title.charAt(0).toUpperCase() + title.slice(1)} | My Store`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // 4. Filtering with proper type casting
  const filteredProducts = (productsData as Product[]).filter(
    (product) => product.category.toLowerCase() === slug.toLowerCase()
  );

  const categoryTitle = slug.split("-").join(" ");

  if (filteredProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 text-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-400">
          No products found in "{categoryTitle}"
        </h1>
        <NextLink href="/" className="mt-4 inline-block text-blue-600 underline">
          Back to Home
        </NextLink>
      </div>
    );
  }

  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 font-sans">
        
        <header className="mb-12">
          <h1 className="text-3xl font-serif md:text-4xl font-bold text-[#1a202c] capitalize tracking-tight">
            {categoryTitle}
          </h1>
          <p className="text-gray-500 italic mt-1 text-lg border-l-2 border-gray-200 pl-4">
            Curated Personal Care - Sustainable & Organic
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <NextLink
              key={product.id}
              href={`/products/${createSlug(product.name)}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#f7f8fa] mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#2d3748] leading-tight group-hover:text-black transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-2 flex items-center gap-1 group-hover:text-[#009341] transition-colors">
                  VIEW DETAILS 
                  <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-5px] group-hover:translate-x-0">
                    →
                  </span>
                </p>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </main>
  );
}
