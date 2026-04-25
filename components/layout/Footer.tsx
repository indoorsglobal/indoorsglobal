import React from "react";
import Link from "next/link";
import logo from "@/public/navbar/logo2.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 font-serif">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-700">
        {/* Store Information */}
        <div>
          {/* <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Store Information
          </h3> */}
          <ul className="space-y-3 text-[15px] leading-relaxed">
            <li className="flex flex-col gap-2">
              <div className="w-30 h-30 max-lg:w-20 max-lg:h-20 mb-2">
                <Image src={logo} alt="" />
              </div>
              Indoors Global was created to bridge the gap between sustainable
              intention and everyday action. We believe people shouldn’t have to
              choose between convenience and responsibility.
            </li>
          </ul>

          {/* Manual SVG Icons to avoid Lucide Export Errors */}
          <a
            href="https://www.instagram.com/indoorsglobal/"
            className="flex gap-3 mt-8"
          >
            <SocialIcon label="Instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </SocialIcon>
            {/* <SocialIcon label="Twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </SocialIcon>
            <SocialIcon label="Instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </SocialIcon>
            <SocialIcon label="Pinterest">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12c.2 2.5 1.8 3.5 3 3.5 1.6 0 2.8-1.1 2.8-2.6 0-1.7-1.3-3-3.2-3-2.1 0-3.6 1.4-3.6 3.4 0 1.2.5 2.2 1.4 2.6.2.1.3.1.4-.2l.2-.7c0-.2 0-.3-.1-.5-.4-.5-.6-1.2-.6-2 0-2 1.6-3.8 3.8-3.8 2.1 0 3.6 1.4 3.6 3.4 0 2.2-1.2 4.1-3 4.1-.6 0-1.2-.3-1.4-.7l-.4 1.5c-.2.7-.8 1.8-1.2 2.5" />
            </SocialIcon> */}
          </a>
        </div>

        {/* Find Product */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[15px]">
            {["Home", "About", "Products", "Workshop", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:translate-x-1 transition-transform cursor-pointer hover:text-black"
              >
                <Link
                  href={
                    item === "Workshop" ? "/blog" : `/${item.toLowerCase()}`
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Your Account */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Categories
          </h3>
          <ul className="space-y-3 text-[15px]">
            {[
              "Home & Living",
              "Personal Lifestyle",
              "Storage & Utility",
              "Eco Bundle",
              "Gifting",
            ].map((item) => (
              <li
                key={item}
                className="hover:translate-x-1 transition-transform cursor-pointer hover:text-black"
              >
                <Link
                  // href={`categories/${item.toLowerCase().replace(" ", "-")}`}
                  href={`/products`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-xl font-medium mb-6 text-black tracking-tight">
            Address
          </h3>
          <ul className="space-y-1 text-[15px]">
            <li>
              1st Floor Shop No. 1 & 2 Royal Arcade Building Near Khamardih
              Thana, Shankar Nagar Raipur{" "}
            </li>

            <li className="pt-2">
              Call us:{" "}
              <span className="font-sans text-gray-500">+91 6268223779</span>
            </li>
            <li className="pt-2">
              Email :{" "}
              <span className="font-sans text-gray-500">
                Indoorsglobal123@gmail.com
              </span>
            </li>
            {/* <li>
              Email us:{" "}
              <span className="font-sans text-gray-500 underline underline-offset-4">
                admin@example.com
              </span>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[14px] text-gray-500">
          Copyright ©{" "}
          <span className="font-semibold italic">Indoors Global</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// Helper Components for Cleaner Code
const SocialIcon = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <button
    aria-label={label}
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </button>
);

const PaymentBadge = ({ name, color }: { name: string; color: string }) => (
  <div
    className={`border border-gray-200 px-3 py-1 rounded bg-gray-50 text-[11px] font-sans font-extrabold uppercase tracking-widest ${color}`}
  >
    {name}
  </div>
);

export default Footer;
