import arrowRight from '@/shared/icons/arrow-right.svg'
import "./styles/buttonicon.css";
export default function ButtonIcon ({txt, txtClass}) {
    return (
        <button className={`__btn __btn_icon ${txtClass}`}>{txt} <img className='tabler-icon' src={arrowRight} alt='Icono arrow right' /></button>
    )
}