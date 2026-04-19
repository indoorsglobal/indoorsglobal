import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const SustainableWhatsAppButton = () => {
  const phoneNumber = "6268223779"; 
  const message = encodeURIComponent("Hello! I'm interested in your sustainable products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-[#2fb35f] text-[#f4f1ea] rounded-2xl shadow-xl transition-all duration-300 hover:bg-[#3a5f48] hover:-translate-y-1 active:scale-95 group border border-[#f4f1ea]/10"
      aria-label="Order Sustainable Products on WhatsApp"
    >
      {/* Icon with Soft Glow */}
      <div className="relative flex items-center justify-center bg-[#f4f1ea] text-black p-2 rounded-xl">
        <FaWhatsapp size={24} />
      </div>

      {/* Text Label */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-[#f4f1ea]/80">
          Eco-Friendly
        </span>
        <span className="text-base font-semibold tracking-wide">
          Order via WhatsApp
        </span>
      </div>

      {/* Subtle Leaf/Organic Pulse */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8fb39d] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8fb39d]"></span>
      </span>
    </a>
  );
};

export default SustainableWhatsAppButton;