import Image from "next/image";
import { Settings, Box, Palette, BadgePercent, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import customImg from "@/public/products/Cane Baskets/cane-baskets2.jpeg"; // Example: Storage Lid Box/Basket
import Link from "next/link";

export default function CustomPage() {
  return (
    <div className="pt-32 pb-20 font-sans text-[#2d3748]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl order-2 md:order-1">
          <Image 
            src={customImg} 
            alt="Customized Gifting Indoors Global" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-[#009341] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Bespoke Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] leading-tight">
            Not looking for standard options?
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Let’s create something that fits your exact requirement. From product curation to custom packaging, we design kits that reflect your brand or occasion perfectly.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href={"/contact"} className="bg-[#009341] hover:bg-[#7baf40] text-white px-10 py-4 rounded-md font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Start Your Design <ArrowRight size={18} />
            </Link>
            <button className="bg-[#25D366]/10 text-[#25D366] px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-all">
              <MessageCircle size={20} /> WhatsApp Expert
            </button>
          </div>
        </div>
      </div>

      {/* What Can Be Customized */}
      <div className="bg-[#fcfcfc] border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a202c]">What Can Be Customized?</h2>
            <p className="text-gray-500 mt-2">Every detail, tailored to your vision.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Box className="text-[#009341]" />, title: "Product Combinations", desc: "Mix and match any items to create your unique kit." },
              { icon: <Palette className="text-[#009341]" />, title: "Packaging Styles", desc: "Choose from Canvas, Jute bags, Baskets, or Custom Boxes." },
              { icon: <Settings className="text-[#009341]" />, title: "Branding & Logos", desc: "Logo placement on selected products for brand recall." },
              { icon: <BadgePercent className="text-[#009341]" />, title: "Budget Curation", desc: "We design and suggest kits within your specific price range." },
              { icon: <Calendar className="text-[#009341]" />, title: "Occasion Focused", desc: "Specially curated for events, team welcomes, or personal gifting." },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#009341]/30 transition-all group">
                <div className="mb-4 p-3 bg-[#f7f8fa] w-fit rounded-lg group-hover:bg-[#009341]/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Requests & Process */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#009341]"></span> Popular Custom Requests
          </h2>
          <ul className="space-y-4">
            {[
              "Summer Kits (Bamboo bottle + Towel + Essentials)",
              "Employee Welcome Kits",
              "Event / Workshop Kits",
              "Minimal Daily-use Kits"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#009341]"></div>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#1a202c]">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Minimum Order</p>
                <p className="text-lg font-bold">30–50 Units</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Timeline</p>
                <p className="text-lg font-bold">7–15 Days</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="space-y-8 relative">
            {[
              { t: "Share Your Idea", d: "Tell us about your requirement or budget." },
              { t: "Curation & Pricing", d: "We suggest combinations and provide a quote." },
              { t: "Finalize & Design", d: "Confirm the quantity and branding details." },
              { t: "Seamless Delivery", d: "We handle the production and reach you on time." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a202c]">{step.t}</h4>
                  <p className="text-gray-500 text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Go Custom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="bg-[#1a202c] rounded-[2rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Why Go Custom?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "More Personal & Memorable",
              "Fits Your Exact Audience",
              "Only Useful Items",
              "Better Brand Recall"
            ].map((text, i) => (
              <div key={i} className="space-y-3">
                <div className="h-1 w-12 bg-[#009341] mx-auto"></div>
                <p className="font-medium text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
