import React from "react";
import OurMission from "./OurMission";
import Quote from "./Quote";
import About from "./About";
import Features from "./Features";
import CTA from "@/components/homepage/CTA";

export default function page() {
  return (
    <div className="pt-[5rem] max-lg:pt-[4rem]">
      <OurMission />
      <About />
      <Quote />
      <Features />
      <CTA />
    </div>
  );
}
