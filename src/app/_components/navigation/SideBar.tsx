import Link from "next/link";
import Image from "next/image";
import logoImg from '@/public/logo.png';

const Sidebar = ({
    isOpen,
    toggle,
}: {
    isOpen: boolean;
    toggle: () => void;
}): JSX.Element => {
    return (
        <>
            <div
                className="fixed w-full h-full overflow-hidden justify-center bg-black/80 grid pt-[120px] left-0 z-30 transition-all duration-500 backdrop-blur-sm"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    {/* Close icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#fff"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        />
                    </svg>
                </button>
                <div>
                    <Link href="/">
                        <Image
                            src={logoImg}
                            alt="Artekadry"
                            height={100}
                            className="pb-14"
                        />
                    </Link>
                    <ul className="text-center leading-[3] text-xl text-white">
                        <li><Link href="/o-mnie" className="uppercase" onClick={toggle}>O mnie</Link></li>
                        <li><Link href="/#galeria" className="uppercase" onClick={toggle}>Galeria</Link></li>
                        <li><Link href="/oferta" className="uppercase" onClick={toggle}>Oferta</Link></li>
                        <li><Link href="/kontakt" className="uppercase" onClick={toggle}>Kontakt</Link></li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Sidebar;