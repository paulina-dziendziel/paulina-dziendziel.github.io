"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoImg from '@/public/logo.png';
import { fontBody } from "@/app/fonts";

const TopBar = ({ toggle, isSidebarOpen }: { toggle: () => void, isSidebarOpen: boolean }) => {
    // update the size of the logo when the size of the screen changes
    // change between the logo and the button when the user scrolls
    const [logoSize, setLogoSize] = useState<number | null>(null);
    const [hasBackground, setHasBackground] = useState(false);
    const smallLogoSize = 80;
    const logoSizes = [
        [1536, 160],
        [1280, 140],
        [1024, 120],
        [768, 100],
        [0, smallLogoSize]
    ];

    const changeLogoSize = () => {
        const scrollThreshold = 50;
        const scrolled = window.scrollY > scrollThreshold;
        const logoSize = scrolled ? smallLogoSize : logoSizes.filter((n) => window.innerWidth > n[0])[0][1];
        setLogoSize(logoSize);
        setHasBackground(scrolled && !isSidebarOpen);
    };

    useLayoutEffect(() => {
        changeLogoSize();
    }, [isSidebarOpen]);

    useEffect(() => {
        window.addEventListener('scroll', changeLogoSize, { passive: true });
        window.addEventListener("resize", changeLogoSize, { passive: true });
        return () => {
            window.removeEventListener('scroll', changeLogoSize);
            window.removeEventListener('resize', changeLogoSize);
        };
    }, [isSidebarOpen]);

    return (
        <>
            <div className={(hasBackground ? "bg-black/60 backdrop-blur-sm" : "") + " w-full h-24 fixed top-0 z-20 transition duration-500"}>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Link href="/">
                            <Image
                                src={logoImg}
                                alt="Artekadry"
                                height={logoSize === null ? smallLogoSize : logoSize}
                                priority={true}
                                className={(logoSize === null ? "" : "") + (hasBackground ? " top-2" : " top-5") + " absolute z-30 transition-all duration-500"}
                            />
                        </Link>
                        <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                            </svg>
                        </button>
                        <ul className={fontBody.className + " hidden md:flex gap-x-6 text-white font-light"}>
                            <li><Link href="/o-mnie" className="uppercase hover:underline underline-offset-4">O mnie</Link></li>
                            <li><Link href="/galeria" className="uppercase hover:underline underline-offset-4">Galeria</Link></li>
                            <li><Link href="/oferta" className="uppercase hover:underline underline-offset-4">Oferta</Link></li>
                            <li><Link href="/kontakt" className="uppercase hover:underline underline-offset-4">Kontakt</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;