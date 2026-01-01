import { useEffect, useState } from 'react'
import { content } from '@/config';
import ButtonLink from '@/features/components/Button/ButtonLink'
import './styles/experience.css'
import { slugify } from '@/helpers/slugify';
export default function Experience () {

    const [ experiences, setExperiences ] = useState([]);

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
            const randomFive = shuffleArray(content.experiences).slice(0, 5);
            setExperiences(randomFive);
        }
    }, []);

    return (

        <section className='__section __section_experience'>

            <div className='__box_section'>

                <div className='__titler'>
                    <h2 className='__title_section'>Experiencia con Kintu</h2>
                </div>

                <ul className='__items'>
                    {experiences.map(item => (
                        <li key={item.id} className='__item __item_card __item_experience' title={`Foto de referencial de la experiencia ${item.experienceName} en el tour ${item.tourName} con ${content.companyInfo.brandName}`} data-aos="fade-left">
                            <div className='--mask'>
                                <p className='--read' aria-label='Leer más'>Leer más</p>
                            </div>
                            <img className='__banner_img' src={`/images/${item.id}/cover.jpg`} alt={`Foto de referencial de la experiencia ${item.experienceName} en el tour ${item.tourName} con ${content.companyInfo.brandName}`} fetchPriority='high' decoding='async' loading='lazy' />
                            <div className='__item_content'>
                                <div className='__item_title'>
                                    <a href={`/experiences/${slugify(item.tourName)}`} aria-label={`Ir a la experiencia ${item.experienceName} en el tour ${item.tourName} con ${content.companyInfo.brandName}`} className='__item_title_link'>{item.tourName}</a>
                                </div>
                                <div className='__item_txt'>
                                    <p>{item.experienceName}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='__row_flex'>
                    <ButtonLink text={'Ver más'} link={'/'} />
                </div>

            </div>

        </section>

    )

}