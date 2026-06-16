import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from "@tabler/icons-react"

export const config = {
    ImageAlt: 'Kintu Travel Expeditions no es una agencia de viajes convencional. Buscamos ser agentes de cambio construyendo un mundo más sano y feliz a través de experiencias de cinco sentidos en contacto con la naturaleza, fortaleciendo la salud física y el bienestar emocional. Cada viaje es una inversión en el ser. - Kintu Travel Expeditions',
    HeroAlt: 'Descubre tu aventura con nostros recorriendo el centro del país y viviendo las experiencias que tenemos para ti - Kintu Travel Expeditions',
    navbar: [
        {
            url: '/experiences',
            text: 'Experiencias'
        },
        {
            url: '/reconexion',
            text: 'Reconexion'
        },
        {
            url: '/blog',
            text: 'Blog'
        },
        {
            url: '/about',
            text: 'Nosotros'
        },
        {
            url: '/contact',
            text: 'Contáctanos'
        }
    ],
    gridHero: [
        {
            url: '/experiences/canipaco-ancestral',
            image: '/images/EXP-7/cover.webp',
            text: 'Canicapo Ancestral',
            alt: 'Foto de referencial de la experiencia Canipaco, Tierra de los Chunkus en el tour Canipaco Ancestral - Kintu Travel Expeditions'
        },
        {
            url: '/experiences/hatun-mayu-anchuroso-valle-del-mantaro',
            image: '/images/EXP-5/cover.webp',
            text: 'Hatun Mayu, Anchuroso Valle del Mantaro',
            alt: 'Foto de referencial de la experiencia Valle del Mantaro Clásico en el tour Hatun Mayu, Anchuroso Valle del Mantaro - Kintu Travel Expeditions'
        },
        {
            url: '/experiences/jauja-campinas-y-cascadas',
            image: '/images/EXP-3/cover.webp',
            text: 'Jauja, Campiñas y Cascadas',
            alt: 'Foto de referencial de la experiencia Campiñas, Cascadas y Laguna de Paca en el tour Jauja, Campiñas y Cascadas - Kintu Travel Expeditions'
        },
        {
            url: '/experiences/jauja-naturaleza-y-aventura',
            image: '/images/EXP-2/cover.webp',
            text: 'Jauja, Naturaleza y Aventura',
            alt: 'Foto de referencial de la experiencia Cañón de Shutjo en el tour Jauja, Naturaleza y Aventura - Kintu Travel Expeditions'
        }
    ],
    experiences: [
        {
            url: '/experiences/canipaco-ancestral',
            image: '/images/EXP-7/cover.webp',
            text: 'Canipaco Ancestral',
            subtext: 'Canipaco, Tierra de los Chunkus'
        },
        {
            url: '/experiences/dominios-del-apu-pariaqaqa',
            image: '/images/EXP-8/cover.webp',
            text: 'Dominios del Apu Pariaqaqa',
            subtext: 'Vilca y Huancaya'
        },
        {
            url: '/experiences/jauja-naturaleza-y-aventura',
            image: '/images/EXP-2/cover.webp',
            text: 'Jauja, Naturaleza y Aventura',
            subtext: 'Cañón de Shutjo'
        },
        {
            url: '/experiences/huancayo-cultural',
            image: '/images/EXP-6/cover.webp',
            text: 'Huancayo Cultural',
            subtext: 'Huancayo, Cuna de los Wankas'
        },
    ],
    platform: {
        'instagram': <IconBrandInstagram/>,
        'tiktok': <IconBrandTiktok/>,
        'facebook': <IconBrandFacebook/>,
        'youtube': <IconBrandYoutube/>
    }
}

export const SUPABASE = {
    URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    TOKEN: process.env.NEXT_PUBLIC_SUPABASE_TOKEN
}

export const IS_DEV = process.env.NEXT_PUBLIC_DEV;