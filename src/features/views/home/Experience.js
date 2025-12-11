import { useState } from 'react'
import './styles/experience.css'
export default function Experience () {

    const [ navigate, setNavigate ] = useState('thingsToDo')

    const thingsToDo = [
        {id: 1, title: 'Explora la ciudad', description: 'Descubre los lugares más emblemáticos y la cultura local.', icon: 'map-search'},
        {id: 2, title: 'Gastronomía local', description: 'Prueba platos típicos y visita mercados tradicionales.', icon: 'food-bowl'},
        {id: 3, title: 'Aventuras al aire libre', description: 'Realiza actividades como senderismo, ciclismo o deportes acuáticos.', icon: 'mountain-sun'}
    ]

    const tripideas = [
        {id: 1, title: 'Escapada de fin de semana', description: 'Visita una ciudad cercana y disfruta de una experiencia relajante.', icon: 'building-cottage'},
        {id: 2, title: 'Ruta gastronómica', description: 'Planifica un viaje centrado en la comida y descubre nuevos sabores.', icon: 'chef-hat'},
        {id: 3, title: 'Aventura en la naturaleza', description: 'Explora parques nacionales y reserva naturales.', icon: 'tree-pine'}
    ]

    return (

        <section className='__section __section_experience'>

            <div className='__box_section'>

                <div className='__titler'>
                    <h2 className='__title_section'>EXPERIENCIA <br/> KINTU</h2>
                </div>

                <div className='__btn_navigations'>
                    <button className={`__btn ${navigate === 'thingsToDo' ? 'active' : ''}`} onClick={() => setNavigate('thingsToDo')}>Cosas que hacer</button>
                    <button className={`__btn ${navigate === 'tripideas' ? 'active' : ''}`} onClick={() => setNavigate('tripideas')}>Ideas de viajes</button>
                </div>

                <ul className='__items'>
                    {navigate === 'thingsToDo' && (
                        thingsToDo.map(item => (
                            <li key={item.id} className='__item __item_card __item_experience'>
                                <img className='__banner_img' src='https://cdn.sanity.io/images/b6qabne3/production/37a9cc3625eea8b08ca6ff7ce02190d5aaa8a428-2000x1500.jpg?rect=684,0,1051,1500&w=480&h=685&q=75&fit=clip&auto=format' alt='Una imagen de un lugare turístico' fetchPriority='high' decoding='async' loading='lazy' />
                                <div className='__item_content'>
                                    <div className='__item_title'>
                                        <a href='/' className='__item_title_link'>{item.description}</a>
                                    </div>
                                    <div className='__item_txt'>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                    {navigate === 'tripideas' && ( 
                        tripideas.map(item => (
                            <li key={item.id} className='__item __item_card __item_experience'>
                                <img className='__banner_img' src='https://cdn.sanity.io/images/b6qabne3/production/37a9cc3625eea8b08ca6ff7ce02190d5aaa8a428-2000x1500.jpg?rect=684,0,1051,1500&w=480&h=685&q=75&fit=clip&auto=format' alt='Una imagen de un acciones turisticas' fetchPriority='high' decoding='async' loading='lazy' />
                                <div className='__item_content'>
                                    <div className='__item_title'>
                                        <a href='/' className='__item_title_link'>{item.description}</a>
                                    </div>
                                    <div className='__item_txt'>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

                <div className='__row_flex'>
                    <a href={`/`} className='__btn_link'>
                        Ver más 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" class="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                        <span className='--arrow-right'></span>
                    </a>
                </div>

            </div>

        </section>

    )

}