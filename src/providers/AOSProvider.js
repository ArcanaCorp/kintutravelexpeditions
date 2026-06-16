'use client';

import Aos from "aos";
import { useEffect } from "react";

export default function AOSProvider () {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            mirror: false,
        })
    }, []);
    return null;
}