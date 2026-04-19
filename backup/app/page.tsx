import About from "@/components/homepage/About";
import Blog from "@/components/homepage/Blog";
import Category from "@/components/homepage/Category";
import CTA from "@/components/homepage/CTA";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import React from "react";
import TestimonialSection from "../components/homepage/Testimonials";
import Hero1 from "@/components/homepage/Hero1";
import VideoSlider from "@/components/homepage/Videos";


export default function page() {
  return (
    <div className="max-lg:pt-[4rem] pt-[5rem]">
         <Hero1/>
      {/* <Hero /> */}
   
      <Category />
      <About />
      <Features />
      {/* <VideoSlider/> */}
      <TestimonialSection/>
      <Blog />
      <CTA />
    </div>
  );
}
