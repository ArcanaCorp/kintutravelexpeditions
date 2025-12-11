import './styles/explore.css'
export default function Explore () {

    return (

        <section className='__section __section_explore'>

            <div className='__box_section'>

                <div className='__titler'>
                    <h2 className='__title_section'>EXPLORAR MÁS</h2>
                </div>

                <div className='__summary'>
                    <div></div>
                    <ul className='__blog_lst'>
                        {Array.from({length: 5}).map((i) => (
                            <li key={i} className='__blog_item'>
                                <a href='/' className='__blog_item_link'>
                                    <h3>10 Magical Activities to Enjoy at Lake Tahoe in December</h3> 
                                    <p className='--read-more'>
                                        Leer más
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" class="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                                        <span className='--arrow-right'></span>
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </section>

    )

}