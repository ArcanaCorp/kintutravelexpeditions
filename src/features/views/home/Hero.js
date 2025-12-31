import { useState } from "react";
import { IconSparkles } from "@tabler/icons-react";
import { useTypewriter } from "../../components/text/TextWriting";
import './styles/hero.css'
import { Link } from "react-router-dom";
export default function Hero () {

    const [ hasTyped, setHasTyped ] = useState(false);
    const questions = ['¿Mejor fecha para conocer Jauja?', '¿Tienen paquetes para la Tunantada 2026?']
    const animatedText = useTypewriter(questions, !hasTyped);

    const handleInput = (e) => {
        const value = e.target.value.trim();
        value.length > 0 ? setHasTyped(true) : setHasTyped(false)
    };

    const cards = [
        {
            id: 1,
            title: 'Su guia para las mejores rutas'
        },
        {
            id: 2,
            title: 'Lugares favoritos para 2'
        },
        {
            id: 3,
            title: 'Traking por la historia'
        },
        {
            id: 4,
            title: 'Lo mejor de lo mejor'
        }
    ]

    return (

        <section className='__section __section_hero flex flex-col gap-4'>
            
            <div className='__box_section rounded-md ph-4 pv-8'>

                <picture className='__img_banner_home'>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://cdn.sanity.io/images/b6qabne3/production/9a0898d17d05fedb06700f7bd7214bef16a62aa7-2904x1267.jpg?rect=563,232,2341,1024&w=1280&h=560&q=75&fit=clip&auto=format"
                    />
                    <source
                        media="(min-width: 640px)"
                        srcSet="https://cdn.sanity.io/images/b6qabne3/production/9a0898d17d05fedb06700f7bd7214bef16a62aa7-2904x1267.jpg?rect=563,232,2341,1024&w=1280&h=560&q=75&fit=clip&auto=format"
                    />
                    <img src='https://cdn.sanity.io/images/b6qabne3/production/9a0898d17d05fedb06700f7bd7214bef16a62aa7-2904x1267.jpg?rect=718,131,757,1136&w=640&h=960&q=75&fit=clip&auto=format' alt='Imagen' />
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
                            <Link to={'/'} className="__item_link flex flex-col gap-2">
                                <div className="__item_bg bg-secondary rounded-md"></div>
                                <h4 className="text-xs">{c.title}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </section>

    )

}