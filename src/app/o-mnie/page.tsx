

import Link from "next/link";
import PictureHeader from "../_components/PictureHeader";
import imgTop from '@/public/o-mnie/DSC04140.jpg'

export default function Page() {
    return <>
        <PictureHeader src={imgTop}>O mnie</PictureHeader>
        <article className="container py-14">
            <p>Dlaczego Arte? Bo sztuka zawsze była mi po drodze.</p>
            <p>
                Mam na imię Paulina. Z wykształcenia architekt i artysta plastyk.
                Pracowałam jako grafik przy projektach reklamowych oraz ilustrator gier i nadruków odzieżowych.
                Fotografia zrodziła się z pasji, a jej początki z robienia zdjęć bliskim.
            </p>
            <h3>Co jest dla mnie ważne</h3>
            <p>
                Najpiękniejsze dla mnie są naturalne emocje, spontaniczne, niepowtarzalne momenty,
                które nieraz potrafią zaskoczyć. Podczas fotorelacji staram się być blisko ludzi,
                nawiązywać z nimi kontakt i budować zaufanie.
                Dążę do tego, by fotografowani nie musieli przy mnie „pozować”,
                lecz po prostu byli sobą i czuli się swobodnie w mojej obecności, a pomaga mi w tym… uśmiech.
            </p>
            <p>
                Pracuję z dwoma aparatami. Ważne są dla mnie detale oraz jak najlepsze oddanie klimatu danego miejsca,
                w którym rozgrywa się sesja czy reportaż. Lubię jasną, naturalną kolorystykę.
                Zdjęcia, które tworzę są przeze mnie starannie wyselekcjonowane i dopracowane.
            </p>
            <h3>Poza fotografią</h3>
            <p>
                Fotografię chętnie łączę z malarstwem tradycyjnym w postaci odręcznych portretów, które mogą być dla Ciebie idealne na prezent.
                Wykonuję również niepowtarzalne, ręcznie robione koperty, stanowiące piękną oprawę zdjęć.
            </p>

            <p>
                W życiu prywatnym najważniejsza dla mnie jest rodzina oraz taniec - reggaeton i salsa.
            </p>

            <div className="text-center">
                <Link href="/kontakt" className="button">Kontakt</Link>
            </div>
        </article>
    </>;
}