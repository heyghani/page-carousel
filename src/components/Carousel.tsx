"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";
import { Character } from "@/types/character";

interface CaraouselProps {
  characters: Character[];
}

const Carousel: React.FC<CaraouselProps> = ({ characters }) => {
  if (!characters.length) {
    return <div>No characters available.</div>;
  }

  return (
    <div className="container-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {characters.map((character, index) => (
          <SwiperSlide key={index} className="p-4">
            <Card character={character} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
