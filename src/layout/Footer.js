'use client';

import { config } from "@/config";
import { useDB } from "@/context/DBContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer () {

    const pathname = usePathname();
    const { company } = useDB();
    const year = new Date().getFullYear()

    return (
        <footer className={`w-full bg-dark color-white pv-8 ${pathname === '/reconexion' ? 'none' : ''}`}>
            <div className="w m-auto" style={{"--w": "90%"}}>
                <div className="flex flex-col gap-4">
                    <div className="size" style={{"--size": "100px"}}>
                        <img src="/LOGOTIPO.png" alt={config.ImageAlt} style={{"objectFit": "contain"}} loading="lazy" decoding="async" referrerPolicy="no-referrer" draggable={false} />
                    </div>
                    <ul className="flex gap-4">
                        {company?.socialMedia.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.url} target="_blank" className="size center bg-white rounded-full" style={{"--size": "40px"}}>{config.platform[link.platform]}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="grid grid-1 lg:grid-2 gap-4">
                        {config.navbar.map((nb, idx) => (
                            <li key={idx}>
                                <Link href={nb.url} className="color-white">{nb.text}</Link>
                            </li>
                        ))}
                        <li><Link href={'/'} className="color-white">Términos y condiciones</Link></li>
                        <li><Link href={'/'} className="color-white">Política de Privacidad</Link></li>
                        <li><Link href={'/'} className="color-white">Mapa del sitio</Link></li>
                    </ul>
                </div>
                <div className="w-full h bg-n6 mv-8" style={{"--h": "1px"}}></div>
                <div className="w-full flex items-center gap-4">
                    <p>© {year} Compañía Peruana de Innovación y Desarrollo S.A.C. - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}