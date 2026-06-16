import Image from "next/image";

export default function CardImage ({ image, alt }) {
    return (
        <li className="relative w-full h rounded-md bg-n1 hidden" style={{"--h": "480px"}} data-aos="flip-left">
            <Image src={image} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" style={{objectFit: "cover"}}/>
        </li>
    )
}