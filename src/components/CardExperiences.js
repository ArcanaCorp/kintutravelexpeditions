import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function CardExperiences ({ exp, size='size' }) {

    const image = useMemo(() => exp.experience_images.find(img => img.is_cover), [exp]);

    return (
        <article className="w h lg:w lg:h xl:w" style={{"--w": "100%", "--w-lg": "100%", "--w-xl": `${size === 'full' ? '100%' : '330px'}`, "--h": "312px", "--h-lg": "480px"}} data-aos="flip-left">
            <Link href={`/experiences/${exp.slug}`} className="relative block w-full h-full rounded-md hidden">
                <div className="absolute inset-0 bg-mask color-white flex flex-col justify-end gap-2 p-4 z" style={{"--z": "2"}}>
                    <h3 className="fs-3xl">{exp.experience_name}</h3>
                    <p>{exp.tour_name}</p>
                </div>
                <Image src={image.image_url} alt={`${exp.text} - ${exp.subtext} - Kintu Travel Expeditions`} fill sizes="(max-width: 768px) 50vw, 25vw" style={{objectFit: "cover", borderRadius: '8px'}} />
            </Link>
        </article>
    )
}