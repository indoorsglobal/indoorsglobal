"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SortDropdown({ currentSort }: { currentSort: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    // Isse URL change hoga aur Server Component auto-refresh hoga
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sort:</span>
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="bg-[#f7f8fa] border-none rounded-lg px-4 py-2 text-sm font-bold text-[#2d3748] focus:ring-2 focus:ring-[#009341] outline-none cursor-pointer transition-all"
      >
        <option value="default">Featured</option>
        <option value="name-asc">Alphabetical (A-Z)</option>
        <option value="name-desc">Alphabetical (Z-A)</option>
      </select>
    </div>
  );
}