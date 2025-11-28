import { useState } from 'react'
import { IconFlower, IconSearch, IconLeaf, IconSnowflake, IconSun, IconChevronRight, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp } from '@tabler/icons-react'
import logo from '@/shared/img/logo.png'
import './styles/header.css'
export default function Header () {

    const [ open, setOpen ] = useState(false);

    const handleToogleNav = () => {
        const body = document.body;
        if (!open) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
        setOpen(!open);
    }

    return (

        <>

            <header className="__header">
                <div className='__box_h'>
                    <a href='/' className='__a __a_logo'>
                        <img src={logo} className='__logo_img' alt='Logo - Kintu' fetchPriority='high' />
                    </a>
                    <nav className='__navbar'>
                        <ul className='__navbar_list'>
                            <li className='__navbar_item'><a className='__navbar_link' href='/'>Experiencias</a></li>
                            <li className='__navbar_item'><a className='__navbar_link' href='/'>Actividades</a></li>
                            <li className='__navbar_item'><a className='__navbar_link' href='/'>Alojamiento</a></li>
                            <li className='__navbar_item'><a className='__navbar_link' href='/'>Comida y Bebida</a></li>
                            <li className='__navbar_item'><a className='__navbar_link' href='/'>Eventos</a></li>
                        </ul>
                    </nav>
                    <ul className='__navbar_right'>
                        <li className='__li __li_search'><a href='/search'><IconSearch/></a></li>
                        <li className='__li __li_stations'>
                            <button className={`__btn_station`}><IconFlower/> <span>Primavera</span></button>
                            <button className={`__btn_station`}><IconSun/> <span>Verano</span></button>
                            <button className={`__btn_station`}><IconLeaf/><span>Otoño</span></button>
                            <button className={`__btn_station`}><IconSnowflake/><span>Invierno</span></button>
                        </li>
                        <li className='__li __li_menu'>
                            <button onClick={handleToogleNav}>{open ? 'Cerrar' : 'Menu'}</button>
                        </li>
                    </ul>
                </div>
            </header>

            <nav className={`__nav ${open ? '__nav--active' : ''}`}>
                <ul className='__nav_list'>
                    <li className='__nav_item'><a className='__nav_link' href='/'>Experiencias <IconChevronRight/></a></li>
                    <li className='__nav_item'><a className='__nav_link' href='/'>Actividades  <IconChevronRight/></a></li>
                    <li className='__nav_item'><a className='__nav_link' href='/'>Alojamiento  <IconChevronRight/></a></li>
                    <li className='__nav_item'><a className='__nav_link' href='/'>Comida y Bebida  <IconChevronRight/></a></li>
                    <li className='__nav_item'><a className='__nav_link' href='/'>Eventos  <IconChevronRight/></a></li>
                    <li className='__nav_item'><a className='__nav_link' href='/'>Planea tu visita  <IconChevronRight/></a></li>
                </ul>
                <div className='__line'></div>
                <ul className='__redes'>
                    <li className='__redes_item'><a className='__redes_link' href='/'><IconBrandFacebook/></a></li>
                    <li className='__redes_item'><a className='__redes_link' href='/'><IconBrandInstagram/></a></li>
                    <li className='__redes_item'><a className='__redes_link' href='/'><IconBrandTiktok/></a></li>
                    <li className='__redes_item'><a className='__redes_link' href='/'><IconBrandWhatsapp/></a></li>
                </ul>
            </nav>
        
        </>

    )

}