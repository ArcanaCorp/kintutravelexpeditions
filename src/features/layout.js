import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/layout/Header";
import Main from "@/layout/Main";
import Footer from "../layout/Footer";

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

            <Header/>

            <Main/>

            <Footer/>

        </>

    )

}