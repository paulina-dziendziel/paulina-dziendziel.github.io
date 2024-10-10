
import Link from "next/link";
import PictureHeader from "@/app/_components/PictureHeader";
import Gallery from "@/app/_components/gallery";

import img_20240729_DSC04179_Poprawione_Szum from "@/public/galeria/sesje-dla-par/20240729-DSC04179-Poprawione-Szum.jpg";
import img_AKD07657 from "@/public/galeria/sesje-dla-par/AKD07657.jpg";
import img_AKD07712 from "@/public/galeria/sesje-dla-par/AKD07712.jpg";
import img_AKD07736 from "@/public/galeria/sesje-dla-par/AKD07736.jpg";
import img_AKD07745 from "@/public/galeria/sesje-dla-par/AKD07745.jpg";
import img_AKD07761 from "@/public/galeria/sesje-dla-par/AKD07761.jpg";
import img_AKD07813 from "@/public/galeria/sesje-dla-par/AKD07813.jpg";
import img_AKD07828 from "@/public/galeria/sesje-dla-par/AKD07828.jpg";
import img_AKD07867 from "@/public/galeria/sesje-dla-par/AKD07867.jpg";
import img_AKD07868 from "@/public/galeria/sesje-dla-par/AKD07868.jpg";
import img_AKD07893 from "@/public/galeria/sesje-dla-par/AKD07893.jpg";
import img_AKD07964 from "@/public/galeria/sesje-dla-par/AKD07964.jpg";
import img_AKD07993 from "@/public/galeria/sesje-dla-par/AKD07993.jpg";
import img_DSC04143 from "@/public/galeria/sesje-dla-par/DSC04143.jpg";
import img_DSC04177_Poprawione_Szum from "@/public/galeria/sesje-dla-par/DSC04177-Poprawione-Szum.jpg";
import img_DSC04245 from "@/public/galeria/sesje-dla-par/DSC04245.jpg";
import img_DSC04273 from "@/public/galeria/sesje-dla-par/DSC04273.jpg";
import img_DSC04321 from "@/public/galeria/sesje-dla-par/DSC04321.jpg";
import img_DSC04338 from "@/public/galeria/sesje-dla-par/DSC04338.jpg";
import img_DSC04371_Poprawione_Szum from "@/public/galeria/sesje-dla-par/DSC04371-Poprawione-Szum.jpg";
import img_DSC04386_Poprawione_Szum_2 from "@/public/galeria/sesje-dla-par/DSC04386-Poprawione-Szum-2.jpg";

const galleryImages = [
    [img_20240729_DSC04179_Poprawione_Szum, img_AKD07657, img_AKD07712],
    [img_AKD07736, img_AKD07745, img_AKD07761],
    [img_AKD07813, img_AKD07828, img_AKD07867],
    [img_AKD07868, img_AKD07893, img_AKD07964],
    [img_AKD07993, img_DSC04143, img_DSC04177_Poprawione_Szum],
    [img_DSC04245, img_DSC04273, img_DSC04321],
    [img_DSC04338, img_DSC04371_Poprawione_Szum, img_DSC04386_Poprawione_Szum_2]
];

export default function Page() {
    return <>
        <PictureHeader src={img_AKD07813}>Sesje dla par</PictureHeader>
        <article className="container py-14">
            <p></p>
            <div className="text-center">
                <Link href="/oferta" className="button">Oferta sesji zdjęciowych dla par</Link>
            </div>
        </article>
        <div className="">
            <Gallery images={galleryImages} />
        </div>
        <section className="container py-14 text-center">
            <Link href="/oferta" className="button">Oferta sesji zdjęciowych dla par</Link>
        </section>
    </>;
}