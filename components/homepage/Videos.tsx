"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/navbar/logo.png";
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
    <div className="pl-3 sm:pl-4 flex-none w-[72vw] sm:w-[42vw] md:w-[32vw] lg:w-[24vw] xl:w-[20vw]">
      <div
        className="relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-white/10"
        onClick={() => onSelect(video)}
      >
        {/* Loading skeleton */}
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

        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={video.url} type="video/mp4" />
        </video>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-white/90 text-black p-3 sm:p-4 rounded-full scale-90 group-hover:scale-110 transition-transform shadow-xl">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortraitSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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

  return (
    <div className="py-10 sm:py-16 bg-gray-100 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-6 font-medium tracking-tight font-serif">
          Conscious Craft. Timeless Style.
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
          Curating a collection where intentional design meets enduring
          elegance. Small-batch essentials for the thoughtful wardrobe.
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Prev button — desktop only */}
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10
            items-center justify-center w-10 h-10 rounded-full bg-white shadow-md
            text-gray-400 hover:text-black disabled:opacity-30 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button — desktop only */}
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10
            items-center justify-center w-10 h-10 rounded-full bg-white shadow-md
            text-gray-400 hover:text-black disabled:opacity-30 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex pl-4 sm:pl-6 lg:pl-10 pr-4">
            {cdnVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onSelect={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
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
