import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { fontHeader } from "@/app/fonts";
import { PropsWithChildren } from "react";

const PictureHeader = ({
    children,
    src
}: PropsWithChildren<{
    src: string | StaticImport
}>) => {
    return (
        <div className="h-[80vh] w-full relative">
            <Image src={src} alt=""
                fill={true} placeholder="blur" sizes="100vw"
                className="object-cover" />

            <div className="container text-white text-6xl md:text-8xl font-light absolute text-right bottom-10 right-0 left-0">
                <div className={fontHeader.className + ' pr-10'}>
                    {children}
                </div>

            </div>
        </div>
    );
};

export default PictureHeader;
