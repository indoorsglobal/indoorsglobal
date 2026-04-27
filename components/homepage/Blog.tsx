"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link'; // Use Next.js Link for better performance
import { WORKSHOP_CONTENT } from "@/data/blogData"; // Importing your actual data

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - (clientWidth / 2) 
        : scrollLeft + (clientWidth / 2);
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-20 font-serif bg-white">
      {/* Header Section */}
      <div className="text-center mb-12 flex w-full justify-between max-lg:flex-col max-lg:items-start">
       <div className="text-left">
         <h2 className="text-5xl max-lg:text-3xl text-gray-800 mb-6 font-medium tracking-tight">Our Journal</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-sans">
          Curated inspiration for effortless living, styling guides, rituals, and sustainability essentials.
        </p>
       </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all active:scale-90"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all active:scale-90"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Blog Cards Slider */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {WORKSHOP_CONTENT.map((post) => (
          <div 
            key={post.id} 
            className="flex-shrink-0 w-[300px] md:w-[350px] snap-start group cursor-pointer"
          >
            <Link href={`/blog/${post.slug}`}>
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-[2rem] bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Category Tag */}
                <div className="absolute top-4 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-sans font-bold text-gray-700">
                  {post.category}
                </div>
              </div>
              
              {/* Blog Metadata */}
              <p className="text-sm font-sans text-gray-400 mb-2">{post.date}</p>
              <h3 className="text-xl text-gray-800 leading-snug mb-4 line-clamp-2 group-hover:text-[#009341] transition-colors">
                {post.title}
              </h3>
              
              <span className="text-sm font-sans font-bold uppercase tracking-widest border-b pb-1  transition-all">
                Read more
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
