
import Link from "next/link";
import PictureHeader from "@/app/_components/PictureHeader";
import Gallery from "@/app/_components/gallery";

import img_AKD01009_Poprawione_Szum from "@/public/galeria/rodzinne/AKD01009-Poprawione-Szum.jpg";
import img_AKD01207_Poprawione_Szum from "@/public/galeria/rodzinne/AKD01207-Poprawione-Szum.jpg";
import img_AKD01241_Poprawione_Szum from "@/public/galeria/rodzinne/AKD01241-Poprawione-Szum.jpg";
import img_AKD01265_Poprawione_Szum from "@/public/galeria/rodzinne/AKD01265-Poprawione-Szum.jpg";
import img_AKD01330 from "@/public/galeria/rodzinne/AKD01330.jpg";
import img_AKD04364 from "@/public/galeria/rodzinne/AKD04364.jpg";
import img_AKD05115 from "@/public/galeria/rodzinne/AKD05115.jpg";
import img_AKD05199 from "@/public/galeria/rodzinne/AKD05199.jpg";
import img_AKD05233a from "@/public/galeria/rodzinne/AKD05233a.jpg";
import img_AKD05255 from "@/public/galeria/rodzinne/AKD05255.jpg";
import img_AKD05870 from "@/public/galeria/rodzinne/AKD05870.jpg";
import img_AKD05912a from "@/public/galeria/rodzinne/AKD05912a.jpg";
import img_AKD05949a from "@/public/galeria/rodzinne/AKD05949a.jpg";
import img_AKD06563a from "@/public/galeria/rodzinne/AKD06563a.jpg";
import img_AKD06576 from "@/public/galeria/rodzinne/AKD06576.jpg";
import img_AKD06585 from "@/public/galeria/rodzinne/AKD06585.jpg";
import img_AKD06624 from "@/public/galeria/rodzinne/AKD06624.jpg";
import img_AKD06629 from "@/public/galeria/rodzinne/AKD06629.jpg";
import img_AKD06636 from "@/public/galeria/rodzinne/AKD06636.jpg";
import img_DSC00395 from "@/public/galeria/rodzinne/DSC00395.jpg";
import img_DSC01396 from "@/public/galeria/rodzinne/DSC01396.jpg";
import img_DSC01474 from "@/public/galeria/rodzinne/DSC01474.jpg";
import img_DSC02139 from "@/public/galeria/rodzinne/DSC02139.jpg";
import img_DSC02152 from "@/public/galeria/rodzinne/DSC02152.jpg";
import img_DSC02458 from "@/public/galeria/rodzinne/DSC02458.jpg";
import img_DSC05630 from "@/public/galeria/rodzinne/DSC05630.jpg";
import img_DSC06069 from "@/public/galeria/rodzinne/DSC06069.jpg";
import img_DSC06140 from "@/public/galeria/rodzinne/DSC06140.jpg";
import img_DSC06148 from "@/public/galeria/rodzinne/DSC06148.jpg";
import img_DSC06158 from "@/public/galeria/rodzinne/DSC06158.jpg";
import img_DSC08230a from "@/public/galeria/rodzinne/DSC08230a.jpg";
import img_DSC08242 from "@/public/galeria/rodzinne/DSC08242.jpg";
import img_DSC08250logo from "@/public/galeria/rodzinne/DSC08250logo.jpg";
import img_DSC08253logo from "@/public/galeria/rodzinne/DSC08253logo.jpg";
import img_DSC08265logo from "@/public/galeria/rodzinne/DSC08265logo.jpg";
import img_DSC08269logo from "@/public/galeria/rodzinne/DSC08269logo.jpg";

const galleryImages = [
    [img_AKD01009_Poprawione_Szum, img_AKD01207_Poprawione_Szum, img_AKD01241_Poprawione_Szum],
    [img_AKD01265_Poprawione_Szum, img_AKD01330, img_AKD04364],
    [img_AKD05115, img_AKD05199, img_AKD05233a],
    [img_AKD05255, img_AKD05870, img_AKD05912a],
    [img_AKD05949a, img_AKD06563a, img_AKD06576],
    [img_AKD06585, img_AKD06624, img_AKD06629],
    [img_AKD06636, img_DSC00395, img_DSC01396],
    [img_DSC01474, img_DSC02139, img_DSC02152],
    [img_DSC02458, img_DSC05630, img_DSC06069],
    [img_DSC06140, img_DSC06148, img_DSC06158],
    [img_DSC08230a, img_DSC08242, img_DSC08250logo],
    [img_DSC08253logo, img_DSC08265logo, img_DSC08269logo]
];

export default function Page() {
    return <>
        <PictureHeader src={img_DSC06148}>Fotografia rodzinna</PictureHeader>
        <article className="container py-14">
            <p></p>
            <div className="text-center">
                <Link href="/oferta" className="button">Oferta fotografii rodzinnej i dziecięcej</Link>
            </div>
        </article>
        <div className="">
            <Gallery images={galleryImages} />
        </div>
        <section className="container py-14 text-center">
            <Link href="/oferta" className="button">Oferta fotografii rodzinnej i dziecięcej</Link>
        </section>
    </>;
}