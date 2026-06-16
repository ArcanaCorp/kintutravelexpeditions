import { Raleway } from "next/font/google";
import "@/assets/global.css";
import "aos/dist/aos.css";
import AOSProvider from "@/providers/AOSProvider";
import { Toaster } from "sonner";
import { DBProvider } from "@/context/DBContext";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const raleway = Raleway({
    variable: "--font-base",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
})

export const metadata = {
    metadataBase: new URL("https://kintutravelexpeditions.com"),
    title: {
        default: "Kintu Travel Expeditions | Jauja Tours, Perú Travel & Adventure",
        template: "%s | Kintu Travel Expeditions",
    },
    description: "Explore the best Jauja Tours and Peru travel experiences with Kintu Travel Expeditions. Discover Huancaya, Laguna de Paca, Valle del Mantaro, Central Jungle, hiking, cultural adventures and customized tours from Jauja.",

    keywords: [
        // Marca
        "Kintu Travel Expeditions",
        "Kintu Travel",
        "Kintu Jauja",

        // Posicionamiento principal
        "Jauja Tours",
        "Jauja Tour",
        "Tours Jauja",
        "Tour Jauja",
        "Jauja Peru Tours",
        "Jauja Travel",

        // Región
        "Junín Tours",
        "Valle del Mantaro Tours",
        "Huancayo Tours",
        "Central Peru Tours",

        // Destinos
        "Huancaya Tour",
        "Laguna de Paca",
        "Bosque de Piedras",
        "Reserva Paisajística Nor Yauyos Cochas",
        "Selva Central Tours",
        "Tarma Tours",
        "Oxapampa Tours",
        "Chanchamayo Tours",

        // Internacional
        "Peru Tours",
        "Peru Travel",
        "Adventure Peru",
        "Nature Tours Peru",
        "Cultural Tours Peru",
        "Custom Tours Peru",
        "Travel Agency Peru",
        "Travel Jauja",

        // Long Tail
        "Best tours in Jauja",
        "Things to do in Jauja",
        "Adventure tours in Jauja",
        "Private tours Jauja",
        "Day trips from Jauja",
        "Peru hiking tours",
    ],

    authors: [
        {
            name: "Kintu Travel Expeditions",
        },
    ],

    creator: "Kintu Travel Expeditions",
    publisher: "Kintu Travel Expeditions",

    applicationName: "Kintu Travel Expeditions",

    category: "travel",

    alternates: {
        canonical: "https://kintutravelexpeditions.com",
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    referrer: "origin-when-cross-origin",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    openGraph: {
        title: "Jauja Tours & Peru Adventures | Kintu Travel Expeditions",

        description:
            "Discover unforgettable tours in Jauja and Peru. Explore Huancaya, Laguna de Paca, Valle del Mantaro and unique cultural and adventure experiences with Kintu Travel Expeditions.",

        url: "https://kintutravelexpeditions.com",

        siteName: "Kintu Travel Expeditions",

        locale: "en_US",

        type: "website",

        images: [
            {
                url: "https://kintutravelexpeditions.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kintu Travel Expeditions - Jauja Tours",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Kintu Travel Expeditions | Jauja Tours",

        description:
            "Experience the best tours in Jauja and Peru with unique nature, culture and adventure packages.",

        images: [
            "https://kintutravelexpeditions.com/og-image.jpg",
        ],
    },

    verification: {
        google: "0JJ7Al-MeTRk7P7VnqPXWbEBaHO6LWQLbiQvXJhRCE4",
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    manifest: "/manifest.json",
};

export default function RootLayout ({ children }) {

    return (
        <html lang="es" className={`${raleway.variable}`}>
            <body className="relative w-screen">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "TravelAgency",
                            name: "Kintu Travel Expeditions",
                            url: "https://kintutravelexpeditions.com",
                            logo: "https://kintutravelexpeditions.com/logo.png",
                            image: "https://kintutravelexpeditions.com/og-image.jpg",
                            description: "Kintu Travel Expeditions is a travel agency based in Jauja, Peru, specializing in cultural, adventure and nature tours across Jauja, Junín, Huancaya, Valle del Mantaro, Central Jungle and destinations throughout Peru.",
                            slogan: "Discover the authentic beauty of Peru through unforgettable experiences.",
                            telephone: "+51 993 507 707",
                            email: "info@kintutravelexpeditions.com",
                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "PE",
                                addressLocality: "Jauja",
                                addressRegion: "Junín",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "-11.7758",
                                longitude: "-75.4966",
                            },
                            areaServed: [
                                {
                                    "@type": "City",
                                    name: "Jauja",
                                },
                                {
                                    "@type": "AdministrativeArea",
                                    name: "Junín",
                                },
                                {
                                    "@type": "Country",
                                    name: "Peru",
                                },
                            ],
                            knowsAbout: [
                                "Jauja Tours",
                                "Peru Tours",
                                "Adventure Travel",
                                "Nature Tourism",
                                "Cultural Tourism",
                                "Huancaya Tours",
                                "Laguna de Paca",
                                "Valle del Mantaro",
                                "Central Jungle",
                                "Custom Travel Experiences",
                            ],
                            priceRange: "$$",
                            sameAs: [
                                "https://www.instagram.com/kintutravelexpeditions",
                                "https://www.facebook.com/kintutravelexpeditions",
                                "https://www.tiktok.com/@kintutravelexpeditions",
                            ],
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+51 993 507 707",
                                contactType: "customer service",
                                areaServed: "PE",
                                availableLanguage: [
                                    "Spanish",
                                    "English",
                                ],
                            },
                            foundingLocation: {
                                "@type": "Place",
                                name: "Jauja, Junín, Peru",
                            },
                        }),
                    }}
                />
                <AOSProvider/>
                <DBProvider>
                    <Header/>
                    {children}
                    <Footer/>
                </DBProvider>
                <Toaster position="top-center" duration={5000} closeButton />
            </body>
        </html>
    )

}