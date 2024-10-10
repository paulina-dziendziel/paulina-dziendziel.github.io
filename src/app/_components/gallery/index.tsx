
"use client";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Tiles from "./Tiles";
import Lightbox, { SetSlideFn } from "./Lightbox";
import { useState } from "react";

const Gallery = ({
    images
}: {
    images: StaticImageData[][]
}) => {
    const emptySetSlideFn: SetSlideFn = (slideIndex: number) => { }
    const [isOpen, setIsOpen] = useState(false);
    const [setSlideFn, setSetSlideFn] = useState<SetSlideFn>(() => emptySetSlideFn)
    const onLightboxReady = ({ setSlide }: { setSlide: SetSlideFn }) => {
        setSetSlideFn(() => setSlide);
    }
    const openLightbox = (slideIndex: number) => {
        setSlideFn(slideIndex);
        setIsOpen(true);
    }
    const close = () => { setIsOpen(false); }
    const open = () => { setIsOpen(true); }

    return (
        <>
            <Lightbox images={images.flat()} isOpen={isOpen} close={close} onReady={onLightboxReady} />
            <Tiles images={images} openLightbox={openLightbox} open={open} />

        </>
    );
};

export default Gallery;