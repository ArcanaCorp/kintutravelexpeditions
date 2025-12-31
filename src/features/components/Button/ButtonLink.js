import './styles/buttonlink.css'
export default function ButtonLink ({ text, link }) {
    return (
        <a href={link} className='--btn_link'>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" class="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
            <span className='--arrow-right'></span>
        </a>
    )
}