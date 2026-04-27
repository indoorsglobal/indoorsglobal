"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/navbar/logo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const VideoCard = ({
  video,
  onSelect,
}: {
  video: { id: number; url: string; title: string };
  onSelect: (v: any) => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // ✅ FIX 7: tighter horizontal padding on mobile
    <div className="px-1.5 sm:px-3 outline-none">
      <div
        className="relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-white/10"
        onClick={() => onSelect(video)}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center z-0 bg-neutral-100 ${
            isLoading ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <Image
              src={logo}
              width={56}
              height={56}
              alt="Loading…"
              className="rounded-lg animate-pulse drop-shadow-lg"
            />
            <div className="w-16 h-0.5 bg-black/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black/50 rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={video.url} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-white/90 text-black p-3 sm:p-4 rounded-full scale-90 group-hover:scale-110 transition-transform shadow-xl">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortraitSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const cdnVideos = [
     {
      id: 1,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664330/InShot_20250912_135744159_hcnaws.mp4",
      title: "New Trends",
    },
       {
      id: 2,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664263/FINAL_REEL_INDOORS_GLOBAL_sfltqi.mp4",
      title: "Indoors Global",
    },
      {
      id: 3,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664288/Indoors_global_video_hgp9uu.mp4",
      title: "Modern Design",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664225/Indoors_global_raipur_uhtjnn.mp4",
      title: "Raipur Store",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664236/Indoors_global_1_aaqhmn.mp4",
      title: "Global Interior",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664252/Indoors_global_video_1_zwl0bx.mp4",
      title: "Showcase One",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664257/Indoors_global_hpijmt.mp4",
      title: "Highlight Reel",
    },
 
 
    {
      id: 8,
      url: "https://res.cloudinary.com/dohvllowg/video/upload/q_auto/f_auto/v1776664292/Bamboo_Flask-indoors_global_raipur-14.10.24_hdewmt.mp4",
      title: "Bamboo Collection",
    },
   
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true, // ✅ FIX: smoother touch swipe
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3.5 } },
      { breakpoint: 1024, settings: { slidesToShow: 2.5 } },
      { breakpoint: 640,  settings: { slidesToShow: 1.5 } }, 
      { breakpoint: 400,  settings: { slidesToShow: 1.2 } }, 
    ],
  };

  return (
    // ✅ FIX 1: responsive horizontal padding
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-10  bg-gray-100">

      {/* ✅ FIX 2: responsive headline */}
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
  <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-6 font-medium tracking-tight font-serif">
    Conscious Craft. Timeless Style.
  </h2>
  <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
    Curating a collection where intentional design meets enduring elegance. 
    Small-batch essentials for the thoughtful wardrobe.
  </p>
</div>

      {/* ✅ FIX 3: arrows use translate instead of negative px so they don't clip */}
      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-black transition-all hidden md:block"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-black transition-all hidden md:block"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <Slider ref={sliderRef} {...settings}>
          {cdnVideos.map((video) => (
            <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
          ))}
        </Slider>
      </div>

      {/* ✅ FIX 5 & 6: modal fully responsive with close button inside */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative flex flex-col max-h-[90vh] max-w-[95vw] w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ✅ FIX 6: close button inside modal, always reachable */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="self-end mb-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="aspect-[9/16] max-h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                  src={selectedVideo.url}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortraitSlider;
