"use client";

import React, { useState, useEffect, ReactNode } from "react";
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
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { WORKSHOP_CONTENT } from "@/data/blogData";
import Image from "next/image";

// --- Interfaces ---
// Add this import at the top if it's not there
import { StaticImageData } from "next/image";

interface Workshop {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  // Update this line to allow both URL strings and imported Image objects
  image: string | StaticImageData; 
  excerpt: string;
  isCompleted: boolean;
  rating: number;
  instructor: string;
}

interface SidebarProps {
  title: string;
  children: ReactNode;
}

// --- Sub-Components ---
const SidebarWrapper = ({ title, children }: SidebarProps) => (
  <div className="bg-white p-8 rounded-lg border border-[#e9edc9] mb-10 shadow-sm">
    <h4 className="font-serif font-bold text-[#283618] text-xl mb-6 flex items-center gap-2">
      <div className="w-2 h-8 bg-[#009341]"></div> {title}
    </h4>
    {children}
  </div>
);

export default function WorkshopPortal() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWorkshop, setActiveWorkshop] = useState<Workshop | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Sorting: Upcoming first, then Completed
    const sorted = [...WORKSHOP_CONTENT].sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted),
    );
    setWorkshops(sorted);
  }, []);

  const openEnquiry = (ws: Workshop) => {
    setActiveWorkshop(ws);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Request sent for ${activeWorkshop?.title}! We will contact you at ${formData.email}.`,
    );
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
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
            <a href="#" className="text-[#009341]">
              Upcoming
            </a>
            <a href="#" className="hover:text-[#009341] transition-colors">
              Past Events
            </a>
            <a href="#" className="hover:text-[#009341] transition-colors">
              Resources
            </a>
          </div>
          <button className="bg-[#009341] hover:bg-[#7baf40] text-white px-6 py-2 rounded-full text-xs font-bold transition-all">
            REGISTER NOW
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          {/* <h2 className="text-[#009341] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            Skill Development
          </h2> */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Build a Sustainable Future Together
          </h1>
          <p className="text-lg text-gray-500 italic">
            Check out our upcoming sessions below. For completed workshops, feel
            free to explore the summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- Workshop List --- */}
          <main className="lg:col-span-8">
            <div className="space-y-12">
              {workshops.map((ws) => (
                <div
                  key={ws.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e9edc9]/60"
                >
                  <div className="grid grid-cols-1 md:grid-cols-1 h-full">
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-64 lg:h-110">
                      <Image
                        src={ws.image}
                        alt={ws.title}
                        fill // This replaces w-full h-full
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div
                        className={`absolute text-green-600 top-4 left-4 z-10 ...`}
                      >
                        {ws.isCompleted ? "Finished" : "Upcoming"}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#f8f9f1] text-[#009341] px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-[#009341]/20">
                          {ws.category}
                        </span>
                        {/* <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill={i < Math.floor(ws.rating) ? "currentColor" : "none"} stroke={i < Math.floor(ws.rating) ? "none" : "currentColor"} />
                          ))}
                        </div> */}
                      </div>
                      <div className="grid grid-cols-2 gap-y-2 mb-6">
                        <div className="flex items-center gap-2 text-xs text-[#a98467] font-medium">
                          <Calendar size={14} className="text-[#009341]" />{" "}
                          {ws.date}
                        </div>
                        {/* <div className="flex items-center gap-2 text-xs text-[#a98467] font-medium">
                          <MapPin size={14} className="text-[#009341]" /> {ws.location}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#a98467] font-medium">
                          <Clock size={14} className="text-[#009341]" /> {ws.time}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#a98467] font-medium">
                          <User size={14} className="text-[#009341]" /> {ws.instructor}
                        </div> */}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#283618] mb-3 group-hover:text-[#009341] transition-colors leading-tight">
                        {ws.isCompleted ? (
                          <Link href={`/blog/${ws.slug}`}>{ws.title}</Link>
                        ) : (
                          <span>{ws.title}</span>
                        )}
                      </h3>

                      <p className="text-sm text-[#6c757d] mb-8 leading-relaxed">
                        {ws.excerpt}
                      </p>

                      <div className="mt-auto">
                        {ws.isCompleted ? (
                          <Link
                            href={`/blog/${ws.slug}`}
                            className="flex items-center gap-2 text-[#009341] font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform"
                          >
                            Read Full Summary <ArrowRight size={18} />
                          </Link>
                        ) : (
                          <button
                            onClick={() => openEnquiry(ws)}
                            className="w-full md:w-auto bg-[#009341] hover:bg-[#7baf40] text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-[0.15em] shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                          >
                            <MessageCircle size={18} /> Enquiry Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* --- Sidebar --- */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="bg-white p-4 rounded-xl border border-[#e9edc9] mb-10 flex items-center shadow-sm focus-within:ring-2 focus-within:ring-[#009341]/20 transition-all">
                <Search size={20} className="text-[#a98467] ml-2" />
                <input
                  type="text"
                  placeholder="Search sessions..."
                  className="w-full p-2 outline-none text-sm bg-transparent"
                />
              </div>

              <SidebarWrapper title="Workshop Tracks">
                <div className="space-y-4">
                  {[
                    { n: "Kids Activity", c: 1 },
                    { n: "Community", c: 1 },
                    { n: "Awareness", c: 0 },
                    { n: "Eco-friendly", c: 0 },
                  ].map((track) => (
                    <div
                      key={track.n}
                      className="flex justify-between items-center group cursor-pointer hover:bg-[#f8f9f1] p-2 rounded transition-colors"
                    >
                      <span className="text-sm font-medium group-hover:text-[#009341]">
                        {track.n}
                      </span>
                      <span className="bg-[#e9edc9] text-[#283618] px-2 py-0.5 rounded text-[10px] font-bold">
                        {track.c}
                      </span>
                    </div>
                  ))}
                </div>
              </SidebarWrapper>

              <div className="bg-[#009341] p-8 text-center text-[#f8f9f1] rounded-2xl">
                <p className="italic font-serif text-lg mb-4">
                  "Sustainable products bend stronger than the oak that
                  resists."
                </p>
                <div className="text-[10px] tracking-[0.2em] font-bold uppercase">
                  — Indoors Global
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* --- Enquiry Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-[#283618]/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-[#009341]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#009341]">
                  Direct Enquiry
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#283618] mb-2">
                {activeWorkshop?.title}
              </h2>
              <p className="text-sm text-[#a98467] mb-8">
                Please fill in your details and our coordinator will reach out
                to you within 24 hours.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#009341] transition-colors"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#009341] transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#009341] transition-colors"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <textarea
                  placeholder="How did you hear about us?"
                  className="w-full bg-gray-50 p-4 text-sm outline-none focus:border-[#009341] h-24 rounded-xl mt-4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#009341] hover:bg-[#7baf40] text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#009341]/20 uppercase text-xs tracking-widest mt-4"
                >
                  Submit Enquiry Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
