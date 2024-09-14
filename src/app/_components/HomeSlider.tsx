"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

import AKD03432 from '@/public/galeria/AKD03432.jpg'
import DSC04245 from '@/public/galeria/DSC04245.jpg'

const images = [AKD03432, DSC04245]


const HomeSlider = () => {
  return (

    <Swiper
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{
        delay: 5000
      }}
      loop={true}
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      className="h-screen w-full z-10"
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.src}>
          <div className="h-screen w-full absolute left-0 top-0 z-10">
            <Image src={image} alt="" fill={true} className="object-cover object-center" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default HomeSlider;
