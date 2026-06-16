'use client';

import { config } from "@/config";
import { useDB } from "@/context/DBContext";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header () {

    const pathname = usePathname();
    const { company } = useDB();
    const [ menu, setMenu ] = useState(false);

    return (
        <>
            <header className={`sticky inset-0 w-full bg-white h z-100 ${pathname === '/reconexion' ? 'none' : ''}`} style={{"--h": "70px"}}>
                <div className="w m-auto h-full flex items-center justify-between" style={{"--w": "90%"}}>
                    <Link href={'/'}>
                        <picture className="relative w-full block hidden h" style={{"--h": "40px"}}>
                            <source srcSet="/LOGOTIPO.png" media="(min-width: 640px) "/>
                            <source srcSet="/logo.png" media="(min-width: 1024px)" />
                            <img src="/LOGOTIPO.png" alt={config.ImageAlt} decoding="async" loading="lazy" draggable={false} referrerPolicy="no-referrer" />
                        </picture>
                    </Link>
                    <nav className="none h-full lg:block">
                        <ul className="flex h-full items-center gap-4">
                            {config.navbar.map((nv, idx) => (
                                <li key={idx}>
                                    <Link href={`${nv.url}`} className={`block ph-4 pv-2 text-nowrap ${pathname === nv.url ? 'fw-bold' : ''}`} aria-label={`Ir a ${nv.text}`}>{nv.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ul className="flex items-center gap-4">
                        <button className="size rounded-full center bg-n1" style={{"--size": "40px"}}><IconSearch/></button>
                        <button className="w-full h rounded-full center bg-n1 ph-4 lg:none" style={{"--h": "40px"}} onClick={() => setMenu(!menu)}>{menu ? 'Cerrar' : 'Menú'}</button>
                    </ul>
                </div>
            </header>
            <nav className="fixed w-screen h bg-white z-100" style={{"--h": "calc(100dvh - 70px)", top: 70, left: `${menu ? 0 : '-100dvw'}`}}>
                <ul className="w-full flex flex-col gap-8 p-6">
                    {config.navbar.map((link, idx) => (
                        <li key={idx} className="w-full"><Link href={link.url} className="fw-bold fs-2xl">{link.text}</Link></li>
                    ))}
                    <li className="w-full flex items-center gap-4 justify-center">
                        {company?.socialMedia.map((link, idx) => (
                            <Link key={idx} href={link.url} target="_blank" className="size center bg-n1 rounded-full" style={{"--size": "50px"}}>{config.platform[link.platform]}</Link>
                        ))}
                    </li>
                </ul>
            </nav>
        </>
    )
}