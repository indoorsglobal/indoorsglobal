"use client";

import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

// Slick Carousel Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortraitSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const cdnVideos = [
    { id: 1, url: "https://res.cloudinary.com/demo/video/upload/q_auto,vc_h265/docs/landscape.mp4", title: "Summer Collection" },
    { id: 2, url: "https://media.w3.org/2010/05/sintel/trailer.mp4", title: "New Arrivals" },
    { id: 3, url: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Flash Sale" },
    { id: 4, url: "https://res.cloudinary.com/demo/video/upload/q_auto,vc_h265/docs/landscape.mp4", title: "Limited Edition" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-neutral-950 py-16 px-10 min-h-screen">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Navigation Buttons */}
        <button onClick={() => sliderRef.current?.slickPrev()} className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-all"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg></button>
        <button onClick={() => sliderRef.current?.slickNext()} className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-all"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></button>

        <Slider ref={sliderRef} {...settings}>
          {cdnVideos.map((video) => (
            <div key={video.id} className="px-3 outline-none">
              <div 
                className="relative aspect-[9/16] bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer group border border-white/10"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail/Static Video Preview */}
                <video className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" muted playsInline preload="metadata">
                  <source src={video.url} type="video/mp4" />
                </video>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white text-black p-4 rounded-full scale-90 group-hover:scale-100 transition-transform shadow-xl">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">{video.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* --- BIG ZOOM PLAY OVERLAY --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
            onClick={() => setSelectedVideo(null)} // Close when clicking background
          >
            {/* Close Button */}
            <button className="absolute top-8 right-8 text-white z-[60] bg-white/10 p-2 rounded-full hover:bg-white/20">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {/* The "Bada Hoke Play" Video Container */}
            <motion.div 
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative aspect-[9/16] h-[85vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the video itself
            >
              <video 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
                src={selectedVideo.url}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortraitSlider;