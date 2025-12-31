import './styles/made.css'

export default function Made () {

    return (

        <section className="__section __section_made">

            <div className='__box_section'>

                <div className='__titler' data-aos="fade-up">
                    <h2>MADE JUST<br/>FOR YOU</h2>
                </div>

                <p className='__text' data-aos="fade-up">
                    Find out what kind of traveler you are with our 1-minute quiz, and we’ll recommend experiences across the site to fit your vibe.
                </p>

                <div className='__read' data-aos="fade-up">
                    <a href='/' className='__btn_read'>
                        Take The quiz
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" class="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                        <span className='--arrow-right'></span>
                    </a>
                </div>

            </div>

        </section>

    )

}