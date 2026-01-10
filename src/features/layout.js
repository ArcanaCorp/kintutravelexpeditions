import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Footer from "../layout/Footer";
import { Helmet } from "react-helmet";

export default function RootLayout () {

    const { pathname } = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 800,      // velocidad de animación
            once: true,         // si solo quieres que se ejecute 1 vez
            easing: "ease-out", // ajuste fino
        });
    }, []); 

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Reinicia AOS para que reconozca nuevos elementos
        setTimeout(() => {
            AOS.refreshHard();
        }, 150); // pequeño delay para asegurar render
    }, [pathname]);

    return (

        <>

            <Helmet>
                <title>Kintu Travel Expeditions | Turismo de Bienestar y Naturaleza en Perú</title>
                <meta name="description" content="Kintu Travel Expeditions diseña experiencias de viaje de cinco sentidos enfocadas en bienestar físico, emocional y conexión con la naturaleza en Jauja y el Valle del Mantaro." />
                <meta name="keywords" content="turismo de bienestar Perú, viajes espirituales Perú, turismo psicoterapéutico, viajes conscientes, tours Jauja, Valle del Mantaro, experiencias holísticas, turismo sostenible" />
                <meta name="author" content="Kintu Travel Expeditions" />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        "name": "Kintu Travel Expeditions",
                        "url": "https://www.kintutravelexpeditions.com",
                        "logo": "https://www.kintutravelexpeditions.com/logo192.png",
                        "description": "Kintu Travel Expeditions no es una agencia de viajes convencional. Buscamos ser agentes de cambio construyendo un mundo más sano y feliz a través de experiencias de cinco sentidos en contacto con la naturaleza, fortaleciendo la salud física y el bienestar emocional. Cada viaje es una inversión en el ser.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "PE",
                            "addressRegion": "Junín",
                            "addressLocality": "Jauja"
                        },
                        "sameAs": [
                            "https://www.facebook.com/kintutravelexpeditions",
                            "https://www.tiktok.com/@kintu_travel",
                            "https://www.instagram.com/kintutravelexpeditions",
                            "https://www.youtube.com/@kintutravelexpeditions"
                        ]
                    })}
                </script>
            </Helmet>

            <Header/>

            <Main/>

            <Footer/>

        </>

    )

}