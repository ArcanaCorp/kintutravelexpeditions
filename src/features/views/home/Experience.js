import { useState } from 'react'
import './styles/experience.css'
import ButtonLink from '../../components/Button/ButtonLink'
export default function Experience () {

    const [ navigate, setNavigate ] = useState('thingsToDo')

    const thingsToDo = [
        {id: 1, title: 'Explora la ciudad', category: 'Walking Tour', icon: 'map-search'},
        {id: 2, title: 'Gastronomía local', category: 'Foodies Tour', icon: 'food-bowl'},
        {id: 3, title: 'Aventuras al aire libre', category: 'Traking', icon: 'mountain-sun'},
    ]

    const tripideas = [
        {id: 1, title: 'Escapada de fin de semana', category: 'Party Tour', icon: 'building-cottage'},
        {id: 2, title: 'Ruta gastronómica', category: 'Foodies Route', icon: 'chef-hat'},
        {id: 3, title: 'Aventura en la naturaleza', category: 'Traking', icon: 'tree-pine'},
    ]

    return (

        <section className='__section __section_experience'>

            <div className='__box_section'>

                <div className='__titler'>
                    <h2 className='__title_section'>Experiencia con Kintu</h2>
                </div>

                <div className='__btn_navigations'>
                    <button className={`__btn ${navigate === 'thingsToDo' ? 'active' : ''}`} onClick={() => setNavigate('thingsToDo')}>Cosas que hacer</button>
                    <button className={`__btn ${navigate === 'tripideas' ? 'active' : ''}`} onClick={() => setNavigate('tripideas')}>Ideas de viajes</button>
                </div>

                <ul className='__items'>
                    {navigate === 'thingsToDo' && (
                        thingsToDo.map(item => (
                            <li key={item.id} className='__item __item_card __item_experience' data-aos="fade-left">
                                <div className='--mask'>
                                    <p className='--read'>Leer más</p>
                                </div>
                                <img className='__banner_img' src='https://cdn.sanity.io/images/b6qabne3/production/37a9cc3625eea8b08ca6ff7ce02190d5aaa8a428-2000x1500.jpg?rect=684,0,1051,1500&w=480&h=685&q=75&fit=clip&auto=format' alt='Una imagen de un lugare turístico' fetchPriority='high' decoding='async' loading='lazy' />
                                <div className='__item_content'>
                                    <div className='__item_title'>
                                        <a href='/' className='__item_title_link'>{item.title}</a>
                                    </div>
                                    <div className='__item_txt'>
                                        <p>{item.category}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                    {navigate === 'tripideas' && ( 
                        tripideas.map(item => (
                            <li key={item.id} className='__item __item_card __item_experience' data-aos="fade-left">
                                <img className='__banner_img' src='https://cdn.sanity.io/images/b6qabne3/production/37a9cc3625eea8b08ca6ff7ce02190d5aaa8a428-2000x1500.jpg?rect=684,0,1051,1500&w=480&h=685&q=75&fit=clip&auto=format' alt='Una imagen de un acciones turisticas' fetchPriority='high' decoding='async' loading='lazy' />
                                <div className='__item_content'>
                                    <div className='__item_title'>
                                        <a href='/' className='__item_title_link'>{item.title}</a>
                                    </div>
                                    <div className='__item_txt'>
                                        <p>{item.category}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

                <div className='__row_flex'>
                    <ButtonLink text={'Ver más'} link={'/'} />
                </div>

            </div>

        </section>

    )

}