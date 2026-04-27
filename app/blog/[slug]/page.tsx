"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Calendar, 
  MapPin, 
  User, 
  ArrowLeft, 
  CheckCircle2, 
  Leaf, 
  Share2 
} from 'lucide-react';
import Link from 'next/link';
import { WORKSHOP_CONTENT } from '@/data/blogData';

export default function WorkshopDetail() {
  const params = useParams();
  const router = useRouter();
  const currentSlug = params.slug as string;

  // Since WORKSHOP_CONTENT is now an Array, we find the item by slug
  const post = WORKSHOP_CONTENT.find(item => item.slug === currentSlug);

  // Fallback if the slug doesn't match
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9f1] text-[#283618] p-6 text-center">
        <Leaf className="text-[#009341] mb-6 animate-bounce" size={60} />
        <h2 className="text-3xl font-serif font-bold mb-2">Content Not Found</h2>
        <p className="text-[#a98467] mb-8">We couldn't find the workshop details for "{currentSlug}".</p>
        <Link href="/workshops" className="bg-[#009341] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#7baf40] transition-all">
          Return to Portal
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9f1] text-[#283618] selection:bg-[#7baf40] selection:text-white pb-20">
      
      {/* Top Banner with Navigation */}
      <div className="max-w-5xl mx-auto py-8 px-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#009341] font-bold text-xs uppercase tracking-[0.2em] mb-10 hover:-translate-x-2 transition-transform"
        >
          <ArrowLeft size={18} /> Back to Workshops
        </button>

        {/* Hero Section */}
        <div className="relative rounded-[2rem] overflow-hidden h-[350px] md:h-[550px] shadow-2xl mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#283618]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <span className="bg-[#7baf40] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Article */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl italic font-serif text-[#a98467] mb-8 leading-relaxed">
              "{post.subtitle}"
            </h2>
            
            <div className="prose prose-stone max-w-none">
              <p className="text-lg text-[#6c757d] leading-relaxed mb-12 first-letter:text-5xl first-letter:font-bold first-letter:text-[#009341] first-letter:mr-3 first-letter:float-left">
                {post.intro}
              </p>

            {post.sections.map((section: any, index: number) => (
  <div key={index} className="mb-12">
    <div className="flex items-center gap-4 mb-6">
      <div className="h-[2px] w-8 bg-[#009341]"></div>
      <h3 className="text-2xl font-serif font-bold text-[#283618] uppercase tracking-tight">
        {section.heading}
      </h3>
    </div>
    
    {section.content && (
      <p className="text-[#6c757d] leading-relaxed mb-6">{section.content}</p>
    )}

    {/* Use optional chaining and ensure points is an array before mapping */}
    {section.points && Array.isArray(section.points) && (
      <div className="grid grid-cols-1 gap-4">
        {section.points.map((point: string, pIdx: number) => (
          <div key={pIdx} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#e9edc9]/50 shadow-sm">
            <CheckCircle2 className="text-[#009341] mt-1 flex-shrink-0" size={20} />
            <span className="text-[#283618] font-medium">{point}</span>
          </div>
        ))}
      </div>
    )}
  </div>
))}

              {/* Closing Card */}
              <div className="bg-[#009341] p-10 rounded-[2.5rem] text-center text-white mt-16 shadow-xl relative overflow-hidden">
                <Leaf className="absolute -top-6 -right-6 text-white/10" size={150} />
                <p className="text-xl font-serif italic mb-6 relative z-10">
                  {post.closing}
                </p>
                <div className="h-1 w-20 bg-[#7baf40] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              <div className="bg-white p-8 rounded-3xl border border-[#e9edc9] shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#009341] mb-8 border-b pb-4">
                  Session Log
                </h4>
                <div className="space-y-6">
                  <MetaItem icon={<Calendar size={20}/>} label="Conducted On" value={post.date} />
                  <MetaItem icon={<User size={20}/>} label="Lead Instructor" value={post.instructor} />
                  <MetaItem icon={<MapPin size={20}/>} label="Venue" value={post.location || "Indoors Global Store"} />
                </div>
                
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: post.title, url: window.location.href });
                    } else {
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="w-full mt-10 flex items-center justify-center gap-2 bg-[#f8f9f1] hover:bg-[#e9edc9] text-[#283618] font-bold py-4 rounded-2xl transition-all border border-[#e9edc9]"
                >
                  <Share2 size={18} /> Share Insight
                </button>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#283618] to-[#009341] text-white">
                <h4 className="font-serif text-xl mb-4">Want to collaborate?</h4>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  We are always looking for creators and educators to share meaningful habits.
                </p>
                <Link href="/contact" className="text-white font-bold text-xs underline underline-offset-8 tracking-widest uppercase hover:text-[#7baf40] transition-colors">
                  Contact Us
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// Helper Meta Component
const MetaItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="bg-[#f8f9f1] p-3 rounded-xl text-[#009341]">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-black text-gray-400 tracking-tighter mb-0.5">{label}</p>
      <p className="text-sm font-bold text-[#283618]">{value}</p>
    </div>
  </div>
);
