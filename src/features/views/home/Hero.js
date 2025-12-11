import cloud from '@/shared/img/cloud-1.webp'
import './styles/hero.css'
export default function Hero () {

    return (

        <section className='__section __section_hero'>
            
            <div className='--graphic-cloud --graphic-cloud-1'>
                <img src={cloud} alt='cloud' className='__img_cloud_hero' />
            </div>
            <div className='--graphic-cloud --graphic-cloud-2'>
                <img src={cloud} alt='cloud' className='__img_cloud_hero' />
            </div>
            <div className='--graphic-cloud --graphic-cloud-3'>
                <img src={cloud} alt='cloud' className='__img_cloud_hero' />
            </div>
            <div className='--graphic-cloud --graphic-cloud-4'>
                <img src={cloud} alt='cloud' className='__img_cloud_hero' />
            </div>
            <div className='__box_section'>

                <h1 className='__titler' data-aos="fade-up">
                    <p>Descubre tu</p>
                    <p>Aventura</p>
                </h1>

                <a href='/' data-aos="fade-up" className='__a_link __a_link_btn __a_link_btn_action'>
                    Crea tu viaje ideal
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" class="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                    <span className='--arrow-right'></span>
                </a>

                <ul className='__list_trips' data-aos="fade-up">
                    <li className='__item_trip'>
                        <a href='/' className='__card_link'>
                            <div className='__card_link_img'>
                                <img src='https://cdn.sanity.io/images/b6qabne3/production/afd5c6196ca8e805dab2fe98178f95f67ce5a1c0-240x320.png?w=360&h=480&q=75&fit=clip&auto=format' alt='Lugar encontrado 1' className='__card_img_bg' />
                                <img src='https://cdn.sanity.io/images/b6qabne3/production/8ace7b9a71d80d151a5e00d7739ae79d34dc6b1e-240x160.png?w=360&h=240&q=75&fit=clip&auto=format' alt='Lugar encontrado 2' className='__card_img_float'/>
                            </div>
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