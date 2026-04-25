"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { 
  Calendar, 
  Search, 
  Leaf, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  X, 
  Star, 
  Clock, 
  User,
  Construction, // New icon for Coming Soon
  Timer
} from 'lucide-react';
import Link from 'next/link';

/**
 * BAMBOO WORKSHOP PORTAL - COMING SOON MODE
 * Colors: bg-[#009341] | hover:bg-[#7baf40]
 */

interface Workshop {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  excerpt: string;
  isCompleted: boolean;
  rating: number;
  instructor: string;
}

interface SidebarProps {
  title: string;
  children: ReactNode;
}

const SidebarWrapper = ({ title, children }: SidebarProps) => (
  <div className="bg-white p-8 rounded-lg border border-[#e9edc9] mb-10 shadow-sm">
    <h4 className="font-serif font-bold text-[#283618] text-xl mb-6 flex items-center gap-2">
      <div className="w-2 h-8 bg-[#009341]"></div> {title}
    </h4>
    {children}
  </div>
);

export default function ComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll notify you when we launch.`);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9f1] font-sans text-[#283618] selection:bg-[#7baf40] selection:text-white">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-[#e9edc9] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#009341] p-2 rounded-lg">
              <Leaf className="text-white" size={24} />
            </div>
            <span className="text-2xl font-serif font-black tracking-tighter text-[#283618]">
              ZEN<span className="text-[#009341]">WORKSHOPS</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest">
            <span className="text-gray-400 cursor-not-allowed">Upcoming</span>
            <span className="text-gray-400 cursor-not-allowed">Past Events</span>
            <span className="text-gray-400 cursor-not-allowed">Resources</span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#009341] hover:bg-[#7baf40] text-white px-6 py-2 rounded-full text-xs font-bold transition-all"
          >
            NOTIFY ME
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#e9edc9] px-4 py-1 rounded-full mb-6">
            <Timer size={14} className="text-[#009341]" />
            <span className="text-[#009341] font-bold text-[10px] uppercase tracking-widest">Coming Soon</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#283618] leading-tight mb-6">
            Our Learning Portal is <span className="text-[#009341]">Growing.</span>
          </h1>
          <p className="text-lg text-[#a98467] italic">
            We are curating world-class workshops on sustainability, bamboo architecture, and eco-living. 
            The portal will be live very soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 opacity-60">
          
          {/* --- Main Content Placeholder --- */}
          <main className="lg:col-span-8 relative">
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-20 bg-gradient-to-b from-transparent via-[#f8f9f1]/80 to-[#f8f9f1]">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-[#e9edc9] text-center max-w-sm transform -rotate-2">
                    <Construction size={48} className="text-[#009341] mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-bold mb-2">Under Construction</h3>
                    <p className="text-sm text-[#a98467] mb-6">We're currently planting the seeds for our first batch of sessions.</p>
                    {/* <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#009341] text-white px-6 py-2 rounded-lg text-xs font-bold w-full"
                    >
                        Get Early Access
                    </button> */}
                </div>
            </div>

            {/* Ghost/Skeleton UI to maintain layout */}
            <div className="space-y-12 blur-[2px] pointer-events-none select-none">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#e9edc9]/60 shadow-sm">
                  <div className="h-64 bg-gray-200 animate-pulse"></div>
                  <div className="p-8">
                    <div className="h-4 w-24 bg-gray-100 mb-4"></div>
                    <div className="h-8 w-3/4 bg-gray-100 mb-4"></div>
                    <div className="h-20 w-full bg-gray-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* --- Sidebar Placeholder --- */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="bg-white p-4 rounded-xl border border-[#e9edc9] mb-10 flex items-center opacity-50">
                <Search size={20} className="text-[#a98467] ml-2" />
                <input disabled type="text" placeholder="Search sessions..." className="w-full p-2 outline-none text-sm bg-transparent" />
              </div>

              <SidebarWrapper title="Workshop Tracks">
                <div className="space-y-4 opacity-50">
                  {['Permaculture', 'Bamboo Tech', 'Zero Waste'].map((track) => (
                    <div key={track} className="flex justify-between items-center p-2">
                      <span className="text-sm font-medium">{track}</span>
                      <span className="bg-[#e9edc9] px-2 py-0.5 rounded text-[10px] font-bold">...</span>
                    </div>
                  ))}
                </div>
              </SidebarWrapper>

             <div className="bg-[#009341] p-8 text-center text-[#f8f9f1]">
                <p className="italic font-serif text-lg mb-4">The Sustainable products bend stronger than the oak that resists.</p>
                <div className="text-[10px] tracking-[0.2em] font-bold uppercase">— indoors Global</div>
            </div>
            </div>
          </aside>
        </div>
      </div>

      {/* --- Notification Modal (Same UI as Enquiry) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#283618]/70 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors">
              <X size={24} />
            </button>
            <div className="p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-[#009341]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#009341]">Stay Updated</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#283618] mb-2">Join the Waitlist</h2>
              <p className="text-sm text-[#a98467] mb-8">Drop your email below and we'll send you an invite as soon as our workshop registrations open.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input required type="text" placeholder="Full Name" className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#009341]" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="Email Address" className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#009341]" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <button type="submit" className="w-full bg-[#009341] hover:bg-[#7baf40] text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#009341]/20 uppercase text-xs tracking-widest mt-4">
                  Notify Me At Launch
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
