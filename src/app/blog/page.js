'use client';
import FormContact from "@/components/FormContact";
import GridExperiences from "@/components/GridExperiences";
import { config } from "@/config";
import { useDB } from "@/context/DBContext";
import Link from "next/link";

export default function Page () {

    const { company } = useDB();

    return (
        <main className="w-full">
            <section className="w-full flex flex-col gap-4 pv-4">
                <div className="relative w m-auto h bg-n1 rounded-md hidden" style={{"--w": "90%", "--h": "540px"}}>
                    <div className="absolute flex items-end w-full h-full bg-mask z p-4" style={{"--z": "2"}} data-aos="fade-up">
                        <h1 className="uppercase color-white fs-5xl lg:fs-6xl lg:w" style={{"--mxw-lg": "60%"}}>Encuentra tu próxima aventura</h1>
                    </div>
                    <picture className="inset-0 absolute block w-full h-full">
                        <source srcSet="./bg-blogs.png" media="(min-width: 640px)" />
                        <source srcSet="./bg-blogs.png" media="(min-width: 1024px)" />
                        <img src="./bg-blogs.png" alt={config.HeroAlt} loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} />
                    </picture>
                </div>
            </section>
            <section className="w-full pv-4">
                <div className="w m-auto flex flex-col gap-8" style={{"--w": "90%"}}>
                    <div className="w-full" data-aos="fade-up-right">
                        <h2 className="uppercase fs-4xl">Experiencias con <span className="block fw-bolder fs-6xl">Kintu</span></h2>
                    </div>
                    <GridExperiences/>
                    <div data-aos="fade-right">
                        <Link href={'/experiences'} className="btn-decorative">
                            Ver más
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" className="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                            <span className="arrow"></span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full pv-4">
                <div className="w m-auto flex flex-col gap-4 md:flex-row items-center justify-center md:gap-8" style={{"--w": "90%"}}>
                    <div className="flex flex-col-reverse md:flex-col">
                        <h2 className="fs-5xl fw-bolder lg:fs-8xl" data-aos="fade-up">SIN<br/>LÍMITES</h2>
                        <div className="w" style={{"--w": "100%"}} data-aos="fade-up-right">
                            <img src="./bg-unlimited.png" alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} />
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
                <img src="./montanview.svg" className="absolute none lg:block w h-fit" style={{bottom: 0, left: "-10%", "--w": "60%"}} alt={config.ImageAlt} loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} data-aos="fade-right"/>
            </section>
        </main>
    )
}