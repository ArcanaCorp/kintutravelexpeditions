import { useEffect, useState } from "react";
import hero from '@/shared/img/hero.jpg'
import { content } from '@/config';
import { Link } from "react-router-dom";
import { slugify } from '@/helpers/slugify';
import { IconSparkles } from "@tabler/icons-react";
import { useTypewriter } from "../../components/text/TextWriting";
import './styles/hero.css'
export default function Hero () {

    const [ cards, setCards ] = useState([])
    const [ hasTyped, setHasTyped ] = useState(false);

    const questions = ['¿Mejor fecha para conocer Jauja?', '¿Tienen paquetes para la Tunantada 2026?', '¿Es seguro viajar con Kintu Travel Expeditions?, ¿Por qué viajar con Kintu Travel Expeditions?']
    const animatedText = useTypewriter(questions, !hasTyped);

    const handleInput = (e) => {
        const value = e.target.value.trim();
        value.length > 0 ? setHasTyped(true) : setHasTyped(false)
    };

    const shuffleArray = (array) => {
        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    };

    useEffect(() => {
        if (content?.experiences?.length) {
            const randomFive = shuffleArray(content.experiences).slice(0, 4);
            setCards(randomFive);
        }
    }, [])

    return (

        <section className='__section __section_hero flex flex-col gap-4'>
            
            <div className='__box_section rounded-md ph-4 pv-8'>

                <picture className='__img_banner_home'>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={hero}
                    />
                    <source
                        media="(min-width: 640px)"
                        srcSet={hero}
                    />
                    <img src={hero} alt='Imagen' />
                </picture>

                <div className='__home_page_hero text-center flex flex-col gap-4'>
                    <h1 className='__titler_hero text-white text-bolder' data-aos="fade-up">
                        <p>Descubre tu</p>
                        <p>Aventura</p>
                    </h1>
                    <div className="__form_ai w-full" data-aos="fade-up">
                        <label className="block w-mincontent m-auto bg-dark text-nowrap text-white text-xs p-2">Tu guía de viaje con Inteligencia Artifial</label>
                        <div className="w-full relative">
                            <input className="w-full pv-4 ph-4 rounded-pill" name="ia" id="ia" onChange={handleInput}/>
                            {!hasTyped && (
                                <span className="absolute text-xs text-gray">{animatedText}</span>
                            )}
                            <button className="absolute bg-dark center rounded-pill"><IconSparkles color="#FFFFFF"/></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="__recommend_grid w-full">
                <ul className="__items grid m-auto gap-2">
                    {cards.map((c) => (
                        <li key={c.id} className="__item w-full" data-aos="fade-up">
                            <Link to={`/experiences/${slugify(c.tourName)}`} className="__item_link flex flex-col gap-2">
                                <div className="__item_bg bg-secondary rounded-md">
                                    <img src={`/images/${c.id}/cover.jpg`}  alt={`Foto de referencial de la experiencia ${c.experienceName} en el tour ${c.tourName} con ${content.companyInfo.brandName}`} fetchPriority='high' decoding='async' loading='lazy'/>
                                </div>
                                <h4 className="text-xs">{c.tourName}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </section>

    )

}