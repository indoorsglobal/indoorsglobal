import NextLink from 'next/link';
import { GrWorkshop } from 'react-icons/gr';

const AnimatedButton = () => {
  return (
    <NextLink
      href="/blog"
      className="group relative hidden sm:flex items-center gap-2 px-3 md:px-5 py-2 text-[13px] font-semibold uppercase tracking-wider text-[#009341] transition-all rounded-md overflow-hidden"
    >
      {/* SVG Border Layer 
          We use vector-effect="non-scaling-stroke" to keep the border width consistent 
      */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="6"
          fill="none"
          stroke="#009341"
          strokeWidth="1"
          className="
            transition-all duration-700 ease-in-out
            [stroke-dasharray:400] [stroke-dashoffset:400]
            group-hover:[stroke-dashoffset:0]
          "
        />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center gap-2">
        <GrWorkshop size={18} />
        <span className="hidden xl:inline">Workshop</span>
      </div>

      {/* Optional: Subtle background fade on hover */}
      <div className="absolute inset-0 bg-[#009341]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
    </NextLink>
  );
};

export default AnimatedButton;
