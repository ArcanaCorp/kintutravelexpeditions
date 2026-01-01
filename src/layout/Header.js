import { useState } from 'react'
import { Link } from 'react-router-dom';
import { IconFlower, IconSearch, IconLeaf, IconSnowflake, IconSun, IconChevronRight, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from '@tabler/icons-react'
import logo from '@/shared/img/logo.png'
import { content } from "@/config";
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
                    <Link to={'/'} className='__a __a_logo'>
                        <img src={logo} className='__logo_img' alt={content.companyInfo.description} loading='lazy' fetchPriority='high' decoding='async' />
                    </Link>
                    <nav className='__navbar'>
                        <ul className='__navbar_list'>
                            <li className='__navbar_item'><Link className='__navbar_link' to='/experiences'>Experiencias</Link></li>
                            <li className='__navbar_item'><Link className='__navbar_link' to='/blog'>Blog</Link></li>
                            <li className='__navbar_item'><Link className='__navbar_link' to='/about'>Nosotros</Link></li>
                            <li className='__navbar_item'><Link className='__navbar_link' to='/contact'>Contáctanos</Link></li>
                        </ul>
                    </nav>
                    <ul className='__navbar_right'>
                        <li className='__li __li_search'><Link to='/search'><IconSearch/></Link></li>
                        <li className='__li __li_stations' style={{display: 'none'}}>
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
                    <li className='__nav_item'><Link className='__nav_link' to='/experiences'>Experiencias <IconChevronRight/></Link></li>
                    <li className='__nav_item'><Link className='__nav_link' to='/blog'>Blog  <IconChevronRight/></Link></li>
                    <li className='__nav_item'><Link className='__nav_link' to='/about'>Nosotros  <IconChevronRight/></Link></li>
                    <li className='__nav_item'><Link className='__nav_link' to='/contact'>Contáctanos  <IconChevronRight/></Link></li>
                    <li className='__nav_item'><Link className='__nav_link' to='/planer'>Planea tu visita  <IconChevronRight/></Link></li>
                </ul>
                <div className='__line'></div>
                <ul className='__redes'>
                    <li className='__redes_item'><a className='__redes_link' href={content.companyInfo.socialMedia.facebook}><IconBrandFacebook/></a></li>
                    <li className='__redes_item'><a className='__redes_link' href={content.companyInfo.socialMedia.instagram}><IconBrandInstagram/></a></li>
                    <li className='__redes_item'><a className='__redes_link' href={content.companyInfo.socialMedia.tiktok}><IconBrandTiktok/></a></li>
                    <li className='__redes_item'><a className='__redes_link' href={content.companyInfo.socialMedia.youtube}><IconBrandYoutube/></a></li>
                </ul>
            </nav>
        
        </>

    )

}