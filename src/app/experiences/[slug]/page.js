'use client';

import CardImage from "@/components/CardImage";
import FormContact from "@/components/FormContact";
import GridBlogs from "@/components/GridBlogs";
import ModalBooking from "@/components/ModalBooking";
import { config } from "@/config";
import { useDB } from "@/context/DBContext";
import { IconArrowLeft, IconBolt, IconClock, IconMoneybag } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Page () {

    const router = useRouter();
    const { slug } = useParams();
    const { company, tours, loadTours, booking, initBook } = useDB();

    const handleBack = () => router.back();

    const data = useMemo(() => {
        return tours.find((t) => t.slug === slug);
    }, [tours, slug]);

    const image = useMemo(() => data?.experience_images.find(img => img.is_cover), [tours])

    const handleInitBooking = () => {
        const payload = {...data, cover: image.image_url}
        initBook(payload)
    }

    if (loadTours) {
        return (
            <main className="center w-full h" style={{"--h": "calc(100dvh - 70px)"}}>
                <p>Cargando...</p>
            </main>
        )
    }

    if (!data) {
        return (
            <main className="center w-full h" style={{ "--h": "calc(100dvh - 70px)" }}>
                <p>Experiencia no encontrada.</p>
            </main>
        );
    }

    return (
        <main className="w-full">
            <section className="w-full flex flex-col gap-4 pv-4">
                <div className="relative w m-auto h bg-n1 rounded-md hidden" style={{"--w": "90%", "--h": "540px"}}>
                    <button className="absolute z-1 flex items-center gap-4 pv-2 ph-4 rounded-full bg-white" style={{"top": "10px", "left": "10px"}} onClick={handleBack}><IconArrowLeft/> Volver atrás</button>
                    <picture className="block w-full h-full">
                        <Image src={image.image_url} alt={data.experience_name} fill style={{objectFit: "cover", borderRadius: '8px'}} />
                    </picture>
                </div>
            </section>
            <section className="w-full flex flex-col gap-8 pv-8">
                <div className="w m-auto flex flex-col lg:flex-row gap-6" style={{"--w": "90%"}}>
                    <div className="w-full flex flex-col gap-4 text-center">
                        <p className="fs-xl color-gray">{data.tour_name}</p>
                        <h1 className="fs-3xl lg:fs-5xl">{data.experience_name}</h1>
                        <p className="fs-lg color-gray">{data.availability}</p>
                    </div>
                    <div className="w-full flex flex-col gap-8">
                        <h3 className="fs-3xl text-center lg:text-left">Lugares que visitan</h3>
                        <p className="color-gray leading-relaxed">{data.text}</p>
                        <ul className="flex flex-col gap-4">
                            <li className="w-full flex items-center justify-between">
                                <span className="flex items-center gap-2"><IconMoneybag/> Precio</span>
                                <span>{data.price_max} {data.currency}</span>
                            </li>
                            <li className="w-full flex items-center justify-between">
                                <span className="flex items-center gap-2"><IconBolt/> Dificultad</span>
                                <span>{data.difficulty_level}</span>
                            </li>
                            <li className="w-full flex items-center justify-between">
                                <span className="flex items-center gap-2"><IconClock/> Duración</span>
                                <span>{data.duration}</span>
                            </li>
                        </ul>
                        <div className="w-full flex gap-2">
                            <button className="w-full h bg-dark color-white rounded-full fw-bold" style={{"--h": "60px"}} onClick={handleInitBooking}>Reservar ahora</button>
                            <button className="ph-8 rounded-full bg-none">Compartir</button>
                        </div>
                    </div>
                </div>
                <ul className="w m-auto grid grid-1 md:grid-2 lg:grid-4 gap-2" style={{"--w": "90%"}}>
                    {data.experience_images.map((img) => (
                        <CardImage key={img.id} image={img.image_url} alt={`Kintu Travel`} />
                    ))}
                </ul>
            </section>
            {booking?.experience_id !== '' && ( <ModalBooking book={booking} /> )}
            <section className="w-full bg-n1 pv-8">
                <div className="w m-auto flex flex-col gap-8" style={{"--w": "90%"}}>
                    <h2 className="uppercase fs-4xl" data-aos="fade-up">Vamos a explorar más</h2>
                    <GridBlogs/>
                </div>
            </section>
            <section className="w-full pv-4">
                <div className="w m-auto flex flex-col gap-4 md:flex-row items-center justify-center md:gap-8" style={{"--w": "90%"}}>
                    <div className="flex flex-col-reverse md:flex-col">
                        <h2 className="fs-5xl fw-bolder lg:fs-8xl" data-aos="fade-up">SIN<br/>LÍMITES</h2>
                        <div className="w" style={{"--w": "100%"}} data-aos="fade-up-right">
                            <img src="/bg-unlimited.png" alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:w" style={{"--w-lg": "40%"}}>
                        <h2 className="lg:fs-3xl" data-aos="fade-up" aria-label={company?.limits.title}>{company?.limits.title}</h2>
                        {company?.limits.paragraphs.map((p, idx) => (
                            <p key={idx} className="color-gray fs-sm leading-relaxed lg:fs-md" data-aos="fade-up" aria-label={p}>{p}</p>
                        ))}
                        <Link href={'/about'} className="btn-decorative" aria-label={`Ir a la página de nosotros`} data-aos="fade-up">
                            Conócenos más
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" className="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                            <span className="arrow"></span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full bg-n1 pv-8 relative hidden">
                <div className="w m-auto flex gap-8" style={{"--w": "90%"}}>
                    <div className="none lg:block lg:w" style={{"--w-lg": "60%"}}></div>
                    <div className="w-full lg:w flex flex-col gap-4" style={{"--w-lg": "40%"}}>
                        <h2 className="lg:fs-3xl" data-aos="fade-up" aria-label="Déjanos tu información para ponernos en contacto">Déjanos tu información para ponernos en contacto</h2>
                        <p className="color-gray fs-sm leading-relaxed lg:fs-md" data-aos="fade-up">Regístrese para recibir información exclusiva sobre todo lo que sucede en <b>Kintu Travel Expeditions</b> directamente en su bandeja de entrada.</p>
                        <FormContact/>
                    </div>
                </div>
                <div className="none absolute bg-danger lg:block w h rounded-full" style={{"--w": "1000px", "--h": "1000px", top: "-50%", left: "-10%"}} data-aos="zoom-in"></div>
                <img src="/montanview.svg" className="absolute none lg:block w h-fit" style={{bottom: 0, left: "-10%", "--w": "60%"}} alt={config.ImageAlt} loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} data-aos="fade-right"/>
            </section>
        </main>
    )
}