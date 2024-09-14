import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <>
            <div className="w-full h-20 bg-black/20 fixed top-0 z-20">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                            </svg>
                        </button>
                        <ul className="hidden md:flex gap-x-6 text-white ">
                            <li><Link href="/o-mnie" className="uppercase">O mnie</Link></li>
                            <li><Link href="/galeria" className="uppercase">Galeria</Link></li>
                            <li><Link href="/oferta" className="uppercase">Oferta</Link></li>
                            <li><Link href="/kontakt" className="uppercase">Kontakt</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;