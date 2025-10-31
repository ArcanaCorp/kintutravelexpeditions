import { IconArrowRight } from '@tabler/icons-react'
import './styles/hero.css'
export default function Hero () {

    return (

        <section className='__section __section_hero'>

            <div className='__box_section'>

                <h1 className='__titler'>
                    <p>Descubre tu</p>
                    <p>Aventura</p>
                </h1>

                <a href='/' className='__a_link __a_link_btn __a_link_btn_action'>Crea tu viaje ideal <IconArrowRight/> </a>

                <ul className='__list_trips'>
                    <li className='__item_trip'>
                        <a href='/' className='__card_link'>
                            <div className='__card_link_img'></div>
                            <div className='__card_link_txt'>
                                <h2>Nombre del lugar destacado</h2>
                            </div>
                        </a>
                    </li>
                    <li className='__item_trip'>
                        <a href='/' className='__card_link'>
                            <div className='__card_link_img'></div>
                            <div className='__card_link_txt'>
                                <h2>Nombre del lugar destacado</h2>
                            </div>
                        </a>
                    </li>
                    <li className='__item_trip'>
                        <a href='/' className='__card_link'>
                            <div className='__card_link_img'></div>
                            <div className='__card_link_txt'>
                                <h2>Nombre del lugar destacado</h2>
                            </div>
                        </a>
                    </li>
                    <li className='__item_trip'>
                        <a href='/' className='__card_link'>
                            <div className='__card_link_img'></div>
                            <div className='__card_link_txt'>
                                <h2>Nombre del lugar destacado</h2>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>

        </section>

    )

}