"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { imageOrientationClass, isHorizontalImage } from "./lib";
import { useOnEscapePress } from "@primer/react";
export type SetSlideFn = (imageIndex: number) => void

const Lightbox = ({
    images,
    isOpen,
    close,
    onReady
}: {
    images: StaticImageData[],
    isOpen: boolean,
    close: () => void,
    onReady: ({ setSlide }: { setSlide: SetSlideFn }) => void
}) => {

    useOnEscapePress(close);

    const onSwiper = (swiper: SwiperClass) => {
        onReady({
            setSlide: function (imageIndex) {
                swiper.slideTo(imageIndex, 0);
            }
        });
    };

    return <>
        <div
            className="gallery-lightbox fixed top-0 w-full h-full overflow-hidden justify-center bg-orange-25 left-0 z-30 transition-all duration-500 backdrop-blur-sm"
            style={{
                opacity: `${isOpen ? "1" : "0"}`,
                visibility: `${isOpen ? "visible" : "hidden"}`
            }}
        >
            <button className="absolute right-0 p-5 z-50 drop-shadow-[0_0_4px_white]" onClick={close}>
                {/* Close icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#000"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    />
                </svg>
            </button>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="h-full w-full select-none"
                onSwiper={onSwiper}
                style={{
                    '--swiper-navigation-color': '#000'
                }}
            >
                {images.map((image: StaticImageData) => {
                    return (<SwiperSlide key={image.src}>
                        <Image src={image} alt="" width={0} height={0} sizes="100vw"
                            className={'w-full h-full max-h-full object-contain object-center ' + imageOrientationClass(image)}
                            loading="lazy" />
                    </SwiperSlide>)
                })}
            </Swiper >
        </div >
    </>
};
export default Lightbox;
