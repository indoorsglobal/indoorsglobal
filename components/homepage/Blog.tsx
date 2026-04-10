"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blog1 from "@/public/homepage/blog1.jpg"

const blogPosts = [
  {
    title: "Eco-Conscious Gifting Ideas for Sustainable Living",
    image: blog1, 
    link: "#"
  },
  {
    title: "Eco-Friendly Decor Ideas: Celebrate Sustainably",
    image: blog1,
    link: "#"
  },
  {
    title: "Minimalist Craft: Transforming Utilities into Art",
    image: blog1,
    link: "#"
  },
  {
    title: "Handmade & Green: The Future of Interior Utilities",
    image: blog1,
    link: "#"
  },
  {
    title: "Styling Your Home with Sustainable Decor Essentials",
    image: blog1,
    link: "#"
  }
];

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
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all active:scale-90"
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
        {blogPosts.map((post, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[300px] md:w-[350px] snap-start group cursor-pointer"
          >
            {/* Image Container with Rounded Corners */}
            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-[2rem] bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Blog Metadata */}
            <h3 className="text-xl text-gray-800 leading-snug mb-4 line-clamp-2 hover:text-[#a3a895] transition-colors">
              {post.title}
            </h3>
            <a 
              href={post.link} 
              className="text-sm font-sans font-bold uppercase tracking-widest text-black border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;