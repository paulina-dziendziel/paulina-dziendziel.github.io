import HomeSlider from "./_components/MainSlider"
import Image from "next/image";

import Link from "next/link";
/*
https://tailwindcss.com/docs/configuration#referencing-in-java-script
Note that this will transitively pull in a lot of our build-time dependencies, resulting in bigger client-side bundle size. To avoid this, we recommend using a tool like babel-plugin-preval to generate a static version of your configuration at build-time.
*/
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '!/tailwind.config.js'
const fullConfig = resolveConfig(config)
import { fontHeader } from "./fonts";

import imgAboutMe from '@/public/o-mnie/P1400545.jpg'
import imgWeddings from '@/public/galeria/AKD03359.jpg'
import imgBaptismAndCommunion from '@/public/galeria/Chrzest Aurelki-13.jpg'
import imgFamilyAndChildren from '@/public/galeria/DSC06148.jpg'
import imgCouples from '@/public/galeria/DSC04245.jpg'
import imgPortraits from '@/public/galeria/AKD09962.jpg'
import imgBirthdays from '@/public/galeria/Urodzinki Nati Jusi Hani-15.jpg'
import imgParties from '@/public/galeria/AKD01524.jpg'
import imgEvents from '@/public/galeria/AKD09478.jpg'
import imgPortraitPaintings from '@/public/galeria/AKD06832a.jpg'
import imgScrapbooking from '@/public/galeria/DSC03972.jpg'

const galleries = [{
  "title": "Śluby",
  "image": imgWeddings,
  "position-x": "50%",
  "url": "/fotografia/slub"
}, {
  "title": "Chrzty i komunie",
  "image": imgBaptismAndCommunion,
  "position-x": "50%",
  "url": "/fotografia/chrzest-i-komunia"
}, {
  "title": "Rodzinne i dziecięce",
  "image": imgFamilyAndChildren,
  "position-x": "50%",
  "url": "/fotografia/rodzinna-i-dziecieca"
}, {
  "title": "Sesje dla par",
  "image": imgCouples,
  "position-x": "50%",
  "url": "/fotografia/sesje-zdjeciowe-dla-par"
}, {
  "title": "Sesje portretowe",
  "image": imgPortraits,
  "position-x": "50%",
  "url": "/fotografia/sesje-portretowe"
}, {
  "title": "Urodziny",
  "image": imgBirthdays,
  "position-x": "50%",
  "url": "/fotografia/urodziny"
}, {
  "title": "Imprezy",
  "image": imgParties,
  "position-x": "50%",
  "url": "/fotografia/imprezy"
}, {
  "title": "Wydarzenia",
  "image": imgEvents,
  "position-x": "50%",
  "url": "/fotografia/reportaz-z-wydarzenia"
}, {
  "title": "Portrety ze zdjęć",
  "image": imgPortraitPaintings,
  "position-x": "50%",
  "url": "/malarstwo/portrety-ze-zdjec"
}, {
  "title": "Koperty scrapbookingowe",
  "image": imgScrapbooking,
  "position-x": "50%",
  "url": "/scrapbooking/koperty"
}];

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-between">
        <HomeSlider />
      </section>
      <section className="container py-10">
        <article className="flow-root">
          <h2 className={fontHeader.className}>O mnie</h2>
          <Image src={imgAboutMe} width={0} height={0} alt=""
            className="float-left w-48 md:w-80 lg:w-1/3 mt-1 mr-[1.5rem] md:mr-[2rem]"
            sizes={fullConfig.theme.width[80]} />
          <p>Witaj! Mam na imię Paulina. Miło mi, że tu jesteś!
            Znajdziesz u mnie ofertę reportaży na różne okazje oraz szeroki wybór sesji od portretowych,
            rodzinnych, dziecięcych po romantyczne i ślubne. Uwiecznię Twoje najcenniejsze chwile,
            by stały się pamiątką do której chetnie będziesz wracać.</p>
          <p>
            <Link href="/o-mnie" className="text-link">Więcej o mnie i o tym jak pracuję &raquo;</Link>
          </p>
        </article>
      </section>
      <section className="pt-10" id="galeria">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2">
          {galleries.map((gallery) => {
            return (
              <div key={gallery.image.src} className="group relative">
                <Link href={gallery.url}>
                  <Image src={gallery.image} alt={gallery.title}
                    width={0} height={0} placeholder="blur" sizes="(min-width: 780px) 50vw, 100vw"
                    className="w-full h-auto border-r border-b border-orange-25"
                    style={{
                      objectPosition: gallery["position-x"]
                    }} />
                  <div className="md:text-lg bg-black/40 absolute z-10 right-1 bottom-4 py-2 px-4 uppercase text-white group-hover:pr-20 transition-all duration-500">
                    {gallery.title}
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}