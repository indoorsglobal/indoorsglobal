"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortraitSlider = () => {
  const cdnVideos = [
    {
      id: 1,
      // Replace with your actual CDN URLs
      url: "https://res.cloudinary.com/demo/video/upload/q_auto,vc_h265/docs/landscape.mp4",
      poster: "https://res.cloudinary.com/demo/video/upload/v1/docs/landscape.jpg",
      title: "Summer Collection",
    },
    {
      id: 2,
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4", 
      poster: "https://via.placeholder.com/1080x1920?text=Poster+2",
      title: "New Arrivals",
    },
    {
      id: 3,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://via.placeholder.com/1080x1920?text=Poster+3",
      title: "Flash Sale",
    }
  ];

  return (
    <div className="bg py-12 px-4">
      <div className="max-w-md mx-auto"> {/* Constrain width for portrait feel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
        >
          {cdnVideos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                
                {/* Text Overlay */}
                <div className="absolute bottom-10 left-6 right-6 z-10">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {video.title}
                  </h3>
                  <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                    Shop Now
                  </button>
                </div>

                {/* Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PortraitSlider;