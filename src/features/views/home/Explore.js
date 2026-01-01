import './styles/explore.css'
export default function Explore () {
    
    const blogs = [
        {
            id: 1,
            title: '10 Magical Activities to Enjoy at Lake Tahoe in December',
            image: 'https://cdn.sanity.io/images/b6qabne3/production/ea00f887cb237a4f3d1b9789dfcd03465b7d38dd-2000x1333.jpg?rect=0,206,2000,923&w=1040&h=480&q=75&fit=clip&auto=format'
        },
        {
            id: 2,
            title: '9 Magical Activities to Enjoy at Lake Tahoe in December',
            image: 'https://cdn.sanity.io/images/b6qabne3/production/cfee2d264678100ebf5b75f0bf2191de588de3b4-2000x1334.jpg?rect=74,0,1334,1334&w=480&h=480&q=75&fit=clip&auto=format'
        },
        {
            id: 3,
            title: '8 Magical Activities to Enjoy at Lake Tahoe in December',
            image: ''
        },
        {
            id: 4,
            title: '7 Magical Activities to Enjoy at Lake Tahoe in December',
            image: ''
        },
        {
            id: 5,
            title: '6 Magical Activities to Enjoy at Lake Tahoe in December',
            image: ''
        }
    ];

    return (

        <section className='__section __section_explore'>

            <div className='__box_section w-full m-auto md:w-90 md:ph-8'>

                <div className='__titler'>
                    <h2 className='__title_section' data-aos="fade-up">Vamos a explorar más</h2>
                </div>

                <ul className='__blogs'>
                    {blogs.map((i) => (
                        <li key={i.id} className='__blog_item md:flex' data-aos="fade-up">
                            {i.image !== '' && (
                                <img className='__blog_image rounded-sm' width={480} height={480} src={i.image} alt={i.title} loading='lazy' decoding='async' />
                            )}
                            <div className='__blog_text bg-white pv-4 text-left pl-4 pr-4'>
                                <h3 className='mb-4'>{i.title}</h3>
                                <a href='/' className='__blog_item_link flex items-center gap-2'>
                                    Leer más
                                    <span className='--icon-bg'>
                                        <span className='--arrow-right'></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" class="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                                    </span>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

        </section>

    )

}