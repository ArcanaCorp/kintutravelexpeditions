import ButtonIcon from '@/features/components/Button/ButtonIcon'
import logoreverse from '@/shared/img/logo-reverse.png'
import './styles/footer.css'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from '@tabler/icons-react'
import { content } from '../config';

export default function Footer () {

    const year = new Date().getFullYear()

    return (

        <footer className="__footer">
            <div className='__box_footer'>
                <div className='__row_footer __row_footer_A'>
                    <div className='__sharp'></div>
                    <div className='__content_row_A' data-aos="fade-left">
                        <h3>Subscríbete a nuestro canal</h3>
                        <p>Regístrese para recibir información exclusiva sobre todo lo que sucede en Reno Tahoe directamente en su bandeja de entrada.</p>
                        <div className='__form'>
                            <div className='__form_group'>
                                <div className='__form_control'>
                                    <input type="text" className='__form_entry' name='name' id='name' inputMode='text' placeholder="Ingresa tu nombre" required />
                                </div>
                                <div className='__form_control'>
                                    <input type="email" className='__form_entry' name='email' id='email' inputMode='email' placeholder="Ingresa tu correo electrónico" required />
                                </div>
                                <div className='__form_control'>
                                    <input type="tel" className='__form_entry' name='phone' id='phone' inputMode='numeric' placeholder="Ingresa tu número telefónico" required />
                                </div>
                            </div>
                            <div className='__form_group'>
                                <ButtonIcon txt={'Suscribirse'} txtClass={'__btn_subscribe'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='__row_footer __row_footer_B'>
                    <div className='__row_footer_content'>
                        <div className='__colA'>
                            <div className='__colA_xhs'>
                                <img className='__logo_reverse' src={logoreverse} alt='Logo reverse' />
                                <ul className='__socials_lst'>
                                    <li>
                                        <a href={content.companyInfo.socialMedia.facebook} target='_blank' rel='noopener noreferrer'>
                                            <IconBrandFacebook/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={content.companyInfo.socialMedia.instagram} target='_blank' rel='noopener noreferrer'>
                                            <IconBrandInstagram/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={content.companyInfo.socialMedia.youtube} target='_blank' rel='noopener noreferrer'>
                                            <IconBrandYoutube/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={content.companyInfo.socialMedia.tiktok} target='_blank' rel='noopener noreferrer'>
                                            <IconBrandTiktok/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='__line'></div>
                            <ul className='__colA_lst'>
                                <li><a href='/'>Política de Privacidad</a></li>
                                <li><a href='/'>Términos y Condiciones</a></li>
                                <li><a href='/'>Mapa del Sitio</a></li>
                                <li><a href='/'>Política de Privacidad</a></li>
                                <li><a href='/'>Términos y Condiciones</a></li>
                                <li><a href='/'>Mapa del Sitio</a></li>
                                <li><a href='/'>Política de Privacidad</a></li>
                                <li><a href='/'>Términos y Condiciones</a></li>
                                <li><a href='/'>Mapa del Sitio</a></li>
                            </ul>
                        </div>
                        <div className='__colB'>
                            <p>© {year} {content.companyInfo.legalName}. Todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}