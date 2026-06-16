import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function CardHeroSummary ({ short }) {

    const image = useMemo(() => short.experience_images.find(img => img.is_cover), [short]);

    return (
        <li className="w-full" data-aos="fade-up">
            <Link href={`/experiences/${short.slug}`} className="flex flex-col gap-2" aria-label={`Ir a ${short.experience_name}`}>
                <div className="relative w-full h bg-n1 rounded-md hidden lg:h" style={{"--h": "120px", "--h-lg": "180px"}}>
                    <Image src={image.image_url} alt={short.experience_name} fill sizes="(max-width: 768px) 50vw, 25vw" style={{objectFit: "cover", borderRadius: '8px'}} />
                </div>
                <h4>{short.experience_name}</h4>
            </Link>
        </li>
    )
}