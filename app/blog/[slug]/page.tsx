"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, MapPin, Clock, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Mock Data (In production, move this to a shared constants/data.ts file)
// app/blog/[slug]/page.tsx mein isko replace karein
const WORKSHOP_DATA = [
  { id: 1, title: "Vertical Gardening for Urban Spaces", isCompleted: false, /* ... */ },
  { id: 2, title: "Advanced Bamboo Joinery & Structure", isCompleted: false, /* ... */ },
  { id: 3, title: "Permaculture Design Course (PDC)", isCompleted: false, /* ... */ },
  // YEH DONO ADD KARNA ZAROORI HAI:
  {
    id: 4,
    title: "The Zero Waste Kitchen Journey",
    category: "Lifestyle",
    date: "January 20, 2026",
    time: "Completed",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Looking back at our successful session on composting and plastic-free storage.",
    isCompleted: true,
    rating: 5.0,
    instructor: "Chef Megha"
  },
  {
    id: 5,
    title: "Solar DIY: Powering Your Workshop",
    category: "Renewable Energy",
    date: "February 14, 2026",
    time: "Completed",
    location: "Pune, India",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    excerpt: "Reviewing the technical blueprints for off-grid solar panel installations.",
    isCompleted: true,
    rating: 4.6,
    instructor: "Eng. Rahul"
  }
];

const slugify = (text: string) => {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};

export default function WorkshopDetail() {
 const params = useParams();
  const currentSlug = params.slug as string; // Check karein ki URL mein slug aa raha hai

  // Debug karne ke liye console log lagayein
  console.log("Current Slug from URL:", currentSlug);

  const workshop = WORKSHOP_DATA.find(w => slugify(w.title) === currentSlug);
  if (!workshop) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9f1]">
        <h2 className="text-2xl font-bold mb-4">Workshop Not Found</h2>
        <Link href="/" className="text-[#009341] underline">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9f1] text-[#283618] selection:bg-[#7baf40] selection:text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#009341] font-bold text-xs uppercase tracking-widest mb-8 hover:-translate-x-2 transition-transform"
        >
          <ArrowLeft size={18} /> Back to Workshops
        </button>

        <div className="rounded-3xl overflow-hidden h-[300px] md:h-[450px] mb-10 shadow-2xl">
          <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="bg-[#e9edc9] text-[#009341] px-4 py-1 rounded-full text-[10px] font-bold uppercase mb-4 inline-block">
              {workshop.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {workshop.title}
            </h1>
            
            <div className="prose prose-green max-w-none">
              <p className="text-lg text-[#a98467] italic leading-relaxed mb-8">
                {workshop.excerpt}
              </p>
              <h3 className="text-xl font-bold mb-4 text-[#283618]">Session Overview</h3>
              <p className="text-[#6c757d] mb-6 leading-relaxed">
                Join us for an immersive experience in <strong>{workshop.title}</strong>. 
                Under the guidance of {workshop.instructor}, participants will explore 
                sustainable techniques and practical applications suitable for modern living.
              </p>
              <ul className="space-y-4 mb-8">
                {["Hands-on Practical Training", "Resource Materials Provided", "Certification upon Completion"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#6c757d]">
                    <CheckCircle2 size={18} className="text-[#009341]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl border border-[#e9edc9] sticky top-24 shadow-sm">
              <h4 className="font-bold text-lg mb-6 border-b pb-4 text-[#009341]">Event Details</h4>
              <div className="space-y-5">
                <DetailItem icon={<Calendar size={18}/>} label="Date" value={workshop.date} />
                <DetailItem icon={<Clock size={18}/>} label="Timing" value={workshop.time} />
                <DetailItem icon={<MapPin size={18}/>} label="Location" value={workshop.location} />
                <DetailItem icon={<User size={18}/>} label="Instructor" value={workshop.instructor} />
              </div>
              
              {!workshop.isCompleted && (
                <button className="w-full bg-[#009341] hover:bg-[#7baf40] text-white font-bold py-4 rounded-xl mt-8 transition-all shadow-lg shadow-[#009341]/20 uppercase text-xs tracking-widest">
                  Secure Your Spot
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Detail Component
const DetailItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-[#009341]">{icon}</div>
    <div>
      <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider leading-none mb-1">{label}</p>
      <p className="text-sm font-medium text-[#283618]">{value}</p>
    </div>
  </div>
);
