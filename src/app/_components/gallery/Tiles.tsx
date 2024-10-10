"use client";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { imageOrientationClass, isHorizontalImage, normalizeImageWidth } from "./lib";

const Tiles = ({
    images,
    open,
    openLightbox
}: {
    images: StaticImageData[][],
    open: () => void,
    openLightbox: (imageIndex: number) => void
}) => {
    let indexes = { i: 0 };
    return images.map((rowImages: StaticImageData[], topIndex: number) => {
        const totalWidthNormalized = rowImages.map(normalizeImageWidth).reduce((acc, v) => acc + v);
        return (<div className="flex justify-center" key={topIndex}>
            {rowImages.map((image: StaticImageData) => {
                const onClick = function (index) { return () => openLightbox(index) }(indexes.i);
                indexes.i += 1;
                const imageVw = ((normalizeImageWidth(image) * 100) / totalWidthNormalized).toFixed(2) + 'vw';
                return (<div key={image.src} data-i={indexes} className={'tile ' + imageOrientationClass(image)} onClick={onClick}>
                    <Image src={image} alt="" fill={true} sizes={imageVw} className="object-cover" />
                </div>)
            })}
        </div>)
    });
};

export default Tiles;
