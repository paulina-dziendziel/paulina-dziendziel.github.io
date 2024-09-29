"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

import DSC04245 from '@/public/galeria/DSC04245.jpg'
import AKD03285 from '@/public/galeria/AKD03285.jpg'
const slides = [{
  "image": AKD03285,
  "position-x": "33%"
}, {
  "image": DSC04245,
  "position-x": "75%"
}]


const HomeSlider = () => {
  return (

    <Swiper
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{
        delay: 30000
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
      {slides.map((slide) => (
        <SwiperSlide key={slide.image.src}>
          <div className="h-screen w-full absolute left-0 top-0 z-10">
            <Image src={slide.image} alt="" fill={true} className="object-cover" placeholder="blur"
              style={{ "objectPosition": slide["position-x"] }}
              sizes="(min-width: 440px) 99.22vw, (min-width: 400px) 400px, (min-width: 360px) 360px, calc(50vw + 150px)" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default HomeSlider;
