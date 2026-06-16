export default function manifest() {
    return {
        name: "Kintu Travel Expeditions",
        short_name: "Kintu Travel",
        description: "Explore the best Jauja Tours and Peru travel experiences with Kintu Travel Expeditions. Discover Huancaya, Laguna de Paca, Valle del Mantaro, Central Jungle, hiking, cultural adventures and customized tours from Jauja.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#6cbd44",
        orientation: "portrait",
        scope: "/",
        lang: "es-PE",
        categories: ["travel", "tourism"],
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icons/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}