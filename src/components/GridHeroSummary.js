import { useMemo } from "react";
import CardHeroSummary from "./CardHeroSummary";
import { useDB } from "@/context/DBContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { usePreloadImagesOnVisible } from "@/hooks/usePreloadImagesOnVisible";

export default function GridHeroSummary () {

    const { tours, loadTours } = useDB();

    const randomTours = useMemo(() => {
        return [...tours]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }, [tours]);

    const images = randomTours.map(tour => tour.experience_images.find(i => i.is_cover)?.image_url);

    const preloadRef = usePreloadImagesOnVisible(images);

    if (loadTours) {
        return (
            <ul className="grid w m-auto grid-2 gap-4 lg:grid-4" style={{ "--w": "90%" }}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>
                        <Skeleton height={180} borderRadius={8} />
                        <Skeleton height={24} style={{ marginTop: 8 }} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className="grid w m-auto grid-2 gap-4 lg:grid-4" style={{"--w": "90%"}} ref={preloadRef}>
            {randomTours.map((tour) => (
                <CardHeroSummary key={tour.id} short={tour} />
            ))}
        </ul>
    )
}