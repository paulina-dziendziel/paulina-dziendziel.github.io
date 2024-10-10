
import Link from "next/link";
import PictureHeader from "@/app/_components/PictureHeader";
import Gallery from "@/app/_components/gallery";

import img_AKD06054 from "@/public/galeria/chrzest-komunia/AKD06054.jpg";
import img_AKD06092 from "@/public/galeria/chrzest-komunia/AKD06092.jpg";
import img_Chrzest_Aurelki_10 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-10.jpg";
import img_Chrzest_Aurelki_102 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-102.jpg";
import img_Chrzest_Aurelki_108 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-108.jpg";
import img_Chrzest_Aurelki_13 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-13.jpg";
import img_Chrzest_Aurelki_20 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-20.jpg";
import img_Chrzest_Aurelki_22 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-22.jpg";
import img_Chrzest_Aurelki_24 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-24.jpg";
import img_Chrzest_Aurelki_25 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-25.jpg";
import img_Chrzest_Aurelki_30 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-30.jpg";
import img_Chrzest_Aurelki_4 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-4.jpg";
import img_Chrzest_Aurelki_41 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-41.jpg";
import img_Chrzest_Aurelki_51 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-51.jpg";
import img_Chrzest_Aurelki_55 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-55.jpg";
import img_Chrzest_Aurelki_56 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-56.jpg";
import img_Chrzest_Aurelki_68 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-68.jpg";
import img_Chrzest_Aurelki_70 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-70.jpg";
import img_Chrzest_Aurelki_72 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-72.jpg";
import img_Chrzest_Aurelki_8 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-8.jpg";
import img_Chrzest_Aurelki_85 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-85.jpg";
import img_Chrzest_Aurelki_9 from "@/public/galeria/chrzest-komunia/Chrzest Aurelki-9.jpg";
import img_DSC01582 from "@/public/galeria/chrzest-komunia/DSC01582.jpg";

const galleryImages = [
    [img_AKD06054, img_AKD06092, img_Chrzest_Aurelki_10],
    [img_Chrzest_Aurelki_102, img_Chrzest_Aurelki_108, img_Chrzest_Aurelki_13],
    [img_Chrzest_Aurelki_20, img_Chrzest_Aurelki_22, img_Chrzest_Aurelki_24],
    [img_Chrzest_Aurelki_25, img_Chrzest_Aurelki_30, img_Chrzest_Aurelki_4],
    [img_Chrzest_Aurelki_41, img_Chrzest_Aurelki_51, img_Chrzest_Aurelki_55],
    [img_Chrzest_Aurelki_56, img_Chrzest_Aurelki_68, img_Chrzest_Aurelki_70],
    [img_Chrzest_Aurelki_72, img_Chrzest_Aurelki_8, img_Chrzest_Aurelki_85],
    [img_Chrzest_Aurelki_9, img_DSC01582]
];

export default function Page() {
    return <>
        <PictureHeader src={img_AKD06054}>Chrzty i komunie</PictureHeader>
        <article className="container py-14">
            <p></p>
            <div className="text-center">
                <Link href="/oferta" className="button">Oferta fotografii chrzcielnej i komunijnej</Link>
            </div>
        </article>
        <div className="">
            <Gallery images={galleryImages} />
        </div>
        <section className="container py-14 text-center">
            <Link href="/oferta" className="button">Oferta fotografii chrzcielnej i komunijnej</Link>
        </section>
    </>;
}