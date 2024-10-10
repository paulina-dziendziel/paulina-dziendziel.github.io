import { StaticImageData } from "next/image";

export function isHorizontalImage(image: StaticImageData): boolean {
    return (image.width > image.height);
}

export function imageOrientationClass(image: StaticImageData): string {
    return isHorizontalImage(image) ? 'aspect-h' : 'aspect-v';
}

export function normalizeImageWidth(image: StaticImageData): number {
    return (isHorizontalImage(image) ? 2.25 : 1)
}

