import { content } from '@/config'
import image1 from '@/shared/img/limit-1.jpg'
import image2 from '@/shared/img/limit-2.jpg'
import './styles/limit.css'
export default function Limits () {

    return (

        <>
        
            <section className="bg-secondary pv-4 md:pv-8">
                <div className="__box w-90 m-auto md:w-90 md:ph-8">
                    <div className="--limits-flex flex flex-col gap-8 md:flex-row md:justify-center">
                        <div className='flex flex-col md:flex-col-reverse'>
                            <div className='w-full'>
                                <div className='--limit-square-xl relative rounded-md'>
                                    <img src={image1} alt={`Con ${content.companyInfo.brandName} no hay límites`} loading='lazy' decoding='async'/>
                                    <div className='--limit-square-sm absolute rounded-md'>
                                        <img src={image2} alt={`Con ${content.companyInfo.brandName} no hay límites`} loading='lazy' decoding='async' />
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-5xl text-lh5 text-uppercase text-bolder md:text-6xl md:text-lh6'>Sin<br/>límites</h2>
                        </div>
                        <div className='--limits-text text-left'>
                            <h2 className='mb-2'>{content.companyInfo.limits.title}</h2>
                            {content.companyInfo.limits.paragraphs.map((p, index) => (
                                <p key={index} className='text-gray mb-4'>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}