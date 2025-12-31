import ButtonLink from '../../components/Button/ButtonLink'
import './styles/quiz.css'

export default function Quiz () {

    return (

        <>
        
            <section className='w-full bg-secondary pv-8'>
                <div className='__box-quiz w-90 m-auto flex flex-col gap-4 md:flex-row'>
                    <div className='w-full overflow-hidden '>
                        <ul className='__gifts relative'>
                            <li className='__gift absolute rounded-md' data-aos="fade-up">
                                <img src='https://cdn.sanity.io/images/b6qabne3/production/3d85889b739ca9b87e92eb2bc970470d55dc140b-2000x1334.jpg?rect=0,103,2000,1129&w=280&h=158&q=75&fit=clip&auto=format' alt='Vivencias con Kintu Travel Expeditions' />
                            </li>
                            <li className='__gift absolute rounded-md' data-aos="fade-up">
                                <img src='https://cdn.sanity.io/images/b6qabne3/production/e01acd9200a670cf2e4b2034faaa39a5b007f1bb-2000x1333.jpg?rect=0,103,2000,1129&w=280&h=158&q=75&fit=clip&auto=format' alt='Vivencias con Kintu Travel Expeditions' />
                            </li>
                            <li className='__gift absolute rounded-md' data-aos="fade-up">
                                <img src='https://cdn.sanity.io/images/b6qabne3/production/9fc2350e7ab5ad33894d33fc81f985075de27f54-2000x1333.jpg?rect=0,103,2000,1129&w=280&h=158&q=75&fit=clip&auto=format' alt='Vivencias con Kintu Travel Expeditions' />
                            </li>
                        </ul>
                    </div>
                    <div className='text-center flex flex-col items-center gap-4 md:w-full md:justify-center' data-aos="fade-up">
                        <h2 className='text-5xl text-bolder'>¿Cuál es tu personalidad de viaje?</h2>
                        <p className='text-gray text-sm'>Encuentra las mejores actividades para tu estilo de viaje en menos de 60 segundos.</p>
                        <ButtonLink text={'Probar ahora'} link={'/quiz'} />
                    </div>
                </div>
            </section>

        </>

    )

}