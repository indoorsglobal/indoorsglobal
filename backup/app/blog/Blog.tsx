import React, { ReactNode } from 'react';
import { 
  Calendar, 
  Search, 
  ChevronsRight, 
  Leaf 
} from 'lucide-react';

/**
 * BAMBOO ZEN PALETTE:
 * Primary (Bamboo Green): #606c38
 * Secondary (Young Leaf): #a98467
 * Background (Soft Paper): #f8f9f1
 * Dark (Deep Forest): #283618
 * Accent (Fresh Sprout): #adc178
 */

// --- Types ---
interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  views: string;
  comments: string;
  image: string;
  excerpt: string;
}

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
}

interface BlogCardProps {
  post: Post;
}

// --- Mock Data ---
const posts: Post[] = [
  {
    id: 1,
    title: "The Art of Sustainable Architecture",
    category: "Design",
    date: "March 12, 2024",
    views: "1.2k",
    comments: "8",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    excerpt: "Exploring how natural fibers and organic structures are redefining the modern workspace."
  },
  {
    id: 2,
    title: "Minimalism in the Modern Garden",
    category: "Lifestyle",
    date: "April 05, 2024",
    views: "940",
    comments: "15",
    image: "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Creating a sanctuary within your home doesn't require vast space, only the right intention."
  },
  {
    id: 3,
    title: "Eco-Friendly Tech Solutions",
    category: "Innovation",
    date: "May 22, 2024",
    views: "3.5k",
    comments: "42",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    excerpt: "How the next generation of hardware is moving toward biodegradable components."
  },
  {
    id: 4,
    title: "Breath: The Secret to Focus",
    category: "Wellness",
    date: "June 01, 2024",
    views: "820",
    comments: "11",
    image: "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Integrating mindfulness into your daily workflow can increase productivity."
  }
];

// --- Sub-Components ---

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_-10px_rgba(40,54,24,0.1)] border-l-4 border-[#adc178] mb-10">
    <div className="flex items-center mb-6">
      <h4 className="font-serif italic font-bold text-[#283618] text-lg">{title}</h4>
    </div>
    {children}
  </div>
);

const BlogCard = ({ post }: BlogCardProps) => (
  <div className="group bg-white rounded-sm overflow-hidden border border-[#e9edc9]/50 hover:border-[#adc178] transition-all duration-500 flex flex-col h-full">
    <div className="relative overflow-hidden aspect-[16/10]">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[#283618] text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest border border-[#adc178]">
        {post.category}
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <div className="flex flex-wrap items-center gap-4 text-[#a98467] text-[12px] mb-4 font-medium italic">
        <span className="flex items-center gap-1.5">
          <Calendar size={13} /> {post.date}
        </span>
      </div>

      <h3 className="text-2xl font-serif font-bold text-[#283618] mb-4 group-hover:text-[#606c38] transition-colors leading-snug">
        {post.title}
      </h3>
      
      <p className="text-[#6c757d] text-sm leading-relaxed mb-8">
        {post.excerpt}
      </p>

      <div className="mt-auto">
        <button className="text-[#606c38] font-bold text-sm flex items-center gap-2 group/btn hover:gap-4 transition-all">
          CONTINUE READING <Leaf size={16} className="text-[#adc178]" />
        </button>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function BambooBlog() {
  return (
    <div className="min-h-screen pt-12 font-sans text-[#283618] bg-[#f8f9f1]">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Blog Grid */}
          <main className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-16">
              <button className="w-10 h-10 border-b-2 border-[#606c38] text-[#283618] font-bold">01</button>
              <button className="w-10 h-10 text-[#a98467] font-bold hover:text-[#606c38] transition-colors">02</button>
              <button className="w-10 h-10 text-[#a98467] font-bold hover:text-[#606c38] transition-colors">03</button>
              <button className="ml-4 p-2 bg-[#606c38] text-white rounded-full">
                <ChevronsRight size={18} />
              </button>
            </div>
          </main>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4">
            
            {/* Search Widget */}
            <div className="bg-white p-2 rounded-full border border-[#e9edc9] mb-10 flex items-center px-6 shadow-sm group focus-within:border-[#adc178] transition-all">
              <input 
                type="text" 
                placeholder="Search the journal..." 
                className="w-full py-3 outline-none text-sm text-[#283618] bg-transparent placeholder-[#a98467]/50 italic" 
              />
              <Search size={18} className="text-[#a98467] group-hover:text-[#606c38]" />
            </div>

            <SidebarSection title="Collections">
              <ul className="space-y-5">
                {['Sustainability', 'Home Decor', 'Mindfulness', 'Architecture'].map((cat) => (
                  <li key={cat} className="flex justify-between items-center text-sm font-semibold text-[#283618] hover:text-[#606c38] cursor-pointer group transition-colors">
                    <span className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#adc178]"></div> {cat}
                    </span>
                    <span className="text-[#a98467] text-[11px] opacity-60">12</span>
                  </li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection title="Tags">
              <div className="flex flex-wrap gap-3">
                {['Organic', 'Eco', 'Minimal', 'Zen', 'Timber', 'Growth'].map(tag => (
                  <span key={tag} className="bg-[#f8f9f1] border border-[#e9edc9] text-[#606c38] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#606c38] hover:text-white cursor-pointer transition-all">
                    #{tag}
                  </span>
                ))}
              </div>
            </SidebarSection>

            {/* Quote Widget */}
            <div className="bg-[#a3a393] p-8 text-center text-[#f8f9f1]">
                <p className="italic font-serif text-lg mb-4">The Sustainable products bend stronger than the oak that resists.</p>
                <div className="text-[10px] tracking-[0.2em] font-bold uppercase">— indoors Global</div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}