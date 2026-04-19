"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/navbar/logo.png"

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 50ms is very fast! Usually 500ms-1000ms is better for branding
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center  h-screen bg-white">
      {/* Logo Container */}
      <div className="relative h-24 w-24 animate-pulse">
        <Image
          src={logo} // Path to your logo in the /public folder
          alt="Brand Logo"
          fill
          className="object-contain"
          priority // Ensures the logo loads immediately
        />
      </div>
      
      {/* Optional: Keep the text below the image */}
      <h1 className="mt-4 text-base tracking-wider">Indoors Global</h1>
    </div>
  );
}