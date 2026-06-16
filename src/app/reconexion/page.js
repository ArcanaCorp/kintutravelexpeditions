'use client';

import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page () {

    const router = useRouter();

    return (
        <main className="relative w-full hidden">
            <div className="w-full fixed z-50 flex" style={{"top": "10px", "left": "10px"}}>
                <button className="flex items-center w-fit h gap-4 bg-dark color-white ph-8 rounded-full" style={{"--h": "60px"}} onClick={() => router.back()}>
                    <IconChevronLeft/>
                    <img src="/reconexion/logo-recx.png" alt="Logo de Reconexión - Kintu Travel Expeditions" style={{"height": "45px", borderRadius: 0, "objectFit": "contain"}} />
                </button>
            </div>
            <section className="relative w-full h-screen hidden">
                <div className="absolute z w h rotate-slow" style={{"--w": "50%", "--h": "50%", "--z": "2", "bottom": "80px", "right": "10px"}}>
                    <Image src={'/reconexion/5 sentidos.png'} alt="" fill style={{"objectFit": "contain"}} />
                </div>
                <div className="absolute inset-0 w-full h-full bg-mask z-1"></div>
                <Image src={'/reconexion/bg-recx-1.webp'} alt="" fill style={{"objectFit": "cover"}} />
            </section>
            <section className="relative w-full h-screen bg-n1 hidden">
                <div className="absolute w lg:w-full h z" style={{"--w": "80%", "--z": "2", "--h": "120px", "bottom": "60px", "left": "20px"}} data-aos="fade-up">
                    <Image src={'/reconexion/Beneficio-1.png'} alt="" fill style={{"objectFit": "contain"}} />
                </div>
                <div className="absolute inset-0 w-full h-full bg-mask z-1"></div>
                <Image src={'/reconexion/bg-recx-2.webp'} alt="" fill style={{"objectFit": "cover"}} />
            </section>
            <section className="relative w-full h-screen hidden">
                <div className="absolute w lg:w-full h z" style={{"--w": "80%", "--z": "2", "--h": "120px", "bottom": "60px", "left": "20px"}} data-aos="fade-up">
                    <Image src={'/reconexion/Beneficio-2.png'} alt="" fill style={{"objectFit": "contain"}} />
                </div>
                <div className="absolute inset-0 w-full h-full bg-mask z-1"></div>
                <Image src={'/reconexion/bg-recx-3.webp'} alt="" fill style={{"objectFit": "cover"}} />
            </section>
            <section className="relative w-full h-screen hidden">
                <div className="absolute w lg:w-full h z" style={{"--w": "80%", "--z": "2", "--h": "120px", "bottom": "60px", "left": "20px"}} data-aos="fade-up">
                    <Image src={'/reconexion/Beneficio-3.png'} alt="" fill style={{"objectFit": "contain"}} />
                </div>
                <div className="absolute inset-0 w-full h-full bg-mask z-1"></div>
                <Image src={'/reconexion/bg-recx-4.webp'} alt="" fill style={{"objectFit": "cover"}} />
            </section>
            <section className="relative w-full h-screen hidden">
                <div className="absolute w lg:w-full h z" style={{"--w": "80%", "--z": "2", "--h": "120px", "bottom": "60px", "left": "20px"}} data-aos="fade-up">
                    <Image src={'/reconexion/Beneficio-4.png'} alt="" fill style={{"objectFit": "contain"}} />
                </div>
                <div className="absolute inset-0 w-full h-full bg-mask z-1"></div>
                <Image src={'/reconexion/bg-recx-5.webp'} alt="" fill style={{"objectFit": "cover"}} />
            </section>
            <section className="relative w-full h-screen hidden">
                <div className="absolute w lg:w-full h z" style={{"--w": "80%", "--z": "2", "--h": "120px", "bottom": "60px", "left": "20px"}} data-aos="fade-up">
                    <Image src={'/reconexion/Beneficio-5.png'} alt="" fill style={{"objectFit": "contain"}} />
                </div>
                <div className="absolute inset-0 w-full h-full bg-mask z-1"></div>
                <Image src={'/reconexion/bg-recx-6.webp'} alt="" fill style={{"objectFit": "cover"}} />
            </section>
        </main>
    )
}